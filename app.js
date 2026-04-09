// origin tale dialogs
function renderOrigin() {
  const container = document.getElementById("quest-scroll");
  container.innerHTML = DATA.origin
    .map(
      (d) => `
    <div class="dialog-box">
      <div class="dialog-speaker" style="background:${d.bg}">
        <svg viewBox="0 0 48 48">${d.speakerInner}</svg>
      </div>
      <div class="dialog-text">
        <h3>${d.title}</h3>
        <p>${d.text}</p>
      </div>
      <span class="dialog-advance">▼</span>
    </div>
  `,
    )
    .join("");
}

// victory cards
function renderVictory() {
  const container = document.getElementById("victory-cards");
  container.innerHTML = DATA.victory
    .map(
      (v) => `
    <div class="victory-card">
      <div class="victory-num">${v.num}</div>
      <div class="victory-label">${v.label}</div>
      <div class="victory-desc">${v.desc}</div>
    </div>
  `,
    )
    .join("");
}

// petdex entries
function renderPetdex() {
  ["iter1", "iter2", "iter3", "future"].forEach((tab) => {
    const grid = document.getElementById("grid-" + tab);
    const entries = DATA.petdex[tab].filter((e) => e.iter.includes("FEATURE"));
    grid.innerHTML = entries
      .map(
        (e) => `
      <div class="petdex-entry${e.future ? " future-entry" : ""}" onclick="openPetdexEntry('${tab}', '${e.num}')">
        <div class="entry-header">
          <span class="entry-number">${e.num}</span>
          <span class="entry-name">${e.name}</span>
          <span class="entry-type ${e.typeClass}">${e.type}</span>
        </div>
        <div class="entry-body"><p>${e.body}</p></div>
        <div class="entry-footer"><span class="entry-iteration">${e.iter}</span></div>
      </div>
    `,
      )
      .join("");
  });
}

function openPetdexEntry(tab, num) {
  const e = DATA.petdex[tab].find((item) => item.num === num);
  if (!e) return;

  const detailPage = document.getElementById("page-detail");
  detailPage.innerHTML = `
    <div class="pd-detail-header">
      <button class="pd-back-btn" onclick="closePetdexEntry('${tab}');playSound('click')">
        ◀ BACK TO LIST
      </button>
    </div>
    <div class="pd-video-container">
      <iframe 
        src="https://www.youtube.com/embed/${e.videoId}?autoplay=1&mute=0&rel=0" 
        title="${e.name} Video" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
    <div class="pd-content">
      <div class="pd-header">
        <div class="pd-title-wrap">
          <span class="pd-number">${e.num}</span>
          <h2 class="pd-name">${e.name}</h2>
          <span class="pd-type-tag ${e.typeClass}">${e.type}</span>
        </div>
      </div>
      <div class="pd-description">
        ${e.body}
      </div>
      <div class="pd-iteration-badge">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        ${e.iter}
      </div>
    </div>
  `;

  // Hide tabs
  document.querySelector(".petdex-tabs").style.display = "none";

  // Hide current page
  document
    .querySelectorAll(".petdex-page")
    .forEach((p) => p.classList.remove("active"));

  // Show detail page
  detailPage.classList.add("active");
  playSound("levelup");
}

function closePetdexEntry(tab) {
  const detailPage = document.getElementById("page-detail");
  detailPage.innerHTML = ""; // Stop video playback
  detailPage.classList.remove("active");

  // Show tabs
  document.querySelector(".petdex-tabs").style.display = "flex";

  // Restore grid page
  document.getElementById("page-" + tab).classList.add("active");
}

// guild hall
function socialIcon(icon) {
  if (icon === "github")
    return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`;
  if (icon === "linkedin")
    return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
  if (icon === "email")
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 4l10 9 10-9"/></svg>`;
  if (icon === "instagram")
    return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 2A5.5 5.5 0 0 0 2 7.5v9A5.5 5.5 0 0 0 7.5 22h9a5.5 5.5 0 0 0 5.5-5.5v-9A5.5 5.5 0 0 0 16.5 2h-9Zm0 2h9A3.5 3.5 0 0 1 20 7.5v9a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 1 7.5 4Zm4.5 2.5A5 5 0 1 0 17 11.5a5 5 0 0 0-5-5Zm0 2A3 3 0 1 1 9 11.5a3 3 0 0 1 3-3Zm5.75-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z"/></svg>`;
  return "";
}

function renderTrainers() {
  const grid = document.getElementById("trainer-grid");
  grid.innerHTML = DATA.trainers
    .map(
      (t, i) => `
    <div class="trainer-card" onclick="openTrainer(${i});playSound('levelup')">
      <div class="trainer-card-inner">
        <div class="tc-top-bar" style="background:${t.accentColor}">
          <span class="tc-num">${t.num}</span>
          <span class="tc-type-tag ${t.typeClass}">${t.typeLabel}</span>
        </div>
        <div class="tc-sprite-zone" style="background:${t.accentBg}">
          <div class="tc-sprite" style="border-color:${t.accentColor}">
            <svg viewBox="0 0 36 36">${t.spriteInner}</svg>
          </div>
          <div class="tc-hp-deco" style="background:${t.accentColor}"></div>
        </div>
        <div class="tc-info">
          <div class="tc-name">${t.name}</div>
          <div class="tc-funny-title">"${t.funnyTitle}"</div>
          <div class="tc-roles">
            <span class="tc-role-primary" style="border-color:${t.accentColor};color:${t.accentColor}">${t.primaryRole}</span>
          </div>
          <div class="tc-social-row">
            ${t.social
              .map(
                (s) => `
              <a class="tc-social-btn" href="${s.url}" target="_blank" rel="noopener" title="${s.label}" onclick="event.stopPropagation();playSound('coin')" style="--tc-accent:${t.accentColor}">
                ${socialIcon(s.icon)}
              </a>
            `,
              )
              .join("")}
          </div>
        </div>
        <div class="tc-footer" style="background:${t.accentColor}20;border-top:2px solid ${t.accentColor}40">
          <span class="tc-view-btn" style="color:${t.accentColor}">▶ VIEW FULL PROFILE</span>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function openTrainer(idx) {
  const t = DATA.trainers[idx];
  const panel = document.getElementById("trainer-panel");
  panel.innerHTML = `
    <div class="tp-overlay" onclick="closeTrainer()"></div>
    <div class="tp-window">
      <div class="tp-device-frame">
        <div class="tp-device-top" style="background:${t.accentColor}">
          <div class="tp-device-lens"></div>
          <div class="tp-device-dots">
            <div class="tp-dot" style="background:#EF5350"></div>
            <div class="tp-dot" style="background:#FDD835"></div>
            <div class="tp-dot" style="background:#66BB6A"></div>
          </div>
          <button class="tp-close-btn" onclick="closeTrainer();playSound('click')">✕ CLOSE</button>
        </div>
        <div class="tp-screen">
          <div class="tp-screen-header" style="background:${t.accentBg};border-bottom:3px solid ${t.accentColor}">
            <div class="tp-sprite-big" style="border-color:${t.accentColor}">
              <svg viewBox="0 0 36 36">${t.spriteInner}</svg>
            </div>
            <div class="tp-header-info">
              <div class="tp-header-num" style="color:${t.accentColor}">${t.num}</div>
              <div class="tp-header-name">${t.name}</div>
              <div class="tp-header-funny">"${t.funnyTitle}"</div>
              <div class="tp-header-social">
                ${t.social.map((s) => `<a class="tp-social-link" href="${s.url}" target="_blank" rel="noopener" title="${s.label}" onclick="event.stopPropagation();playSound('coin')" style="--tp-accent:${t.accentColor}">${socialIcon(s.icon)}<span>${s.label}</span></a>`).join("")}
              </div>
            </div>
          </div>

          <div class="tp-body">
            <div class="tp-roles-block">
              <div class="tp-role-row">
                <span class="tp-role-label">PRIMARY ROLE</span>
                <span class="tp-role-val" style="color:${t.accentColor}">${t.primaryRole}</span>
              </div>
              <div class="tp-role-row">
                <span class="tp-role-label">SECONDARY ROLE</span>
                <span class="tp-role-val">${t.secondaryRole}</span>
              </div>
            </div>

            <div class="tp-section">
              <div class="tp-section-title" style="border-left-color:${t.accentColor}">
                <span>⚙</span> Technical Skills Gained
              </div>
              <div class="tp-section-body">${t.skills}</div>
            </div>

            <div class="tp-section">
              <div class="tp-section-title" style="border-left-color:${t.accentColor}">
                <span>📜</span> Iteration Contributions
              </div>
              <div class="tp-iter-grid">
                <div class="tp-iter-card" style="border-top-color:${t.accentColor}">
                  <div class="tp-iter-label" style="color:${t.accentColor}">ITERATION 0</div>
                  <div class="tp-iter-sub">Project Setup & Planning</div>
                  <div class="tp-iter-text">${t.iter0}</div>
                </div>
                <div class="tp-iter-card" style="border-top-color:${t.accentColor}">
                  <div class="tp-iter-label" style="color:${t.accentColor}">ITERATION 1</div>
                  <div class="tp-iter-sub">Core Features (CRUD + Health)</div>
                  <div class="tp-iter-text">${t.iter1}</div>
                </div>
                <div class="tp-iter-card" style="border-top-color:${t.accentColor}">
                  <div class="tp-iter-label" style="color:${t.accentColor}">ITERATION 2</div>
                  <div class="tp-iter-sub">Gamification + Analytics</div>
                  <div class="tp-iter-text">${t.iter2}</div>
                </div>
                <div class="tp-iter-card" style="border-top-color:${t.accentColor}">
                  <div class="tp-iter-label" style="color:${t.accentColor}">ITERATION 3</div>
                  <div class="tp-iter-sub">Pet Profiles + Final Polish</div>
                  <div class="tp-iter-text">${t.iter3}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  panel.classList.add("open");
  document.body.style.overflow = "hidden";
  playSound("levelup");
}

function closeTrainer() {
  const panel = document.getElementById("trainer-panel");
  panel.classList.remove("open");
  document.body.style.overflow = "";
}

// quest log
function renderQuestLog() {
  const container = document.getElementById("save-file-container");
  container.innerHTML = DATA.questlog
    .map(
      (s) => `
    <div class="save-slot">
      <div class="save-slot-header" onclick="toggleSave(this);playSound('open')">
        <div class="save-slot-title">
          <svg viewBox="0 0 18 18" fill="none">${s.iconInner}</svg>
          ${s.title}
        </div>
        <span class="save-slot-meta">▶ OPEN</span>
      </div>
      <div class="save-slot-body">
        <div class="save-slot-inner">${s.body}</div>
      </div>
    </div>
  `,
    )
    .join("");
}

// setup components
renderOrigin();
renderVictory();
renderPetdex();
renderTrainers();
renderQuestLog();

// sound system

let audioCtx = null,
  soundEnabled = true;

function initAudio() {
  if (!audioCtx)
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function playTone(freq, dur, type = "square", vol = 0.08, delay = 0) {
  if (!soundEnabled || !audioCtx) return;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
  g.gain.setValueAtTime(0.001, audioCtx.currentTime + delay);
  g.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + delay + 0.01);
  g.gain.exponentialRampToValueAtTime(
    0.001,
    audioCtx.currentTime + delay + dur,
  );
  o.connect(g);
  g.connect(audioCtx.destination);
  o.start(audioCtx.currentTime + delay);
  o.stop(audioCtx.currentTime + delay + dur + 0.01);
}

function playNoise(dur, vol = 0.04, delay = 0) {
  if (!soundEnabled || !audioCtx) return;
  const buf = audioCtx.createBuffer(
    1,
    audioCtx.sampleRate * dur,
    audioCtx.sampleRate,
  );
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  const src = audioCtx.createBufferSource();
  const g = audioCtx.createGain();
  const filt = audioCtx.createBiquadFilter();
  filt.type = "bandpass";
  filt.frequency.value = 200;
  filt.Q.value = 0.5;
  src.buffer = buf;
  src.connect(filt);
  filt.connect(g);
  g.connect(audioCtx.destination);
  g.gain.setValueAtTime(vol, audioCtx.currentTime + delay);
  g.gain.exponentialRampToValueAtTime(
    0.001,
    audioCtx.currentTime + delay + dur,
  );
  src.start(audioCtx.currentTime + delay);
  src.stop(audioCtx.currentTime + delay + dur + 0.01);
}

function playSound(type) {
  initAudio();
  switch (type) {
    // pop: creature click
    case "pop":
      playTone(880, 0.06, "square", 0.09);
      playTone(1320, 0.05, "square", 0.07, 0.06);
      break;

    // select: nav / begin adventure
    case "select":
      playTone(523, 0.07, "square", 0.07);
      playTone(659, 0.07, "square", 0.07, 0.08);
      playTone(784, 0.12, "square", 0.08, 0.16);
      break;

    // click: generic button
    case "click":
      playTone(440, 0.04, "square", 0.06);
      break;

    // open: save slot / dialog appear
    case "open":
      playTone(330, 0.05, "triangle", 0.07);
      playTone(440, 0.07, "triangle", 0.07, 0.06);
      playTone(523, 0.1, "triangle", 0.07, 0.13);
      break;

    // levelup: tab switch / achievement
    case "levelup":
      [262, 330, 392, 523, 659, 784, 1047].forEach((f, i) => {
        playTone(f, 0.09, "square", 0.06, i * 0.07);
      });
      break;

    // victory: victory cards appear
    case "victory":
      playTone(523, 0.15, "square", 0.08);
      playTone(659, 0.15, "square", 0.08, 0.15);
      playTone(784, 0.15, "square", 0.08, 0.3);
      playTone(1047, 0.3, "square", 0.1, 0.45);
      playTone(784, 0.1, "triangle", 0.05, 0.5);
      break;

    // coin: map pin hover
    case "coin":
      playTone(987, 0.05, "sine", 0.07);
      playTone(1319, 0.08, "sine", 0.06, 0.05);
      break;

    // warp: section warp
    case "warp":
      for (let i = 0; i < 6; i++) {
        playTone(200 + i * 120, 0.05, "sawtooth", 0.04, i * 0.04);
      }
      break;

    // encounter: battle section
    case "encounter":
      playTone(110, 0.12, "square", 0.1);
      playTone(138, 0.12, "square", 0.1, 0.13);
      playTone(165, 0.12, "square", 0.1, 0.26);
      playTone(220, 0.25, "square", 0.12, 0.39);
      playNoise(0.08, 0.06, 0.39);
      break;

    // dead: low-hp thump
    case "dead":
      playTone(130, 0.18, "sawtooth", 0.07);
      playTone(87, 0.25, "sawtooth", 0.05, 0.12);
      break;

    // reveal: dialog appears
    case "reveal":
      playTone(659, 0.04, "square", 0.05);
      playTone(784, 0.04, "square", 0.05, 0.05);
      playTone(880, 0.08, "square", 0.06, 0.1);
      break;

    // save: quest log slot open
    case "save":
      playTone(262, 0.06, "square", 0.06);
      playTone(196, 0.06, "square", 0.05, 0.07);
      playTone(220, 0.1, "square", 0.06, 0.14);
      playNoise(0.05, 0.03, 0.14);
      break;
  }
}

// bgm chiptune loop

let bgmTimer = null;
let bgmStep = 0;

// rpg town-theme style melody (frequencies units hz)
const BGM_MELODY = [
  // bar 1
  { f: 659, d: 0.18, t: "triangle", v: 0.018 },
  { f: 784, d: 0.18, t: "triangle", v: 0.018 },
  { f: 880, d: 0.18, t: "triangle", v: 0.02 },
  { f: 784, d: 0.18, t: "triangle", v: 0.017 },
  // bar 2
  { f: 659, d: 0.18, t: "triangle", v: 0.018 },
  { f: 523, d: 0.18, t: "triangle", v: 0.017 },
  { f: 587, d: 0.36, t: "triangle", v: 0.019 },
  // bar 3
  { f: 698, d: 0.18, t: "triangle", v: 0.018 },
  { f: 784, d: 0.18, t: "triangle", v: 0.02 },
  { f: 880, d: 0.18, t: "triangle", v: 0.02 },
  { f: 988, d: 0.18, t: "triangle", v: 0.017 },
  // bar 4
  { f: 784, d: 0.18, t: "triangle", v: 0.018 },
  { f: 698, d: 0.18, t: "triangle", v: 0.017 },
  { f: 659, d: 0.36, t: "triangle", v: 0.02 },
  // bar 5 (higher refrain)
  { f: 988, d: 0.18, t: "triangle", v: 0.017 },
  { f: 880, d: 0.18, t: "triangle", v: 0.018 },
  { f: 784, d: 0.18, t: "triangle", v: 0.02 },
  { f: 659, d: 0.18, t: "triangle", v: 0.018 },
  // bar 6
  { f: 523, d: 0.18, t: "triangle", v: 0.017 },
  { f: 587, d: 0.18, t: "triangle", v: 0.017 },
  { f: 659, d: 0.36, t: "triangle", v: 0.02 },
  // bar 7
  { f: 523, d: 0.18, t: "triangle", v: 0.018 },
  { f: 440, d: 0.18, t: "triangle", v: 0.017 },
  { f: 494, d: 0.18, t: "triangle", v: 0.018 },
  { f: 523, d: 0.18, t: "triangle", v: 0.017 },
  // bar 8 (resolve)
  { f: 659, d: 0.18, t: "triangle", v: 0.02 },
  { f: 523, d: 0.18, t: "triangle", v: 0.018 },
  { f: 392, d: 0.36, t: "triangle", v: 0.016 },
];

const BGM_BASS = [
  { f: 131, d: 0.35, t: "square", v: 0.01 },
  { f: 131, d: 0.35, t: "square", v: 0.008 },
  { f: 147, d: 0.35, t: "square", v: 0.01 },
  { f: 147, d: 0.35, t: "square", v: 0.008 },
  { f: 131, d: 0.35, t: "square", v: 0.01 },
  { f: 110, d: 0.7, t: "square", v: 0.008 },
  { f: 175, d: 0.35, t: "square", v: 0.01 },
  { f: 175, d: 0.35, t: "square", v: 0.008 },
  { f: 196, d: 0.35, t: "square", v: 0.01 },
  { f: 220, d: 0.35, t: "square", v: 0.008 },
  { f: 196, d: 0.35, t: "square", v: 0.01 },
  { f: 175, d: 0.7, t: "square", v: 0.008 },
  { f: 131, d: 0.35, t: "square", v: 0.01 },
  { f: 110, d: 0.35, t: "square", v: 0.008 },
  { f: 123, d: 0.35, t: "square", v: 0.01 },
  { f: 131, d: 0.35, t: "square", v: 0.008 },
  { f: 98, d: 0.7, t: "square", v: 0.01 },
];

function scheduleBGM() {
  if (!audioCtx || !soundEnabled) return;

  let melodyTime = audioCtx.currentTime;
  let bassTime = audioCtx.currentTime;

  // Schedule full loop of melody
  BGM_MELODY.forEach((note) => {
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = note.t;
    o.frequency.value = note.f;

    // Smoother attack (longer ramp-up)
    g.gain.setValueAtTime(0.0001, melodyTime);
    g.gain.linearRampToValueAtTime(note.v * 0.8, melodyTime + 0.04);
    g.gain.setValueAtTime(note.v * 0.8, melodyTime + note.d - 0.08);
    g.gain.linearRampToValueAtTime(0.0001, melodyTime + note.d);

    o.connect(g);
    g.connect(audioCtx.destination);
    o.start(melodyTime);
    o.stop(melodyTime + note.d);
    melodyTime += note.d;
  });

  // Schedule bass line - ALSO SOFTER
  BGM_BASS.forEach((note) => {
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = note.t;
    o.frequency.value = note.f;

    // Even softer attack/release for bass
    g.gain.setValueAtTime(0.0001, bassTime);
    g.gain.linearRampToValueAtTime(note.v * 0.7, bassTime + 0.05);
    g.gain.setValueAtTime(note.v * 0.7, bassTime + note.d - 0.1);
    g.gain.linearRampToValueAtTime(0.0001, bassTime + note.d);

    o.connect(g);
    g.connect(audioCtx.destination);
    o.start(bassTime);
    o.stop(bassTime + note.d);
    bassTime += note.d;
  });

  // Schedule next loop
  const loopDuration = (melodyTime - audioCtx.currentTime) * 1000;
  bgmTimer = setTimeout(scheduleBGM, loopDuration - 200);
}

function startBGM() {
  if (bgmTimer || !soundEnabled) return;
  initAudio();
  scheduleBGM();
}

function stopBGM() {
  if (bgmTimer) {
    clearTimeout(bgmTimer);
    bgmTimer = null;
  }
  if (audioCtx) {
    audioCtx.close();
    audioCtx = null;
  }
}

// sound toggle
document.getElementById("soundToggle").addEventListener("click", function () {
  initAudio();
  soundEnabled = !soundEnabled;
  this.textContent = soundEnabled ? "♪ ON" : "♪ OFF";
  if (soundEnabled) {
    playSound("select");
    startBGM();
  } else stopBGM();
});

// Start BGM on first user interaction
document.addEventListener(
  "click",
  () => {
    initAudio();
    startBGM();
  },
  { once: true },
);

// scroll progress indicator
const xpFill = document.getElementById("xpFill");
window.addEventListener("scroll", () => {
  xpFill.style.width =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 +
    "%";
});

// scroll animations
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".dialog-box").forEach((b, i) => {
  gsap.fromTo(
    b,
    { opacity: 0, y: 40, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: "back.out(1.2)",
      scrollTrigger: { trigger: b, start: "top 85%" },
      delay: i * 0.1,
      onStart: () => {
        b.classList.add("visible");
        playSound("reveal");
      },
    },
  );
});

function animateEntries() {
  document.querySelectorAll(".petdex-entry:not(.visible)").forEach((e, i) => {
    const o = new IntersectionObserver(
      (en) => {
        en.forEach((x) => {
          if (x.isIntersecting) {
            setTimeout(() => {
              x.target.classList.add("visible");
              if (i % 3 === 0) playSound("click");
            }, i * 60);
            o.unobserve(x.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    o.observe(e);
  });
}
animateEntries();

gsap.utils.toArray(".victory-card").forEach((c, i) => {
  gsap.fromTo(
    c,
    { opacity: 0, scale: 0.85, rotateY: 15 },
    {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: { trigger: c, start: "top 85%" },
      delay: i * 0.15,
      onStart: () => {
        c.classList.add("visible");
        if (i === 0) playSound("victory");
      },
    },
  );
});

gsap.utils.toArray(".trainer-card").forEach((c, i) => {
  gsap.fromTo(
    c,
    { opacity: 0, y: 50, rotateX: 10 },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: c, start: "top 85%" },
      delay: i * 0.12,
      onStart: () => {
        c.classList.add("visible");
        playSound("coin");
      },
    },
  );
});

gsap.utils.toArray(".save-slot").forEach((s, i) => {
  gsap.fromTo(
    s,
    { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: { trigger: s, start: "top 85%" },
      delay: i * 0.1,
      onStart: () => s.classList.add("visible"),
    },
  );
});

gsap.fromTo(
  ".battle-encounter",
  { opacity: 0, scale: 1.3 },
  {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "elastic.out(1,0.5)",
    scrollTrigger: { trigger: ".battle-encounter", start: "top 80%" },
    onStart: () => {
      document.querySelector(".battle-encounter").classList.add("visible");
      playSound("encounter");
    },
  },
);

// Section warp sounds on scroll into view
const sectionSounds = {
  origin: "warp",
  petdex: "warp",
  arena: null,
  guild: "warp",
  questlog: "warp",
  victory: null,
};
Object.keys(sectionSounds).forEach((id) => {
  const el = document.getElementById(id);
  if (!el || !sectionSounds[id]) return;
  const triggered = { done: false };
  ScrollTrigger.create({
    trigger: el,
    start: "top 70%",
    onEnter: () => {
      if (!triggered.done) {
        triggered.done = true;
        playSound(sectionSounds[id]);
      }
    },
  });
});

// tab handling
function switchTab(id, btn) {
  document
    .querySelectorAll(".petdex-tab")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".petdex-page")
    .forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("page-" + id).classList.add("active");
  document
    .querySelectorAll("#page-" + id + " .petdex-entry")
    .forEach((e) => e.classList.remove("visible"));
  playSound("levelup");
  setTimeout(animateEntries, 50);
}

// save slots expand/collapse
function toggleSave(h) {
  const s = h.parentElement;
  const wasOpen = s.classList.contains("open");
  s.classList.toggle("open");
  h.querySelector(".save-slot-meta").textContent = wasOpen
    ? "▶ OPEN"
    : "▼ CLOSE";
  playSound(wasOpen ? "click" : "save");
}

// active nav checking
const sections = document.querySelectorAll("section[id]"),
  navLinks = document.querySelectorAll(".hud-nav a");
window.addEventListener("scroll", () => {
  let c = "";
  sections.forEach((s) => {
    if (scrollY >= s.offsetTop - 100) c = s.id;
  });
  navLinks.forEach((l) =>
    l.classList.toggle("active", l.getAttribute("href") === "#" + c),
  );
});
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute("href"));
    if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// background particles
const pc = document.getElementById("particles");
const cols = ["#E74C3C", "#3498DB", "#27AE60", "#F1C40F", "#8E44AD", "#1ABC9C"];
for (let i = 0; i < 25; i++) {
  const p = document.createElement("div");
  p.className = "pixel-particle";
  p.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;background:${cols[Math.floor(Math.random() * cols.length)]};animation-delay:${Math.random() * 8}s;animation-duration:${6 + Math.random() * 8}s;width:${4 + Math.random() * 4}px;height:${4 + Math.random() * 4}px`;
  pc.appendChild(p);
}

// sound for map pins
document
  .querySelectorAll(".map-pin")
  .forEach((p) => p.addEventListener("mouseenter", () => playSound("coin")));

// sound for creature hovers
document.querySelectorAll(".creature").forEach((c) => {
  const hp = c.querySelector(".c-hp-fill");
  if (!hp) return;
  const pct = parseInt(hp.style.width);
  c.addEventListener("mouseenter", () => {
    if (pct <= 30) playSound("dead");
    else playSound("pop");
  });
});
