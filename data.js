const DATA = {
  origin: [
    {
      bg: "#FFEBEE",
      speakerInner: `<circle cx="24" cy="16" r="10" fill="#E74C3C"/><rect x="10" y="28" width="28" height="16" rx="4" fill="#C0392B"/><circle cx="20" cy="14" r="2" fill="white"/><circle cx="28" cy="14" r="2" fill="white"/><path d="M20 19 Q24 23 28 19" stroke="white" stroke-width="1.5" fill="none"/>`,
      title: "The Problem",
      text: `We've all been there. You buy a guitar, promise yourself you'll practice every day... and three months later it's collecting dust. Most banking apps show <strong>what</strong> you spent but never whether the purchase was <strong>worth it</strong>. What if your stuff could tell you it's being ignored?`,
    },
    {
      bg: "#E8F5E9",
      speakerInner: `<circle cx="24" cy="16" r="10" fill="#27AE60"/><rect x="10" y="28" width="28" height="16" rx="4" fill="#1E8449"/><circle cx="20" cy="14" r="2" fill="white"/><circle cx="28" cy="14" r="2" fill="white"/><circle cx="24" cy="20" r="2" fill="white"/>`,
      title: "The Idea",
      text: `PetObject is an Android app that uses <strong>gamified tracking</strong> to help young adults monitor miscellaneous spending and reduce impulse buying. Every item becomes a virtual creature with a name, photo, and health bar. Use it regularly and your creature thrives. Neglect it and watch it slowly fade away.`,
    },
    {
      bg: "#E3F2FD",
      speakerInner: `<circle cx="24" cy="16" r="10" fill="#3498DB"/><rect x="10" y="28" width="28" height="16" rx="4" fill="#2980B9"/><circle cx="20" cy="14" r="2" fill="white"/><circle cx="28" cy="14" r="2" fill="white"/><path d="M18 20 H30" stroke="white" stroke-width="1.5"/>`,
      title: "Who It's For",
      text: `Designed for <strong>late teens (16+) and young adults</strong> who want to enjoy hobbies while building healthier financial habits. The app is strictly <strong>single-user</strong>, with data protected by your phone's own security no accounts, no cloud, complete privacy.`,
    },
    {
      bg: "#F3E5F5",
      speakerInner: `<circle cx="24" cy="16" r="10" fill="#8E44AD"/><rect x="10" y="28" width="28" height="16" rx="4" fill="#6C3483"/><path d="M18 14 L22 10 L26 14" stroke="#F1C40F" stroke-width="2" fill="none"/><circle cx="20" cy="18" r="1.5" fill="#F1C40F"/><circle cx="28" cy="18" r="1.5" fill="#F1C40F"/>`,
      title: "The Secret Sauce",
      text: `Lightweight gamification, think about <strong>Snapchat and World of Warcraft</strong> having a baby that for some reason looks like a pokemon. Retro-inspired interface with health bars, streaks, and achievements. The goal isn't a video game it's making <strong>tracking your miscellaneous purchases genuinely enjoyable</strong>.`,
    },
    {
      bg: "#FFF9C4",
      speakerInner: `<polygon points="24,6 30,18 44,20 34,30 36,44 24,38 12,44 14,30 4,20 18,18" fill="#F1C40F" stroke="#2B2D31" stroke-width="2"/><circle cx="20" cy="22" r="2" fill="#2B2D31"/><circle cx="28" cy="22" r="2" fill="#2B2D31"/><path d="M20 28 Q24 32 28 28" stroke="#2B2D31" stroke-width="1.5" fill="none"/>`,
      title: "The Mission",
      text: `Solve the problem of <strong>buying but never using</strong> by rewarding users for utilizing what they own. Records photos, prices, and usage dates then translates it into honest financial insights. <strong>No guilt trips. Just gamified awareness.</strong>`,
    },
  ],

  victory: [
    {
      num: "65%",
      label: "Logging Streaks",
      desc: "of users keep a logging streak of ten days or more during their first month",
    },
    {
      num: "20%",
      label: "Spending Reduction",
      desc: "decrease in impulse spending reported after ninety days of tracking",
    },
    {
      num: "75%",
      label: "User Satisfaction",
      desc: "find the interface engaging and effective via in-app survey",
    },
  ],

  petdex: {
    iter1: [
      {
        num: "#001",
        name: "Pet Summoning (CRUD)",
        type: "CORE",
        typeClass: "type-core",
        body: 'Snap a photo of your purchase to "summon" a creature. Name it, enter its cost, set how often you plan to use it. Edit or delete anytime.',
        iter: "★ FEATURE HIGH PRIORITY",
        videoId: "BbnzJSyh11A",
      },
      {
        num: "#002",
        name: "Log Pets",
        type: "CORE",
        typeClass: "type-core",
        body: "Set and track usage goals to stay accountable and actually use the things you invest in. The core habit-building loop.",
        iter: "★ USER STORY HIGH PRIORITY",
      },
      {
        num: "#003",
        name: "Edit Logged Pets",
        type: "CORE",
        typeClass: "type-core",
        body: "Go back and edit or delete items you've already created. Fix errors and maintain full control over your creature collection.",
        iter: "★ USER STORY HIGH PRIORITY",
      },
      {
        num: "#004",
        name: "The Pet Sanctuary",
        type: "CORE",
        typeClass: "type-core",
        body: "A dashboard where all creatures live. Visual cards in a grid photo, name, and health status. Your digital closet, way more fun than a list.",
        iter: "★ FEATURE HIGH PRIORITY",
        videoId: "XwjzFG1jgCU",
      },
      {
        num: "#005",
        name: "List of Owned Items",
        type: "CORE",
        typeClass: "type-core",
        body: "See all your items in one place. Easily review what you own at a glance without digging through menus.",
        iter: "★ USER STORY HIGH PRIORITY",
      },
      {
        num: "#006",
        name: "Pet Health Visualization",
        type: "CORE",
        typeClass: "type-core",
        body: "Real-time health bars on every card. Green = thriving, yellow = needs attention, red = danger. Identify what needs love at a glance.",
        iter: "★ USER STORY HIGH PRIORITY",
      },
      {
        num: "#007",
        name: '"Play" with Your Pet',
        type: "CORE",
        typeClass: "type-core",
        body: 'Used your guitar today? Tap "Play" to log it! Health stays full or increases. Ignore the pet and health drops. Zero = the creature dies.',
        iter: "★ FEATURE HIGH PRIORITY",
        videoId: "Of3mDvaPh6w",
      },
      {
        num: "#008",
        name: "Record Usage & Health",
        type: "CORE",
        typeClass: "type-core",
        body: "Log item usage so the creature stays healthy, reinforcing that you're getting value from your purchase. The core feedback loop.",
        iter: "★ USER STORY HIGH PRIORITY",
      },
      {
        num: "#009",
        name: "Usage Notes",
        type: "ENHANCE",
        typeClass: "type-enhance",
        body: 'Add short notes when logging "practiced scales for 30 min." Micro-journals that help you see patterns over time.',
        iter: "★ USER STORY MEDIUM PRIORITY",
      },
      {
        num: "#010",
        name: "Financial Dashboard",
        type: "ANALYTICS",
        typeClass: "type-analytics",
        body: 'Pet health meets financial reality. Total spent, "Wasted Money" for dead pets, and your Wisdom Ratio how well you use what you buy.',
        iter: "★ FEATURE HIGH PRIORITY",
        videoId: "DbGGblqFNLk",
      },
      {
        num: "#011",
        name: "Spending Overview",
        type: "ANALYTICS",
        typeClass: "type-analytics",
        body: "Total spending and wasted money in one view. Understand the financial impact of unused items at a glance.",
        iter: "★ USER STORY HIGH PRIORITY",
      },
      {
        num: "#012",
        name: "Wisdom Ratio",
        type: "ANALYTICS",
        typeClass: "type-analytics",
        body: "See how effectively you're using purchases. Track improvement over time with a single meaningful number.",
        iter: "★ USER STORY HIGH PRIORITY",
      },
    ],
    iter2: [
      {
        num: "#015",
        name: "The Trophy Shelf",
        type: "GAMIFY",
        typeClass: "type-gamify",
        body: 'Unlock achievements! "Daily Retriever" for daily use. "Weekly Winner" for using everything in a week. "Revival Witch" for saving a dying pet. Plus badges for wasteful patterns.',
        iter: "★ FEATURE MEDIUM PRIORITY",
        videoId: "AJCTI5HK-uo",
      },
      {
        num: "#016",
        name: "The Haunted Graveyard",
        type: "REFLECT",
        typeClass: "type-reflect",
        body: "When a pet dies, it moves here. Write an eulogy. View all usage notes from its lifetime to understand neglect patterns.",
        iter: "★ FEATURE MEDIUM PRIORITY",
        videoId: "p8wgxHgvfo8",
      },
      {
        num: "#017",
        name: "The Time Machine",
        type: "ANALYTICS",
        typeClass: "type-analytics",
        body: 'Graphs of "Waste vs. Value" over months, cost-per-interaction, and time-series trends. Discover patterns in your spending behaviour.',
        iter: "★ FEATURE MEDIUM PRIORITY",
        videoId: "jHVjaxnnBrE",
      },
      {
        num: "#116",
        name: "List Trophies",
        type: "GAMIFY",
        typeClass: "type-gamify",
        body: "View a list of trophies earned for good purchasing habits. Visual badge collection for responsible behaviour.",
        iter: "★ USER STORY MEDIUM PRIORITY",
      },
      {
        num: "#139",
        name: "Cost-per-Interaction",
        type: "ANALYTICS",
        typeClass: "type-analytics",
        body: "Detailed breakdown of total cost vs. total interactions. Determine which pets provide the highest return on investment.",
        iter: "★ USER STORY MEDIUM PRIORITY",
      },
      {
        num: "#140",
        name: "Time-Series Trends",
        type: "ANALYTICS",
        typeClass: "type-analytics",
        body: "Time-based metrics of interactions, spending, and usage goals. Identify long-term behavioural patterns.",
        iter: "★ USER STORY MEDIUM PRIORITY",
      },
      {
        num: "#159",
        name: "Graveyard Interaction Log",
        type: "REFLECT",
        typeClass: "type-reflect",
        body: "Log of all interactions with dead pets, revealing patterns that lead to neglect.",
        iter: "★ USER STORY MEDIUM PRIORITY",
      },
      {
        num: "#172",
        name: "App Rosetta Stone",
        type: "UX",
        typeClass: "type-ux",
        body: "Comprehensive first-time guide explaining Hearts, Play button, and health bars. One screen for full conceptual clarity.",
        iter: "★ FEATURE MEDIUM PRIORITY",
        videoId: "5NoA-HCtix8",
      },
      {
        num: "#173",
        name: "Understand Hearts",
        type: "UX",
        typeClass: "type-ux",
        body: '"Hearts" aren\'t lives to lose they reflect your intent. Use them to set weekly frequency goals without feeling penalized.',
        iter: "★ USER STORY MEDIUM PRIORITY",
      },
      {
        num: "#174",
        name: "Clarify Play Button",
        type: "UX",
        typeClass: "type-ux",
        body: 'Clear explanation that "Play" logs real-world actions after completion. Know exactly when to tap.',
        iter: "★ USER STORY MEDIUM PRIORITY",
      },
      {
        num: "#175",
        name: "Interpret Health Progress",
        type: "UX",
        typeClass: "type-ux",
        body: "Know what the progress bar measures daily streak or long-term health. Manage expectations properly.",
        iter: "★ USER STORY MEDIUM PRIORITY",
      },
      {
        num: "#176",
        name: "One-Screen Onboarding",
        type: "UX",
        typeClass: "type-ux",
        body: "All onboarding on one readable screen. Absorb everything and start confidently.",
        iter: "★ USER STORY MEDIUM PRIORITY",
      },
      {
        num: "#201",
        name: "Pet Graveyard View",
        type: "REFLECT",
        typeClass: "type-reflect",
        body: "View all unused items in one place. Reflect on spending habits and rediscover forgotten things.",
        iter: "★ USER STORY MEDIUM PRIORITY",
      },
      {
        num: "#220",
        name: "Wasteful Badges",
        type: "GAMIFY",
        typeClass: "type-gamify",
        body: "Badges earned for wasteful behaviour. Visualize bad trends in purchasing habits.",
        iter: "★ USER STORY MEDIUM PRIORITY",
      },
    ],
    iter3: [
      {
        num: "#253",
        name: "Pet Profile View",
        type: "DEEP",
        typeClass: "type-deep",
        body: "Full-screen hub for each pet. Identity, health, financial stats, and recent interactions all in one view.",
        iter: "★ FEATURE LOW PRIORITY",
        videoId: "NG7P-R5ydjE",
      },
      {
        num: "#254",
        name: "Visual Pet Biodata",
        type: "DEEP",
        typeClass: "type-deep",
        body: 'Large status display with colored health bar, percentage, and "days together" counter for long-term tracking.',
        iter: "★ USER STORY LOW PRIORITY",
      },
      {
        num: "#255",
        name: "Pet History & Finance",
        type: "DEEP",
        typeClass: "type-deep",
        body: 'Money spent, "paid for itself" status indicator, and mini-list of three most recent interactions.',
        iter: "★ USER STORY LOW PRIORITY",
      },
    ],
    future: [
      {
        num: "#013",
        name: "Life Energy & Momentum",
        type: "FUTURE",
        typeClass: "type-future",
        body: "Streak mechanic inspired by Snapchat. Health naturally decays, but consecutive usage days earn streaks with visual rewards.",
        iter: "☆ FEATURE MEDIUM PRIORITY",
        future: true,
        videoId: "dQw4w9WgXcQ",
      },
      {
        num: "#014",
        name: 'The "Help Me!" Nudge',
        type: "FUTURE",
        typeClass: "type-future",
        body: 'Notifications when health drops low: "Don\'t let me fade away." Gentle nudges to prevent waste.',
        iter: "☆ FEATURE HIGH PRIORITY",
        future: true,
        videoId: "dQw4w9WgXcQ",
      },
      {
        num: "#018",
        name: "Pet Families",
        type: "FUTURE",
        typeClass: "type-future",
        body: 'Group pets by category "Kitchen," "Tech," "Hobbies." See which family thrives and which is neglected.',
        iter: "☆ FEATURE LOW PRIORITY",
        future: true,
        videoId: "dQw4w9WgXcQ",
      },
    ],
  },

  trainers: [
    {
      id: "krish",
      name: "Krish Bhalala",
      funnyTitle: "The Guild Architect",
      primaryRole: "Technical Lead",
      secondaryRole: "Project Manager & QA",
      accentColor: "#E74C3C",
      accentBg: "#FFEBEE",
      num: "#001",
      typeLabel: "LEAD",
      typeClass: "type-core",
      spriteBg: "#FFEBEE",
      spriteInner: `<circle cx="18" cy="12" r="8" fill="#E74C3C"/><rect x="8" y="20" width="20" height="14" rx="4" fill="#C0392B"/><circle cx="15" cy="11" r="1.5" fill="white"/><circle cx="21" cy="11" r="1.5" fill="white"/>`,
      social: [
        {
          icon: "github",
          label: "GitHub",
          url: "https://github.com/Krish-Bhalala",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          url: "https://linkedin.com/in/krishbhalala",
        },
        {
          icon: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/krish._.2k4/",
        },
        {
          icon: "email",
          label: "Email",
          url: "mailto:bhalalak@myumanitoba.ca",
        },
      ],
      skills:
        "Mastered multi-layer Android architecture design and project structuring. Gained expertise in devops tasks like automated code quality using linters, custom exception protocols, and large-scale integration testing. Learned a lot of new things about leadership by creating sprint plans based on team's strength, managing technical debt, conducting tons of code reviews, coordinating task distribution, creating team workflows and onboarding docs. Learned the importance of communication skills in software development cycle, especially when it comes to communicating with stakeholders i.e. instructor and ensuring the team is on the same page with project requirements and expectations.",
      iter0: `<ul>
        <li>Came up with 10 group names and 3 project ideas (including the elected PetObject idea).</li>
        <li>Wrote the Vision Statement Drafts and base documentation.</li>
        <li>Drafted the onboarding documentation and set up the README.</li>
        <li>Compiled a "group rubric" from project expectations to guide quality checks flow.</li>
        <li>Hosted and scheduled meetings, meeting Agendas, and Discord polls for team decisions.</li>
        <li>Emailed the instructor with 8 specific questions to clarify requirements.</li>
      </ul>`,
      iter1: `<ul>
        <li>Defined the overall app architecture with scalability in mind</li>
		  <li>Created sprint plans with internal deadlines & system diagrams</li>
		  <li>Established error handling protocols and defined data flow across all layers</li>
		  <li>Setup initial project package structure with onboarding documentations and FAQs for smoother communication</li>
        <li>Created data models, communication protocols, and interfaces of all layers for the first four features.</li>
        <li>Built the backend for Pet Management Service.</li>
		  <li>Built Data seeder modules to populate the persistence layer with initial data from JSON files</li>
        <li>Created a light theme UI in HTML/CSS as a reference for the team.</li>
        <li>Established Git branching standards and merging documentation.</li>
        <li>Setup linters and formatters (spotlessApply configured with google java standards) the project.</li>
        <li>Setup the initial project structure on android studio with tests to ensure version consistency across multiple developers.</li>
		  <li>Reviewed 91 Merge Requests out of 102 merge requests.</li>
		  <li>Hosted and scheduled meetings, meeting Agendas, and Discord polls for team decisions.</li>
		  <li>Researched open source projects and past projects to take inspiration from them for project planning</li>
      </ul>`,
      iter2: `<ul>
        <li>Updated the architecture for Iteration 2 and devised group's sprint plans</li>
		  <li>Built the entire Time Machine Service backend</li>
		  <li>Migrated the entire persistence layer from stub databases to sqlite database for persistent storage</li>
        <li>Created a prioritized list of refactoring tasks based on instructor feedback.</li>
        <li>Assisted with managing the GitLab issue board, time estimates, and branch cleanup.</li>
        <li>Built the entire integration test suite with 13 tests.</li>
		  <li>Completed 4 major refactoring tasks and identified all vulnerabilities and tech debt in codebase</li>
        <li>Performed code reviews for over 80% of the team's merge requests.</li>
        <li>Flagged SOLID/DRY violations and planned refactoring sprint plan.</li>
		  <li>Hosted and scheduled meetings, meeting Agendas, and Discord polls for team decisions.</li>
		  <li>Tracked the group's progress and dev tasks in real time to prevent overlapping work.</li>
      </ul>`,
      iter3: `<ul>
        <li>Created entire e2e test suite with 14 UI Espresso tests and 10 manual e2e tests.</li>
        <li>Fixed 4 high-priority technical debt issues and resolved critical merge conflicts.</li>
        <li>Designed the Figma UI for the new Pet Profile feature.</li>
        <li>Updated architecture diagrams and documentations to match the refactored codebase.</li>
        <li>Built a Pokémon-themed presentation website for the final project demo.</li>
        <li>Wrote the testing and UI test retrospective for the project.</li>
		  <li>Created Dev tasks for all the technical debt, refactoring needs and feature requests.</li>
		  <li>Handled communication and negotiation on behalf of the team with course instructor (Lauren).</li>
      </ul>`,
    },
    {
      id: "carina",
      name: "Carina Rook",
      funnyTitle: "The Socrates of Software",
      primaryRole: "QA Lead",
      secondaryRole: "Full-Stack Developer",
      accentColor: "#8E44AD",
      accentBg: "#F3E5F5",
      num: "#002",
      typeLabel: "UX",
      typeClass: "type-ux",
      spriteBg: "#F3E5F5",
      spriteInner: `<circle cx="18" cy="12" r="8" fill="#8E44AD"/><rect x="8" y="20" width="20" height="14" rx="4" fill="#6C3483"/><circle cx="15" cy="11" r="1.5" fill="white"/><circle cx="21" cy="11" r="1.5" fill="white"/>`,
      social: [
        { icon: "github", label: "GitHub", url: "https://github.com/" },
        {
          icon: "linkedin",
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/carina-rook-8271a735a/",
        },
        {
          icon: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/carinahrook/",
        },
        { icon: "email", label: "Email", url: "mailto:rookc@myumanitoba.ca" },
      ],
      skills:
        "Specialized in creating reactive UI components and complex navigation flows. Gained experience in data persistence for user walkthroughs and state-based filtering. Developed a strong eye for identifying code smells and refactoring UI logic into reusable utility classes.",
      iter0: `<ul>
        <li>Pitched 1 app idea and few group names.</li>
        <li>Participated in all feature selection and planning meetings.</li>
        <li>Reviewed and provided feedback on the vision statement and user stories.</li>
      </ul>`,
      iter1: `<ul>
        <li>Made the pet health bar reactive using polling techniques.</li>
        <li>Built logic to change health bar colors based on pet status.</li>
        <li>Created 5 utility classes to clean up the Summon and Edit pet screens.</li>
        <li>Identified design principle violations during code reviews.</li>
      </ul>`,
      iter2: `<ul>
        <li>Created the Haunted Graveyard, pet cards, and the revival logic.</li>
        <li>Implemented filtering and navigation between the sanctuary and graveyard.</li>
        <li>Developed the app walkthrough structure and feature highlighting system.</li>
        <li>Wrote JUnit tests for new business logic methods.</li>
      </ul>`,
      iter3: `<ul>
        <li>Implemented the full Pet Profile screen feature.</li>
        <li>Refactored the walkthrough with new persistence and business layers.</li>
        <li>Created 2 new UI helper classes to eliminate duplicated code.</li>
        <li>Wrote JUnit and integration tests for the walkthrough system.</li>
      </ul>`,
    },
    {
      id: "satyam",
      name: "Satyam Bhanot",
      funnyTitle: "The Coding Juggernaut",
      primaryRole: "Project Coordinator",
      secondaryRole: "Full-Stack Developer & Refactorer",
      accentColor: "#F1C40F",
      accentBg: "#FFF9C4",
      num: "#004",
      typeLabel: "DATA",
      typeClass: "type-analytics",
      spriteBg: "#FFF9C4",
      spriteInner: `<circle cx="18" cy="12" r="8" fill="#F1C40F"/><rect x="8" y="20" width="20" height="14" rx="4" fill="#D4AC0D"/><circle cx="15" cy="11" r="1.5" fill="#2B2D31"/><circle cx="21" cy="11" r="1.5" fill="#2B2D31"/>`,
      social: [
        { icon: "github", label: "GitHub", url: "https://github.com/" },
        {
          icon: "linkedin",
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/satyam-bhanot/",
        },
        {
          icon: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/bhanotsatyam/",
        },
        {
          icon: "email",
          label: "Email",
          url: "mailto:bhanots1@myumanitoba.ca",
        },
      ],
      skills:
        "Became an expert in writing unit tests, contributing over 150 tests to the project. Gained experience in complex UI state management, including input validation and list optimization. Mastered the implementation of business logic for financial tracking and health calculations.",
      iter0: `<ul>
        <li>Pitched 2 project ideas and helped narrow down 9 core features.</li>
        <li>Provided a list of 18 features and 32 user stories for brainstorming.</li>
        <li>Drafted a technical plan for a backup project idea.</li>
      </ul>`,
      iter1: `<ul>
        <li>Built the Summon Pet UI with photo picking and cost fields.</li>
        <li>Implemented the Edit Pet screen and the "floating pill" bottom navigation.</li>
        <li>Built the Financial Dashboard UI and live data fragment logic.</li>
        <li>Implemented the Delete Pet feature across all layers.</li>
        <li>Added inline error validation for all user inputs.</li>
        <li>Wrote over 150 unit tests to ensure business logic reliability.</li>
      </ul>`,
      iter2: `<ul>
        <li>Fixed app crashes related to pet IDs and Time Machine bugs.</li>
        <li>Optimized scrolling performance using NestedScrollView.</li>
        <li>Refactored Pet Management and Financial Dashboard services to be cleaner.</li>
        <li>Built the Time Machine screen with spending charts and lists.</li>
        <li>Wrote 14 unit tests for health calculation and converted tests to Mockito.</li>
      </ul>`,
      iter3: `<p>Member preferred not to disclose it</p>`,
    },
    {
      id: "laurel",
      name: "Laurel Lassi",
      funnyTitle: "The GitLab Wizard",
      primaryRole: "Gitlab Manager",
      secondaryRole: "Full-Stack Developer & QA",
      accentColor: "#27AE60",
      accentBg: "#E8F5E9",
      num: "#003",
      typeLabel: "LORE",
      typeClass: "type-reflect",
      spriteBg: "#E8F5E9",
      spriteInner: `<circle cx="18" cy="12" r="8" fill="#27AE60"/><rect x="8" y="20" width="20" height="14" rx="4" fill="#1E8449"/><circle cx="15" cy="11" r="1.5" fill="white"/><circle cx="21" cy="11" r="1.5" fill="white"/>`,
      social: [
        { icon: "github", label: "GitHub", url: "https://github.com/" },
        {
          icon: "linkedin",
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/laurel-lassi-381623374/",
        },
        {
          icon: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/laurellassi/",
        },
        {
          icon: "email",
          label: "Email",
          url: "mailto:lassimol@myumanitoba.ca",
        },
      ],
      skills:
        "Developed proficiency in project administrative tasks, including issue tracking and milestone management. Gained experience in implementing gamified systems like trophies and achievements. Sharpened QA skills through cross-team code reviews and bug fixes.",
      iter0: `<ul>
        <li>Participated in project selection and group naming meeting</li>
        <li>Proof Read and refined the vision statement and feature list.</li>
        <li>Uploaded the vision statement to Git and created initial GitLab issues.</li>
      </ul>`,
      iter1: `<ul>
        <li>Authored the project's coding standards document.</li>
        <li>Built the sanctuary card grid and reusable pet cards.</li>
        <li>Refactored code smells and managed GitLab tasks for the iteration.</li>
      </ul>`,
      iter2: `<ul>
        <li>Fixed navigation bar bugs and added validation to the summon page.</li>
        <li>Created JSON seed data for dead pets to help with testing.</li>
        <li>Built the core logic for the Trophy and Achievement system.</li>
        <li>Maintained the issue board and contributed to the project worksheet.</li>
      </ul>`,
      iter3: `<p>Member preferred not to disclose it</p>`,
    },
    {
      id: "samuel",
      name: "Samuel Heppner",
      funnyTitle: "The Heppy Critique",
      primaryRole: "Documentation Lead",
      secondaryRole: "QA & Refactorer",
      accentColor: "#3498DB",
      accentBg: "#E3F2FD",
      num: "#005",
      typeLabel: "ENGINE",
      typeClass: "type-enhance",
      spriteBg: "#E3F2FD",
      spriteInner: `<circle cx="18" cy="12" r="8" fill="#3498DB"/><rect x="8" y="20" width="20" height="14" rx="4" fill="#2980B9"/><circle cx="15" cy="11" r="1.5" fill="white"/><circle cx="21" cy="11" r="1.5" fill="white"/>`,
      social: [
        { icon: "github", label: "GitHub", url: "https://github.com/" },
        {
          icon: "linkedin",
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/samuel-ah/",
        },
        {
          icon: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/samuelheppner/",
        },
        {
          icon: "email",
          label: "Email",
          url: "mailto:heppne10@myumanitoba.ca",
        },
      ],
      skills:
        "Focused on applying software design principles (like OCP) to real-world code. Gained experience in building complex interaction logs and time-based health algorithms. Developed skills in refactoring legacy-style code to remove magic numbers and improve exception handling.",
      iter0: `<ul>
        <li>Contributed to project and group naming ideas.</li>
        <li>Reviewed and edited user stories and feature plans.</li>
        <li>Participated in all group working agreement discussions.</li>
      </ul>`,
      iter1: `<ul>
        <li>Built the Usage Note button and the notes dialog system.</li>
        <li>Linked notes to a stub database for storage.</li>
        <li>Implemented the core health calculation formula (time and frequency).</li>
        <li>Created global constants to remove "magic numbers" from the codebase.</li>
        <li>Refactored every Java file in the project to follow the Open-Close principle.</li>
      </ul>`,
      iter2: `<ul>
        <li>Built the Interaction Log UI and logic for the Pet Graveyard.</li>
        <li>Refactored the model layer with descriptive names and custom exceptions.</li>
        <li>Simplified the business layer by removing "catch/rethrow" patterns.</li>
        <li>Fixed OCP violations in the main navigation using HashMap routing.</li>
        <li>Resolved technical debt issues regarding string constants.</li>
      </ul>`,
      iter3: `<ul>
         <li>Wrote team retrospective and charted velocity of development</li>
         <li>Fixed a bug related to the Edit Pets feature causing custom photos to not be saved</li>
         <li>Audited Integration test suite</li>
         <li>Collaborated to fix last-minute merge conflicts</li>
       </ul>`,
    },
  ],

  questlog: [
    {
      iconInner: `<rect x="2" y="2" width="14" height="14" rx="2" fill="#F1C40F" stroke="#2B2D31" stroke-width="1.5"/><rect x="5" y="5" width="8" height="4" fill="#2B2D31"/><rect x="8" y="10" width="4" height="4" rx="1" fill="#2B2D31"/>`,
      title: "SAVE 01 System Architecture",
      body: `<p>PetObject is built with a strict <strong>package-by-layer architecture</strong> split into six layers: Presentation, Business, Persistence, Application, Models, and Exceptions.</p><p>The <strong>Presentation layer</strong> holds all UI code Activities, Fragments (Sanctuary, Graveyard, Time Machine, Pet Profile, etc.), adapters, and the walkthrough system. It never talks to the database directly. The <strong>Business layer</strong> contains all logic: health calculations, trophy evaluation, financial summaries, and usage tracking. The <strong>Persistence layer</strong> handles storage through repository interfaces with both stub and real SQLite implementations, making it easy to swap during testing. The <strong>Application layer</strong> ties everything together: it initializes the app, loads seed data from JSON, and injects the right dependencies into the rest of the system.</p><p>There are 98 production Java classes and 133 Java files total including tests. The codebase grew from 4 screens and 2 models in Iteration 1 to 9 screens and a full suite of services, evaluators, and walkthrough infrastructure by the end.</p>`,
    },
    {
      iconInner: `<polygon points="9,2 11,7 16,7 12,10 14,16 9,12 4,16 6,10 2,7 7,7" fill="#F1C40F" stroke="#2B2D31" stroke-width="1.5"/>`,
      title: "SAVE 02 What Went Well",
      body: `<p>The architecture held up really well across all three iterations. Because each layer communicates only through interfaces, team members could work on different features at the same time without stepping on each other's code. No one had to wait for someone else to finish before starting their part.</p><p>We went from a handful of tests to 239 tests covering all business services and models. The structured interface contracts made testing straightforward since we could swap in stub repositories without touching business logic.</p><p>Tasks were assigned based on each person's strengths for example, database-heavy work went to those with prior backend experience, while UI-forward features went to those with front-end interests. This kept contributions high-quality and reduced friction.</p><p>GitLab issue tracking also improved steadily. By Iteration 3, every task had a proper label, time estimate, and milestone, which made planning and reviews much easier to follow.</p>`,
    },
    {
      iconInner: `<circle cx="9" cy="9" r="7" fill="#E74C3C" stroke="#2B2D31" stroke-width="1.5"/><rect x="8" y="4" width="2" height="6" rx="1" fill="white"/><circle cx="9" cy="13" r="1.2" fill="white"/>`,
      title: "SAVE 03 What Went Wrong",
      body: `<p>In Iteration 1, implementation started much later than planned. Several features were still being coded in the final days before the deadline, which left almost no time for thorough testing or code review. Reviewers were rushing to get through merge requests while also trying to finish their own work, so some issues slipped through.</p><p>Merge conflicts also piled up near the end because multiple people were editing overlapping files at the same time. Final cleanup tasks, like removing dead code and fixing DRY violations, had to be rushed rather than handled gradually.</p><p>Our time estimates were also off by a lot early on in Iterations 1 and 2 we overshot by roughly 95% and 119% respectively. We were consistently planning for much more time than we actually spent, which made planning feel unreliable.</p>`,
    },
    {
      iconInner: `<path d="M9 2 L16 9 L9 16 L2 9 Z" fill="#8E44AD" stroke="#2B2D31" stroke-width="1.5"/><path d="M7 9 L9 11 L12 7" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/>`,
      title: "SAVE 04 Iteration 2 Retrospective",
      body: `<p><strong>What we identified:</strong> After Iteration 2, we noticed that large merge requests containing many unrelated changes were slowing everything down. If one person had a big open merge request, others couldn't easily contribute without risking conflicts.</p><p><strong>What changed:</strong> In Iteration 3 we introduced a "Tech Debt" label in GitLab and required that every tech debt fix get its own dedicated merge request. Feature merge requests were only allowed to include changes directly tied to that feature nothing else.</p><p><strong>Was it successful?</strong> Yes. Reviews became faster and less stressful, and merge conflicts dropped noticeably.</p><p><strong>Evidence:</strong> Iteration 3 had fewer feature completions (~13 vs. ~100 in Iteration 2), yet we had a comparable number of merge requests (32 vs. 39), showing work was broken into smaller, focused pieces. Over 80% of merge requests were merged within one day, compared to several days in earlier iterations.</p>`,
    },
    {
      iconInner: `<rect x="3" y="3" width="12" height="12" rx="2" fill="#3498DB" stroke="#2B2D31" stroke-width="1.5"/><path d="M6 9 L9 6 L12 9 M9 6 V13" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/>`,
      title: "SAVE 05 If We Started Over",
      body: `<p>We would start implementation earlier. Waiting until the final days to write code put too much pressure on reviewers and left no buffer for testing. Starting within the first few days of a sprint would give the whole team more breathing room.</p><p>We would also lock in the health decay algorithm much earlier. It touched every major feature the Sanctuary, Graveyard, Financial Dashboard, and Trophy logic all depended on it so any changes late in development had a ripple effect across the whole codebase.</p><p>We would also define collaboration norms more clearly at the start. There were moments where it wasn't obvious when to step in and help someone versus staying in your own lane. Setting clearer expectations early would have made it easier for people to ask for help without feeling like they were overstepping.</p>`,
    },
    {
      iconInner: `<circle cx="9" cy="9" r="7" fill="#27AE60" stroke="#2B2D31" stroke-width="1.5"/><path d="M5 9 A4 4 0 0 1 13 9" stroke="white" stroke-width="1.5" fill="none"/><polygon points="12,7 14,9 12,11" fill="white"/>`,
      title: "SAVE 06 How the Vision Evolved",
      body: `<p>The core idea stayed exactly the same from day one: make items feel alive so users notice when they stop using them. What changed was scope and depth.</p><p>The <strong>streak mechanic</strong> was planned for Iteration 1 but got pushed to future scope once we realized we needed a rock-solid base health system first. There was no point building streaks on top of a formula we weren't confident in.</p><p>The <strong>Graveyard</strong> started as a simple list of dead pets and grew into a full reflection tool with an interaction log and the ability to write a eulogy features that actually made users stop and think about their spending habits, which is exactly what the app is for.</p><p>The <strong>Walkthrough / Onboarding system</strong> wasn't in the original vision at all. It emerged from early testing sessions where users were confused about what "Hearts" meant and when to tap "Play." That feedback drove us to build a first-time tutorial, which ended up being one of the most impactful things we shipped.</p>`,
    },
  ],
};
