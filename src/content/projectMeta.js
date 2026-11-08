// Facts only: links, images, stack and feature inventory carried over from the original data.
// Narrative text (EN/AR) lives in projectText.js.
export const projectMeta = [
  {
    "id": "musafer",
    "order": 1,
    "kind": "apps",
    "start": "",
    "end": "2026-06",
    "team": 2,
    "stack": [
      "Flutter",
      "Clean Architecture",
      "BLoC",
      "Dio",
      "GoRouter",
      "Firebase FCM",
      "Secure Storage",
      "Equatable",
      "Connectivity Plus",
      "Localization (l10n)",
      "GitHub Actions"
    ],
    "features": [
      "Real-time intercity trip search with advanced filters",
      "Interactive seat map for selecting preferred placement",
      "Digital QR boarding pass with instant issuance",
      "OTP-based secure authentication",
      "Complete trip history archiving (past and upcoming)",
      "Push notifications for trip status and booking confirmations",
      "Bilingual support (Arabic / English) with full RTL",
      "Responsive layouts across iOS, Android, and Web",
      "Automated CI/CD validation on code commits (Static Analysis & Linting)",
      "Keystore-signed APK/AAB release build automation",
      "Automated web build and deployment to Linux VPS via SSH & rsync"
    ],
    "cover": "https://res.cloudinary.com/debuadvrz/image/upload/v1780823638/dsadadsada_iebspe.jpg",
    "gallery": [
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780823638/dsadadsada_iebspe.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780823632/login_hna4be.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780823837/search-no_cjotqd.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780823833/search-result_t6tjk5.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780823835/history_y5yvhw.jpg"
    ],
    "links": {
      "live": "https://www.musafer.app/"
    }
  },
  {
    "id": "masar",
    "order": 2,
    "kind": "systems",
    "start": "",
    "end": "2026-06",
    "team": 2,
    "stack": [
      "Flutter",
      "Clean Architecture",
      "BLoC",
      "Dio",
      "GoRouter",
      "Firebase FCM",
      "QR Code Scanner",
      "Bluetooth Thermal Printer",
      "PDF Generation",
      "Image Picker",
      "Localization (l10n)",
      "GitHub Actions"
    ],
    "features": [
      "23+ feature modules covering full transport operations",
      "Centralized admin dashboard for trip scheduling and pricing",
      "Multi-role access control (Super Admin, Supervisor, Agent, Driver, Inspector)",
      "QR ticket scanning and instant validity verification",
      "Bluetooth thermal receipt printing integration",
      "WhatsApp integration for field communication",
      "Financial and operational reporting dashboards",
      "Expense management and tracking",
      "Station and route management",
      "Bus fleet monitoring and trip status tracking",
      "Bilingual support (Arabic / English) with full RTL",
      "Automated CI/CD pipelines via GitHub Actions for validation and release packaging",
      "Auto-deployment of administrative web portal to Linux VPS via secure SSH/rsync"
    ],
    "cover": "https://res.cloudinary.com/debuadvrz/image/upload/v1780821483/logo_cjpaw3.png",
    "gallery": [
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780821483/logo_cjpaw3.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780821674/splash_d4z1m1.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780821523/WhatsApp_Image_2026-06-07_at_11.33.12_AM52414_oev8pf.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780821622/dash1_qm42yt.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780821647/dash2_c10ggn.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780821768/search-trip_q9uy4f.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780823880/bus-layout_jq1fbi.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780823413/info-ticket1_vut75c.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780823423/info-ticket2_bot5nh.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780823443/create_bus_goaxqq.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780823456/create-trip_p9mf8a.jpg"
    ],
    "links": {
      "live": "https://atmta.sy/products/masar"
    }
  },
  {
    "id": "neighborhood-guide",
    "order": 3,
    "kind": "apps",
    "start": "2026-04",
    "end": "Present",
    "team": 1,
    "stack": [
      "Flutter",
      "Clean Architecture",
      "BLoC / Cubit",
      "Hive (NoSQL)",
      "Supabase",
      "PostgreSQL (RLS)",
      "Firebase FCM",
      "OpenStreetMap",
      "flutter_map",
      "Edge Functions"
    ],
    "features": [
      "Offline-first architecture with zero-latency UI (Hive local caching)",
      "Smart Delta-Sync — fetches only modified records to save data/battery",
      "Interactive map explorer with marker clustering (OpenStreetMap)",
      "Real-time open/closed status based on Syria timezone (UTC+3)",
      "Duty pharmacy scheduling with automated daily transitions",
      "Community submissions with admin moderation queue",
      "FCM push notifications for local announcements and alerts",
      "Local analytics tracking (views, calls, searches)",
      "Comprehensive admin dashboard for content management",
      "Full Arabic RTL support with Cairo font",
      "Row Level Security (RLS) policies for data protection"
    ],
    "cover": "https://res.cloudinary.com/debuadvrz/image/upload/v1780818463/background_agxoph.jpg",
    "gallery": [
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780818463/background_agxoph.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780819434/home1_prrnfv.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780819444/home_2_glf9ie.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780819508/categories_drtuxb.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780819602/places-categories_yozzga.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780819633/place-det-1_nsaf21.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780819654/place-det-2_uvm85k.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780819678/place-det-3_mcgpmx.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780819703/services_iwd2gz.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780819730/search1_ciub8b.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780819749/search_2_lu3djq.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780819778/admin_urpflw.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780819794/setting1_jdi1tt.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780819810/setting2_y4m0cu.jpg"
    ],
    "links": {
      "live": "https://aldahiya.vercel.app/"
    }
  },
  {
    "id": "reviewiq",
    "order": 4,
    "kind": "ai",
    "start": "2025-6",
    "end": "2025-8",
    "team": 1,
    "stack": [
      "Python",
      "Flask",
      "MongoDB",
      "Hugging Face",
      "DeepSeek LLM",
      "Flutter",
      "Dart",
      "BLoC Pattern",
      "Clean Architecture",
      "JavaScript (ES6+)",
      "HTML5/CSS3",
      "Chart.js",
      "Dio",
      "JWT",
      "Telegram Bot API",
      "Firebase"
    ],
    "features": [
      "AI-powered sentiment analysis (Positive / Neutral / Negative)",
      "Automated review quality scoring engine (0–100%)",
      "Profanity and toxicity detection pipeline",
      "Context relevance validation for mismatched or spam reviews",
      "AI-generated summaries and actionable business insights",
      "Smart suggested replies generation for customer engagement",
      "Real-time Telegram notifications with rich formatting",
      "Secure webhook integration with Tally Forms",
      "Multi-language support (Arabic / English) with full RTL",
      "Cross-platform dashboards (Web & Flutter Mobile)",
      "Interactive charts and analytics visualization",
      "Advanced filtering by sentiment, rating, date, and quality score",
      "QR code generation for review collection",
      "Data export to CSV and JSON formats",
      "JWT-based authentication and role security",
      "Mobile-first, fully responsive web interface"
    ],
    "cover": "https://res.cloudinary.com/debuadvrz/image/upload/v1767707338/2_kqn7nk.png",
    "gallery": [
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767707338/2_kqn7nk.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767710146/9_iflsgx.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767707339/3_japtf1.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767710147/12_r6h2c8.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767707336/4_fcmdht.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767707338/5_wz3vt5.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767710146/10_rqt5cl.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767707336/6_ajmzpv.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767707337/1_ptg2ds.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767710146/11_joyrdp.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767707338/7_wlweqa.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767710147/14_zl43pu.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767707336/8_dpkqze.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767710147/13_ogwgbe.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767710148/16_egeiay.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1767710147/15_ztupce.jpg"
    ],
    "links": {
      "live": "https://reputation-guardianapp.vercel.app/index.html",
      "github": "https://github.com/laith-alskaf/reputation-guardian"
    }
  },
  {
    "id": "radar-almasrouf",
    "order": 5,
    "kind": "apps",
    "start": "2025-03",
    "end": "2025-04",
    "team": 1,
    "stack": [
      "Flutter",
      "Clean Architecture",
      "SharedPreferences",
      "Hive",
      "fl_chart",
      "Firebase Remote Config",
      "Local Notifications",
      "Material Design 3",
      "Google Fonts",
      "Intl & Localization"
    ],
    "features": [
      "Multi-currency wallet management (SYP, USD, EUR, SAR, AED) with instant currency exchange",
      "Smart shopping radar with 12+ built-in categories and price history tracking",
      "Monthly budgets with category-level spending alerts and rollover calculation",
      "Bills Manager for recurring obligations (daily, weekly, monthly) with wallet auto-deduction",
      "Side Balance system for separated funds with multi-currency support",
      "Savings Goals with visual progress tracking and deposit history",
      "Smart Debt management with full wallet synchronization",
      "Smart Vault for automatic and manual savings with multi-currency support",
      "Advanced financial analytics with interactive fl_chart visualizations",
      "Month-over-month spending comparison reports",
      "Professional backup system (manual JSON export, automated periodic backup, one-tap restore)",
      "100% offline-first architecture — zero cloud dependencies",
      "Privacy-first design — all data stored locally with encryption",
      "Arabic-first UI with Google Fonts (Outfit, Tajawal)"
    ],
    "cover": "https://res.cloudinary.com/debuadvrz/image/upload/v1784316612/icon-splash_bgevpn.jpg",
    "gallery": [
      "https://res.cloudinary.com/debuadvrz/image/upload/v1784316413/photo_2026-07-17_22-25-49_qq5zgz.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1784316413/photo_2026-07-17_22-25-44_v7vnls.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1784316414/photo_2026-07-17_22-25-40_nercmz.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1784316417/photo_2026-07-17_22-25-51_biosvw.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1784316414/photo_2026-07-17_22-25-42_vyr72k.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1784316415/photo_2026-07-17_22-25-38_osqgag.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1784316419/photo_2026-07-17_22-25-35_wyyult.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1784316416/photo_2026-07-17_22-25-46_exfdd2.jpg"
    ],
    "links": {
      "github": "https://github.com/laith-alskaf/HomeBuy_Manager"
    }
  },
  {
    "id": "atmta-website",
    "order": 6,
    "kind": "web",
    "start": "2025-11",
    "end": "2026-06",
    "team": 1,
    "stack": [
      "Next.js (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion v12",
      "AI-Driven Development",
      "GitHub Actions",
      "PM2"
    ],
    "features": [
      "Bilingual (Arabic / English) with seamless RTL/LTR transitions",
      "Dedicated product landing pages for Musafer and Masar",
      "Scroll-animated sections with Framer Motion micro-interactions",
      "Fully responsive design across all device types",
      "SEO-optimized with meta tags and structured content",
      "Contact form with email integration",
      "WhatsApp floating button for instant support",
      "CI/CD pipeline with GitHub Actions for linting, build verification, and deployment",
      "Next.js standalone build configuration with automated asset copy tasks",
      "Automated remote deployment and graceful server restart via PM2 on VPS"
    ],
    "cover": "https://res.cloudinary.com/debuadvrz/image/upload/v1780823563/WhatsApp_Image_2026-05-17_at_10.25.26_PM_w4yawr.jpg",
    "gallery": [
      "https://res.cloudinary.com/debuadvrz/image/upload/v1780823563/WhatsApp_Image_2026-05-17_at_10.25.26_PM_w4yawr.jpg"
    ],
    "links": {
      "live": "https://atmta.sy/"
    }
  },
  {
    "id": "training-center-bot",
    "order": 7,
    "kind": "backend",
    "start": "2024-10",
    "end": "2024-12",
    "team": 1,
    "stack": [
      "Python",
      "Clean Architecture",
      "Telegram Bot API",
      "MongoDB",
      "Motor (Async)",
      "Google APIs",
      "Meta Graph API",
      "APScheduler",
      "Pydantic"
    ],
    "features": [
      "Telegram Bot-based management interface with intuitive button navigation",
      "Multi-language support (Arabic / English) with full RTL/LTR handling",
      "Course creation and lifecycle management",
      "Student registration workflow with admin approval",
      "Payment tracking system (Unpaid / Partial / Paid)",
      "Support for multiple payment methods",
      "Syrian phone number validation system",
      "Automated notifications and 24-hour reminders",
      "Broadcast messaging system for announcements",
      "Google Drive integration for course materials storage",
      "Social media automation (Facebook & Instagram)",
      "Scheduled posts from Google Sheets",
      "Real-time statistics and operational analytics",
      "Role-based admin controls"
    ],
    "cover": null,
    "gallery": [],
    "links": {}
  },
  {
    "id": "purchase-management",
    "order": 8,
    "kind": "systems",
    "start": "2025-04",
    "end": "2025-06",
    "team": 1,
    "stack": [
      "Flutter",
      "Clean Architecture",
      "GetX",
      "Dio",
      "Node.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Firebase"
    ],
    "features": [
      "Role-based access control (General Manager, Finance, Procurement, Assistant, Auditor)",
      "Multi-stage purchase request approval workflow",
      "Vendor management with detailed profiles",
      "Item and inventory management",
      "Real-time purchase request tracking",
      "Department-level reporting and analytics",
      "Audit logs for traceability and compliance",
      "Notification system for approval actions",
      "Bilingual interface (Arabic / English) with RTL support",
      "Cross-platform support (Windows & Android)",
      "Secure authentication and authorization"
    ],
    "cover": "https://res.cloudinary.com/debuadvrz/image/upload/v1761851996/Dashboard_cobttp.png",
    "gallery": [
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761851995/login_ckwrvy.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761852371/Mobile-_Dashboard_ra9oex.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761851996/Dashboard_cobttp.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761851996/drawer_uj7ig5.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761851997/Purchase_Orders_l1r3k7.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761851992/Purchase_Order_Details_dzcqh4.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761852372/Mobile-_Purchase_Order_Details_x5agc3.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761851993/Create_User_oiljou.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761851997/Users_d7k606.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761851996/Vendors_awhjpm.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761852372/Mobile-_Create_Vendor_v8qlnb.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761851996/Notifications_qts7k3.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761851993/Items_zslgcn.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761851997/Audit_Logs_tuqsna.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761851992/Reports1_imkuij.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761851993/Reports2_wspata.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761851994/About_Developer_bgfphf.png"
    ],
    "links": {}
  },
  {
    "id": "team-management",
    "order": 9,
    "kind": "systems",
    "start": "2023-11",
    "end": "2024-3",
    "team": 2,
    "stack": [
      "Flutter",
      "Clean Architecture",
      "GetX",
      "Dio",
      "Hive",
      "Socket.IO",
      "Firebase",
      "Node.js"
    ],
    "features": [
      "Task creation, assignment, and tracking system",
      "Project and team management modules",
      "Admin dashboard for performance monitoring",
      "Real-time chat system using Socket.IO",
      "Real-time progress and status updates",
      "Email and push notification system",
      "Role-based permissions and access control",
      "Cross-platform deployment (Windows & Android)",
      "Team collaboration and productivity tools"
    ],
    "cover": "https://res.cloudinary.com/debuadvrz/image/upload/v1761905378/login_yhmfml.png",
    "gallery": [
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761905378/login_yhmfml.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761905095/photo_1_2025-10-31_13-01-34_s3kpyw.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761905095/photo_2_2025-10-31_13-01-34_g7fvg3.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761905096/photo_4_2025-10-31_13-01-34_rtxhow.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761905095/photo_5_2025-10-31_13-01-34_mpkgsi.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761905095/photo_7_2025-10-31_13-01-34_fjr6mj.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761905095/photo_6_2025-10-31_13-01-34_osi64g.jpg",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761905096/photo_3_2025-10-31_13-01-34_hlgyv8.jpg"
    ],
    "links": {}
  },
  {
    "id": "idbook",
    "order": 10,
    "kind": "apps",
    "start": "2023-11",
    "end": "2024-10",
    "team": 3,
    "stack": [
      "Flutter",
      "Clean Architecture",
      "GetX",
      "Provider",
      "HTTP",
      "SharedPreferences",
      "QR Code",
      "SQLite",
      "Socket.IO",
      "Google Maps",
      "Localization",
      "Firebase",
      "Node.js"
    ],
    "features": [
      "Dynamic ad/poll/post display system",
      "Weighted priority algorithm",
      "Real-time reactions and views",
      "QR code scanning",
      "Google Maps integration",
      "Multi-language support",
      "User authentication",
      "Real-time notifications",
      "Offline support"
    ],
    "cover": null,
    "gallery": [],
    "links": {
      "store": "https://play.google.com/store/apps/details?id=com.yesforonlineservices.idbook"
    }
  },
  {
    "id": "idbook-agent",
    "order": 11,
    "kind": "apps",
    "start": "2023-11",
    "end": "2024-10",
    "team": 1,
    "stack": [
      "Flutter",
      "Clean Architecture",
      "GetX",
      "HTTP",
      "SharedPreferences",
      "QR Code",
      "Socket.IO",
      "Localization"
    ],
    "features": [
      "QR code scanning for plan activation",
      "Plan history tracking",
      "Location activation",
      "Balance verification",
      "User authentication",
      "SMS notifications",
      "Multi-language support",
      "Real-time plan status"
    ],
    "cover": null,
    "gallery": [],
    "links": {}
  },
  {
    "id": "car-service",
    "order": 12,
    "kind": "apps",
    "start": "2023-09",
    "end": "2024-01",
    "team": 2,
    "stack": [
      "Flutter",
      "Firebase",
      "GetX",
      "Google Maps",
      "Localization",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io"
    ],
    "features": [
      "Parking spot booking",
      "Service center location finder",
      "User rating and reviews",
      "Admin statistics dashboard",
      "Real-time booking updates",
      "Google Maps integration",
      "Service history",
      "Multi-language support"
    ],
    "cover": "https://res.cloudinary.com/debuadvrz/image/upload/v1761855489/Login_wgw1cg.png",
    "gallery": [
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855485/Landing_View_sfituk.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855489/Login_wgw1cg.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855479/Create1_ltxjts.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855147/Create2_jolcvl.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855467/Create3_wlfuc6.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855488/Home_bkckai.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855066/Parking1_qvol4l.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855100/Parking2_gjmf8b.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855458/Parking3_ytmlxi.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855461/Parking4_kaqbsd.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855462/Parking5_nhfyqp.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855475/History_xdfvqg.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855114/Repair1_vczxpq.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855481/Repair2_h4epq0.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855152/Repair3_w7ymoi.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855488/Repair4_mbfi8x.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855077/Profile_w473wx.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855475/Dashboard_ahqlu4.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855133/Admin_Profile_ohre62.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855464/All_Orders_eduz4g.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761855021/Parking_Order_Description_ke1sau.png"
    ],
    "links": {
      "github": "https://github.com/laith-alskaf/car_service",
      "demo": "https://drive.google.com/file/d/1Rjn1LTpQdQ8RsdIz5QHHQBmoz75SWSUs/view?usp=drive_link"
    }
  },
  {
    "id": "food-ordering",
    "order": 13,
    "kind": "apps",
    "start": "2023-09",
    "end": "2024-1",
    "team": 2,
    "stack": [
      "Flutter",
      "Clean Architecture",
      "BLoC",
      "Firebase",
      "Google Maps",
      "Stripe",
      "Hive",
      "Push Notifications"
    ],
    "features": [
      "Restaurant discovery with maps",
      "Real-time order tracking",
      "Secure payment integration (Stripe)",
      "User authentication",
      "Cart management",
      "Order history",
      "Push notifications",
      "Offline caching",
      "User ratings and reviews"
    ],
    "cover": null,
    "gallery": [],
    "links": {}
  },
  {
    "id": "darrebni-national",
    "order": 14,
    "kind": "apps",
    "start": "2023-09",
    "end": "2023-10",
    "team": 2,
    "stack": [
      "Flutter",
      "Clean Architecture",
      "GetX",
      "Hive",
      "PDF",
      "Localization",
      "Firebase"
    ],
    "features": [
      "Organized educational resources",
      "Structured exam preparation content",
      "PDF viewing and management",
      "Progress tracking",
      "Multi-language support",
      "Offline access",
      "Search functionality",
      "Bookmarking system"
    ],
    "cover": "https://res.cloudinary.com/debuadvrz/image/upload/v1761908290/splash_screen_tfldwb.png",
    "gallery": [
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761908290/splash_screen_tfldwb.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761908286/login_tgymt4.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761908289/signup_q8w7y8.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761908291/all-home_hzsysf.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761908292/IT_je4sjg.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761908287/notification_w2k3zr.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761908285/ITQ_Defult_wkd4bw.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761908286/ITQ_true_ch4rkp.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761908286/ITQ_error_x7nfas.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761908287/result_1_kd5u4g.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761908288/result_q1yxuc.png",
      "https://res.cloudinary.com/debuadvrz/image/upload/v1761908290/years_fbefae.png"
    ],
    "links": {
      "github": "https://github.com/laith-alskaf/darrebni_national-Project"
    }
  },
  {
    "id": "betterme",
    "order": 15,
    "kind": "ai",
    "start": "2023-12",
    "end": "2024-03",
    "team": 2,
    "stack": [
      "Flutter",
      "SharedPreferences",
      "GetX",
      "ChatGPT 3.5 API",
      "Health Metrics"
    ],
    "features": [
      "BMI calculation and tracking",
      "AI health tips and guidance",
      "ChatGPT 3.5 integration",
      "Smart reminders",
      "Wellness insights",
      "Health FAQ system",
      "Progress tracking",
      "Personalized recommendations"
    ],
    "cover": null,
    "gallery": [],
    "links": {
      "github": "https://github.com/laith-alskaf/better-me",
      "demo": "https://drive.google.com/file/d/1SI0YkpNqgf8mo8CEUTTJnMwzn7BshkD2/view?usp=drive_link"
    }
  },
  {
    "id": "ecommerce-api",
    "order": 16,
    "kind": "backend",
    "start": "2024",
    "end": "2024",
    "team": 1,
    "stack": [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "JWT",
      "Swagger"
    ],
    "features": [
      "User authentication with JWT",
      "Product management",
      "Order management",
      "Wishlist functionality",
      "Role-based access control",
      "Payment integration",
      "Comprehensive API documentation",
      "Admin dashboard endpoints"
    ],
    "cover": null,
    "gallery": [],
    "links": {
      "live": "https://ecommerce-backend-clean-architecture.vercel.app/api-docs/",
      "github": "https://github.com/laith-alskaf/ecommerce-backend-clean-architecture"
    }
  }
];
