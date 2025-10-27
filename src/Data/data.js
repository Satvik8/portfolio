export const skills = [
  // Core Web Technologies
  "HTML 5",
  "CSS 3",
  "JavaScript",
  "TypeScript",

  // Frontend Frameworks & Libraries
  "React",
  "Next.js",
  "Redux",
  "Redux Toolkit",
  "React Router",
  "React Query",

  // Styling & UI
  "Tailwind CSS",
  "Bootstrap",
  "SCSS",
  "Styled Components",
  "Ant Design",
  "Radix UI",
  "Framer Motion",

  // Backend & APIs
  "Node.js",
  "REST APIs",
  "WebSocket",
  "Axios",

  // Blockchain & Web3
  "Web3",

  "Blockchain SDKs",

  // Data Visualization
  "Chart.js",
  "Recharts",
  "ApexCharts",
  "Three.js",

  // Version Control
  "Git",
  "GitHub",

  // Other Technologies
  "Vite",
  "Moment.js",
  "React Hook Form",
  "Lottie",
  "Canvas APIs",
  "PHP",
  "MySQL",
  "C",
  "Java",
];

export const projects = [
  {
    title: "Pay circle (FinTech Platform)",
    duration: " 2023 -  2024",
    role: "Frontend Developer",
    description:
      "A financial technology platform with payment processing, analytics dashboards, and secure authentication workflows.",
    technologies: [
      "React.js",
      "Redux",
      "Ant Design",
      "Bootstrap",
      "Chart.js",
      "React Hook Form",
      "Axios",
      "Plaid API (react-plaid-link)",
      "WebSocket (stompjs/sockjs-client)",
      "React Router v6",
    ],
    links: [
      {
        name: "Link1",
        url: "https://paycircle.io/",
      },
      {
        name: "Link2",
        url: "https://pay.paycircle.io/",
      },
    ],
    contributions: [
      "Built secure payment flows using Plaid API and React Hook Form for validation.",
      "Developed real-time transaction dashboards with Chart.js and WebSocket integration.",
      "Implemented role-based routing (React Router v6) and Redux for state management.",
      "Designed responsive UI components with Ant Design and Bootstrap for consistency.",
      "Optimized performance by lazy-loading components and reducing bundle size by 35%.",
      "Integrated OTP authentication (react-otp-input) and session management (react-idle-timer).",
    ],
  },
  {
    title: "DIAMANTE Node Sale Platform - Quantum Proof NFT Pre-Booking",
    duration: "January 2025 - Present", // Adjust dates based on actual duration
    role: "Frontend Developer",
    description:
      "Web3-powered pre-booking platform for Quantum Proof NFTs with wallet integration, token swapping, and countdown timer. Features secure blockchain transactions, real-time updates via WebSocket, and responsive mobile-first design.",
    technologies: [
      "React.js",
      "TypeScript",
      "Wagmi",
      "Viem",
      "Redux Toolkit",
      "Tailwind CSS",
      "Radix UI",
      "Ethers.js",
      "ConnectKit",
      "WebSocket",
      "React Router v7",
      "Axios",
      "Sonner",
      "Lucide React",
    ],
    links: [
      {
        name: "Production",
        url: "https://devnodesale.diamante.io/", // Add actual URL
      },
      {
        name: "Development",
        url: "https://devnodesale.diamante.io/", // Add actual URL
      },
    ],
    contributions: [
      "Developed responsive Web3 pre-booking platform with ConnectKit integration supporting MetaMask, WalletConnect, Coinbase Wallet, and 100+ other wallets",
      "Built advanced token swapping interface with smart routing, slippage tolerance settings, and real-time quote calculations using PancakeSwap API",
      "Implemented secure wallet authentication flow with email registration and blockchain-based identity verification",
      "Created countdown timer component with real-time updates leading to exclusive NFT launch event (October 2025)",
      "Developed Redux Toolkit state management architecture for wallet connections, swap transactions, and user registration flows",
      "Built responsive UI components using Tailwind CSS and Radix UI with mobile-first design approach and custom clip-path styling",
      "Integrated WebSocket for real-time slot availability updates and live transaction status tracking",
      "Implemented advanced swap features including token allowance checks, approval workflows, and multi-route optimization for best execution prices",
      "Designed post-purchase dashboard with transaction history, NFT status tracking, and distribution countdown for successful subscribers",
      "Optimized performance with code-splitting, lazy-loading, and efficient state management to handle high concurrent user traffic",
      "Created seamless user flow from wallet connection → email registration → token swap → NFT pre-booking confirmation",
    ],
  },
  {
    title: "Quantum Oracle Chronicles (QOC) - Web3 Puzzle Gaming Platform",
    duration: "2024 - Ongoing",
    role: "Frontend Developer",
    description:
      "A decentralized interactive puzzle gaming platform where players solve cryptographic challenges through an immersive narrative-driven experience. The platform features wallet-based authentication, real-time multiplayer teams, competitive leaderboards, NFT rewards, and location-based puzzle mechanics.",
    technologies: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Redux Persist",
      "Tailwind CSS",
      "Radix UI",
      "Vite",
      "Wagmi & Viem",
      "React Query",
      "Axios",
      "WebSocket",
      "React Router DOM v7",
      "D3.js",
      "TopoJSON",
      "React Joyride",
      "Swiper",
      "Lucide React",
      "Canvas Confetti",
    ],
    links: [
      {
        name: "Production",
        url: "https://devquestv2.diamante.io/",
      },
      {
        name: "Development",
        url: "https://devquest.diamante.io",
      },
    ],
    contributions: [
      "Developed Web3 wallet authentication system using Wagmi and Viem with support for multiple wallet providers including MetaMask, Coinbase Wallet, and WalletConnect",
      "Built real-time WebSocket integration for live leaderboard updates, point tracking, and team notifications with auto-reconnect and ping/pong heartbeat mechanisms",
      "Implemented dynamic puzzle grid system with progressive difficulty, hint system, and achievement tracking with blockchain verification",
      "Created comprehensive community features including team creation, joining, player invitations, and role-based team management with real-time collaboration",
      "Developed immersive onboarding experience with audio narration, slide-based storytelling, and interactive game tutorial using React Joyride",
      "Built world map visualization using D3.js and TopoJSON showing player locations, regional leaderboards, and geographical puzzle distribution",
      "Implemented NFT rewards gallery with rarity system (Common, Uncommon, Rare, Epic, Legendary) and blockchain metadata integration",
      "Created spin-to-win mechanics with reward calculation, daily spin limits, and bonus multiplier system for puzzle achievements",
      "Developed real-time chat system for team collaboration and global announcements with message history and typing indicators",
      "Built achievement system with social sharing integration, badge collection, and progressive unlock mechanics",
      "Implemented points history tracking with detailed transaction logs, categorized earnings, and timeline visualization",
      "Created responsive dashboard with tabbed navigation (Puzzles, Community, Timeline, Achievements, NFTs, Chat) using modular component architecture",
      "Developed secure session management with Redux Persist for state persistence across browser refreshes and automatic re-authentication",
      "Built referral system with unique referral codes, tracking, and reward distribution",
      "Implemented social platform integration (Discord, Twitter/X, Telegram) for user discovery and community engagement",
      "Created private route protection with wallet verification and automatic redirect logic for unauthenticated users",
      "Optimized performance with code splitting, lazy loading, React Query caching, and efficient WebSocket message handling",
    ],
  },
  {
    title: "CFL (Crypto Fantasy League)",
    duration: "April 2025 - Ongoing",
    role: "Frontend Developer",
    description:
      "A decentralized fantasy crypto gaming platform enabling users to create token-based teams and compete in real-time contests driven by live market data.",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Radix UI",
      "Vite",
      "Wagmi & Ethers.js",
      "React Query",
      "Axios",
      "WebSocket (real-time leaderboard)",
      "React Router v7",
      "Lottie (animations)",
      "Moment.js",
    ],
    links: [
      {
        name: "Link1",
        url: "https://cfldev.diamante.io/",
      },
      {
        name: "Link2",
        url: "https://cfl.diamante.io/",
      },
    ],
    contributions: [
      "Developed wallet-based authentication flow using WalletConnect with support for MetaMask and Trust Wallet.",
      "Implemented dynamic contest management with modules for Join, Create Team, Leaderboard, and Result Tracking.",
      "Built real-time scoring logic and leaderboard updates using WebSocket events and React Query.",
      "Created modular UI components using Tailwind CSS and Radix UI for team builder, wallet, and leaderboard.",
      "Integrated Redux Toolkit and Redux Persist for robust session and state management.",
      "Worked on bonus campaigns, referral system, and OTP-based 2FA for enhanced user engagement and security.",
      "Optimized performance using code-splitting, lazy-loading, and efficient component rendering patterns.",
    ],
  },
  {
    title: "DIAM Casino - Blockchain Gaming Platform",
    duration: "september 2024 - April 2025",
    role: "Frontend Developer",
    description:
      "Web3-powered casino gaming platform with multiple interactive games, wallet integration, and real-money transactions using blockchain technology",
    technologies: [
      "React.js",
      "Three.js",
      "JavaScript",
      "SCSS/CSS3",
      "Bootstrap",
      "Web3 Integration",
      "Blockchain SDKs",
      "Redux",
      "Styled Components",
      "Canvas APIs",
      "Real-time Animations",
    ],
    links: [
      { name: "link1", url: "https://games.diamante.io" },
      { name: "link2", url: "https://dcgwebsecurity.diamante.io" },
    ],
    contributions: [
      "Developed interactive casino games including DIAM Sweeper, Bouncy Blast, All or Nothing, Tap Game, Rocket Blaster, and Gesture Showdown using React.js and Three.js",
      "Implemented secure wallet integration with Diamante SDK for seamless cryptocurrency transactions and user authentication",
      "Built responsive game interfaces with smooth animations using Lottie animations, Canvas Confetti effects, and custom SCSS styling",
      "Created real-time game state management using Redux and Recoil for handling betting logic, win/loss calculations, and user balances",
      "Integrated 3D graphics and physics simulations using React Three Fiber and Cannon.js for immersive gaming experiences",
      "Developed secure payment processing system with transaction validation and real-time balance updates",
      "Implemented user session management with idle detection and automatic logout for enhanced security",
      "Built QR code integration for easy wallet connectivity and transaction verification",
      "Optimized performance for smooth gameplay with lazy loading and efficient state management across multiple concurrent games",
    ],
  },
  {
    title: "Internal CRM Software",
    duration: "April 2024 - September 2024",
    role: "Frontend Developer",
    description:
      "A comprehensive CRM platform for managing leads, contacts, sales pipelines, and partner onboarding with analytics and reporting modules.",
    technologies: [
      "React.js",
      "Bootstrap",
      "CSS3",
      "HTML5",
      "JavaScript",
      "REST API integration",
    ],
    links: [
      {
        name: "Live Demo",
        url: "https://backoffice.chaincrm.io", // Replace with actual URL or omit if internal
      },
    ],
    contributions: [
      "Developed responsive UI modules for leads, contacts, and deal management using React.js and Bootstrap.",
      "Implemented dynamic dashboards with charts for sales analytics and performance tracking.",
      "Integrated authentication (Block Stack) and role-based access control for secure user management.",
      "Optimized frontend performance by reducing bundle size and lazy-loading components.",
      "Collaborated with backend teams to design and consume RESTful APIs for data operations.",
    ],
  },
  {
    title: "AskLuma - Gamified AI Event Platform",
    duration: "Feb 2025 - Jun 2025",
    role: "Frontend Developer",
    description:
      "AI-powered gamified platform for event discovery and networking with integrated chat agent, social features, and multi-platform support",
    technologies: [
      "React",
      "Redux Toolkit",
      "Web3",
      "Framer Motion",
      "TypeScript",
      "Tailwind CSS",
      "Wagmi",
      "Viem",
    ],
    links: [
      { name: "landing page", url: "https://askluma.ai" },
      { name: "web app", url: "https://ai.askluma.ai" },
    ],
    contributions: [
      "Developed responsive event discovery interface with real-time filtering and aggregation from multiple sources (Luma, Eventbrite)",
      "Built interactive chat module enabling users to communicate with AI agent for event queries, logistics, and networking assistance",
      "Implemented gamification system with real-time leaderboard, point tracking, and level progression using React state management",
      "Created user profile management system with social media integration (Twitter/X, LinkedIn) and wallet connectivity via Reown",
      "Designed multi-platform compatible interface supporting web app, with plans for Telegram and X integration",
      "Integrated social media APIs for profile scraping and virality point tracking to enhance user engagement",
      "Built real-time X feed display showing platform mentions and social media interactions",
      "Optimized user experience with responsive design and seamless navigation across event discovery, chat, and profile modules",
    ],
  },
  {
    title: "Visitor Management System (VMS)",
    duration: "June 2024 - December 2024", // Adjust dates as needed
    role: "Frontend Developer",
    description:
      "A comprehensive touchless visitor management platform featuring QR-based check-in/out, real-time notifications, badge printing, and analytics dashboard with multi-platform support for web and mobile interfaces.",
    technologies: [
      "React.js",
      "TypeScript",
      "React Router DOM",
      "Axios",
      "QR Code Integration",
      "React Webcam",
      "Recharts",
      "Moment.js",
      "React Hot Toast",
      "CSS3",
      "HTML5",
      "REST API integration",
    ],
    links: [
      {
        name: "link1",
        url: "https://vms.blockstack.tech",
      },
      {
        name: "link2",
        url: "https://vmsdev.blockstack.tech",
      },
    ],
    contributions: [
      "Developed touchless visitor check-in/out system with QR code scanning and real-time verification using React.js and TypeScript.",
      "Built comprehensive admin dashboard with analytics, charts, and visitor management modules using Recharts for data visualization.",
      "Implemented multi-flow visitor registration system supporting pre-registered, existing, and walk-in visitors with form validation.",
      "Created responsive tablet interface for self-service kiosks with camera integration for selfie capture and ID document scanning.",
      "Integrated real-time notifications system with toast notifications and WebSocket communication for instant updates.",
      "Developed role-based access control system with separate interfaces for staff, admin, and visitor management.",
      "Built visitor badge generation system with customizable templates and print functionality integration.",
      "Implemented advanced search, filtering, and export features for visitor reports and analytics with CSV/PDF export capabilities.",
    ],
  },
  {
    title: "Web3 AI Agent Marketplace",
    duration: "April 2025 - May 2025",
    role: "Frontend Developer",
    description:
      "Decentralized platform for creating, tokenizing, and trading AI agents on blockchain with integrated DEX functionality",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind css",
      "readct redux",
      "framer motion",
      "react-toastify",
      "lucide icons",
      "react-chartjs",
      "Web3 Integration",
      "Blockchain APIs",
    ],
    links: [
      {
        name: "marketplace.diamante.io",
        url: "https://agmdev.diamante.io/",
      },
    ],
    contributions: [
      "Built responsive 3-step AI agent creation wizard with zero-code interface using React.js and Bootstrap",
      "Developed decentralized exchange (DEX) trading interface for token swapping with real-time slippage calculation",
      "Implemented Web3 wallet integration (DIAM Wallet) for seamless blockchain transactions and authentication",
      "Created dynamic marketplace dashboard with filtering, search, and live agent rankings functionality",
      "Designed liquidity pool management interface enabling users to add/remove liquidity and track earnings",
      "Integrated blockchain bridging module for cross-network token transfers between BEP-20 and native chains",
      "Optimized user experience with real-time data updates and responsive design across all device types",
    ],
  },
  {
    title: "HealthCare Web Application",
    duration: "",
    role: "",
    description:
      "A comprehensive hospital management system featuring robust patient data handling, doctor profiles, and an intuitive appointment booking system. Built with security and efficiency in mind.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    links: [],
    contributions: [],
  },
  {
    title: "HRMS Dashboard - Human Resource Management System",
    duration: "Feb 2024 - Nob 2024",
    role: "Frontend Developer",
    description:
      "Comprehensive HR management platform with employee tracking, analytics dashboard, organizational hierarchy, and document management capabilities",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "JavaScript",
      "Bootstrap",
      "Chart.js",
      "ApexCharts",
      "CSS3",
      "REST APIs",
      "Styled Components",
      "Date Management",
    ],
    links: [
      { name: "hrms-dashboard.com", url: "" },
      { name: "github.com/yourname/hrms-dashboard", url: "" },
    ],
    contributions: [
      "Developed comprehensive HR dashboard with interactive data visualizations using Chart.js and ApexCharts for employee analytics and performance metrics",
      "Built employee management system with profile creation, document upload, and organizational hierarchy visualization using react-organizational-chart",
      "Implemented advanced form handling with React Quill rich text editor for job postings, employee evaluations, and policy documentation",
      "Created responsive attendance tracking system with date pickers, progress bars, and real-time status updates using Moment.js for date management",
      "Designed interactive communication features including emoji picker integration and notification system with React Toastify",
      "Built scalable state management architecture using Redux Toolkit for handling complex HR data flows and user permissions",
      "Developed mobile-responsive interface using Bootstrap and React Bootstrap components ensuring accessibility across all devices",
      "Integrated REST API endpoints for employee data, attendance records, payroll information, and document management with Axios",
      "Implemented role-based access control and user authentication with secure routing using React Router DOM",
    ],
  },
  {
    title: "Group Traveling Web Application",
    duration: "",
    role: "",
    description:
      "A collaborative travel planning platform enabling tourists to connect and plan their adventures together. Features include shared itineraries, group messaging, and real-time updates.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    links: [],
    contributions: [],
  },
];
