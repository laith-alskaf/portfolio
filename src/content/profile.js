// Everything about the person: contact, offers, process, journey, education, contact intents.
// Bilingual objects use { en, ar }. Facts come from the original portfolio data.

export const person = {
  name: "Laith Alskaf",
  email: "laithalskaf@gmail.com",
  whatsappNumber: "963982055788",
  telegram: "https://t.me/963982055788",
  github: "https://github.com/laith-alskaf",
  linkedin: "https://www.linkedin.com/in/laith-alskaf-10a4b4339",
  cv: {
    url: "https://drive.usercontent.google.com/u/0/uc?id=1UHE4aLsXf9ZbTBIIfiFenHWlO7ojX0Uy&export=download",
  },
  // Face-cropped square from the existing Cloudinary image.
  photo:
    "https://res.cloudinary.com/debuadvrz/image/upload/w_560,h_560,c_fill,g_face,q_auto,f_auto/v1784315576/mine_mmpjb4.jpg",
  startYear: 2022,
};

// "What I can build for you" — each item: plain explanation, technical explanation, and proof projects.
export const offers = [
  {
    id: "apps",
    title: { en: "Mobile apps that feel native", ar: "تطبيقات جوال بإحساس أصلي" },
    plain: {
      en: "One app that runs on Android, iPhone, Windows and the web — so you build once instead of four times.",
      ar: "تطبيق واحد يعمل على أندرويد وآيفون وويندوز والويب، فتبنيه مرة واحدة بدل أربع.",
    },
    tech: {
      en: "Flutter (Dart) with Clean Architecture and BLoC/GetX. Android, iOS, Windows and Web from one codebase; full RTL and l10n.",
      ar: "Flutter (Dart) مع Clean Architecture وBLoC/GetX. أندرويد وiOS وويندوز وويب من قاعدة كود واحدة، مع RTL وl10n كاملين.",
    },
    proof: ["musafer", "idbook", "food-ordering"],
  },
  {
    id: "systems",
    title: { en: "Systems that run a business", ar: "أنظمة تُدير عملاً" },
    plain: {
      en: "Dashboards where each person sees only what their job needs: bookings, approvals, staff, reports.",
      ar: "لوحات يرى فيها كل شخص ما تحتاجه وظيفته فقط: حجوزات وموافقات وموظفون وتقارير.",
    },
    tech: {
      en: "Role-based access control, multi-stage approval workflows, audit logs and reporting; Flutter clients over Node/TypeScript or Python backends.",
      ar: "صلاحيات حسب الدور، وسير موافقات متعدد المراحل، وسجلات تدقيق وتقارير؛ عملاء Flutter فوق خوادم Node/TypeScript أو Python.",
    },
    proof: ["masar", "purchase-management", "team-management"],
  },
  {
    id: "offline",
    title: { en: "Apps that work without internet", ar: "تطبيقات تعمل دون إنترنت" },
    plain: {
      en: "Useful when the connection is weak or drops: the app keeps working and catches up later.",
      ar: "تنفع حين يضعف الاتصال أو ينقطع: يستمر التطبيق في العمل ثم يلحق بالتحديثات لاحقاً.",
    },
    tech: {
      en: "Offline-first with Hive/SQLite caches and delta sync (timestamp comparison) against Supabase; local backup and restore.",
      ar: "العمل دون إنترنت أولاً: ذاكرة Hive/SQLite ومزامنة تفاضلية (مقارنة الطوابع الزمنية) مع Supabase، ونسخ احتياطي واستعادة محليان.",
    },
    proof: ["neighborhood-guide", "radar-almasrouf"],
  },
  {
    id: "backend",
    title: { en: "The engine behind the app", ar: "المحرّك خلف التطبيق" },
    plain: {
      en: "The part you never see: accounts, data, payments and live updates — kept secure and documented.",
      ar: "الجزء الذي لا تراه: الحسابات والبيانات والدفع والتحديثات الحيّة، آمنةً وموثّقة.",
    },
    tech: {
      en: "Node.js/TypeScript, Python/Flask, MongoDB, PostgreSQL, Supabase (RLS, Edge Functions), Firebase, Socket.IO, JWT, Swagger/OpenAPI.",
      ar: "Node.js/TypeScript وPython/Flask وMongoDB وPostgreSQL وSupabase (RLS وEdge Functions) وFirebase وSocket.IO وJWT وSwagger/OpenAPI.",
    },
    proof: ["ecommerce-api", "reviewiq", "training-center-bot"],
  },
  {
    id: "ai",
    title: { en: "AI that does real work", ar: "ذكاء اصطناعي يؤدي عملاً حقيقياً" },
    plain: {
      en: "Tools that read, summarise and answer — for example, turning piles of customer reviews into a short, useful report.",
      ar: "أدوات تقرأ وتلخّص وتجيب، مثل تحويل أكوام مراجعات الزبائن إلى تقرير قصير مفيد.",
    },
    tech: {
      en: "Hugging Face NLP (sentiment, toxicity), LLM summaries and replies (DeepSeek), ChatGPT integration, webhook-driven pipelines.",
      ar: "NLP من Hugging Face (المشاعر والإساءة)، وملخصات وردود بـ LLM (DeepSeek)، وتكامل ChatGPT، وخطوط معالجة تعتمد على webhooks.",
    },
    proof: ["reviewiq", "betterme", "atmta-website"],
  },
  {
    id: "delivery",
    title: { en: "Shipping it, and keeping it shipping", ar: "الإطلاق، واستمرار الإطلاق" },
    plain: {
      en: "Automatic checks and releases, so updates reach users safely without long waits.",
      ar: "فحوص وإصدارات تلقائية، فتصل التحديثات إلى المستخدمين بأمان ودون انتظار طويل.",
    },
    tech: {
      en: "GitHub Actions: lint and static analysis, signed APK/AAB builds, SSH/rsync deploys to Linux VPS, PM2 process management.",
      ar: "GitHub Actions: lint وتحليل ساكن، وبناء APK/AAB موقّع، ونشر عبر SSH/rsync إلى VPS لينكس، وإدارة العمليات بـ PM2.",
    },
    proof: ["musafer", "masar", "atmta-website"],
  },
];

export const process = [
  {
    id: "listen",
    title: { en: "Understand", ar: "الفهم" },
    plain: {
      en: "We talk until the real problem is clear: who will use it and what success looks like.",
      ar: "نتحدث حتى تتضح المشكلة الحقيقية: من سيستخدمه وما معنى النجاح.",
    },
    tech: {
      en: "Requirements, roles and constraints written down before any code.",
      ar: "متطلبات وأدوار وقيود مكتوبة قبل أي سطر كود.",
    },
  },
  {
    id: "shape",
    title: { en: "Shape", ar: "التصوّر" },
    plain: {
      en: "I sketch the flow and the screens, and we agree before building.",
      ar: "أرسم التدفّق والشاشات، ونتفق قبل البناء.",
    },
    tech: {
      en: "Architecture and data model: layers, boundaries, sync strategy.",
      ar: "المعمارية ونموذج البيانات: الطبقات والحدود واستراتيجية المزامنة.",
    },
  },
  {
    id: "build",
    title: { en: "Build", ar: "البناء" },
    plain: {
      en: "I build in small pieces you can see and react to along the way.",
      ar: "أبني على قطع صغيرة تراها وتعلّق عليها أثناء العمل.",
    },
    tech: {
      en: "Clean Architecture, explicit state management, lint and checks in CI.",
      ar: "Clean Architecture وإدارة حالة صريحة، وlint وفحوص في CI.",
    },
  },
  {
    id: "ship",
    title: { en: "Ship", ar: "الإطلاق" },
    plain: {
      en: "Launch, then adjust to what real use teaches.",
      ar: "نُطلق، ثم نعدّل بحسب ما يعلّمه الاستخدام الفعلي.",
    },
    tech: {
      en: "Signed releases and automated deploys.",
      ar: "إصدارات موقّعة ونشر آلي.",
    },
  },
];

const modeLabels = {
  remote: { en: "Remote", ar: "عن بُعد" },
  hybrid: { en: "Hybrid", ar: "هجين" },
  onsite: { en: "On-site", ar: "حضوري" },
};

export const journey = [
  {
    id: "atmta",
    org: "ATMTA Technological Solutions",
    role: { en: "Software Engineer", ar: "مهندس برمجيات" },
    start: "2025-11",
    end: "2026-06",
    mode: modeLabels.remote,
    text: {
      en: "Built and grew two transport products, Musafer and Masar, set up automatic builds and releases, directed the company website and helped present the booking platform to transport operators.",
      ar: "بنيتُ ونمّيتُ منتجَي النقل مسافر ومسار، وأعددتُ البناء والإصدار الآلي، ووجّهتُ موقع الشركة، وساهمتُ في عرض منصة الحجز على مشغّلي النقل.",
    },
  },
  {
    id: "yes",
    org: "YES for Online Services",
    role: { en: "Flutter Developer", ar: "مطوّر Flutter" },
    start: "2023-11",
    end: "2024-10",
    mode: modeLabels.hybrid,
    text: {
      en: "Built a team-management app used by 20+ colleagues on Windows and Android, and worked on the iDBOOK apps released on Google Play.",
      ar: "بنيتُ تطبيق إدارة فريق يستخدمه أكثر من 20 زميلاً على ويندوز وأندرويد، وعملتُ على تطبيقات iDBOOK المنشورة على Google Play.",
    },
  },
  {
    id: "darrebni",
    org: "Darrebni Company",
    role: { en: "Flutter Trainee", ar: "متدرب Flutter" },
    start: "2023-03",
    end: "2023-11",
    mode: modeLabels.onsite,
    text: {
      en: "Worked on team projects, took part in planning and code reviews, and built the Darrebni National exam-prep app as the final project.",
      ar: "عملتُ على مشاريع جماعية وشاركتُ في التخطيط ومراجعة الكود، وبنيتُ تطبيق «درّبني الوطني» للتحضير للامتحان كمشروع ختامي.",
    },
  },
  {
    id: "jsfa",
    org: "Japan Syria Friendship Association",
    role: { en: "Flutter Trainee", ar: "متدرب Flutter" },
    start: "2022-10",
    end: "2022-11",
    mode: modeLabels.onsite,
    text: {
      en: "An intensive Flutter course under mentorship: interface design, animations and state management.",
      ar: "دورة Flutter مكثّفة بإشراف مرشدين: تصميم الواجهات والحركة وإدارة الحالة.",
    },
  },
  {
    id: "freelance",
    org: "Freelance",
    role: { en: "Flutter Developer", ar: "مطوّر Flutter" },
    start: "2022-01",
    end: null,
    mode: modeLabels.remote,
    text: {
      en: "Apps for clients across e-commerce, food ordering, health tracking and community platforms, from requirements to launch.",
      ar: "تطبيقات لعملاء في التجارة الإلكترونية وطلب الطعام والتتبّع الصحي والمنصات المجتمعية، من المتطلبات حتى الإطلاق.",
    },
  },
];

export const education = {
  degree: { en: "Bachelor of Software Engineering", ar: "بكالوريوس في هندسة البرمجيات" },
  school: {
    en: "University of Homs — College of Information Engineering",
    ar: "جامعة حمص — كلية الهندسة المعلوماتية",
  },
  years: "2019 – 2024",
};

export const certificates = [
  {
    id: "internship-pakistan",
    title: { en: "Flutter Mobile Development", ar: "تطوير تطبيقات الجوال بـ Flutter" },
    issuer: "Internship Pakistan",
    year: "2024",
    image: "https://res.cloudinary.com/debuadvrz/image/upload/v1752869029/cert_in1gpt.png",
  },
  {
    id: "darrebni-recommendation",
    title: { en: "Flutter Recommendation", ar: "توصية في تطوير Flutter" },
    issuer: "Darrebni Company",
    year: "2023",
    image: "https://res.cloudinary.com/debuadvrz/image/upload/v1752869021/photo_2023-10-18_18-42-38_lyxfyz.jpg",
  },
  {
    id: "jsfa-training",
    title: { en: "Flutter Training", ar: "تدريب Flutter" },
    issuer: "Japan Syria Friendship Association",
    year: "2022",
    image: "https://res.cloudinary.com/debuadvrz/image/upload/v1752869018/photo_2023-10-18_18-42-41_mi35o9.jpg",
  },
];

// Contact starters: choosing one writes a polite first message the visitor can send as-is or edit.
export const intents = [
  {
    id: "idea",
    label: { en: "I have an idea for an app", ar: "لديّ فكرة تطبيق" },
    message: {
      en: "Hello Laith, I have an idea for an app and I'd like to talk it through with you. In short: ",
      ar: "مرحباً ليث، لديّ فكرة تطبيق وأودّ أن أناقشها معك. باختصار: ",
    },
  },
  {
    id: "business",
    label: { en: "My business needs software", ar: "عملي يحتاج برمجيات" },
    message: {
      en: "Hello Laith, I run a business and I'm looking for software to help with: ",
      ar: "مرحباً ليث، أدير عملاً وأبحث عن برنامج يساعدني في: ",
    },
  },
  {
    id: "hire",
    label: { en: "I'm hiring", ar: "نحن نوظّف" },
    message: {
      en: "Hello Laith, we're hiring and your portfolio caught my eye. The role is: ",
      ar: "مرحباً ليث، نحن نوظّف ولفت موقعك انتباهي. الوظيفة هي: ",
    },
  },
  {
    id: "hello",
    label: { en: "A question or just hello", ar: "سؤال أو مجرد تحية" },
    message: {
      en: "Hello Laith, I have a question: ",
      ar: "مرحباً ليث، لديّ سؤال: ",
    },
  },
];
