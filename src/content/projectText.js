// Narrative text for every project, in English and Arabic.
// Rule used while writing: only facts that exist in the original project data. No invented numbers.
//
// Per language:
//   name, tagline  — what it is, in one plain sentence
//   who            — who it is for
//   problem        — the situation it responds to
//   built          — what was built, in plain words
//   result         — what came out of it (only what is known)
//   role           — my part
//   notes          — engineer view: real decisions and hard parts

export const projectText = {
  musafer: {
    en: {
      name: "Musafer",
      tagline: "Book an intercity bus seat from your phone.",
      who: "Travellers and bus passengers.",
      problem:
        "Buying a bus ticket often means visiting an office or making a call, without seeing which seats are still free.",
      built:
        "A booking app where you search trips, pick your exact seat on a map of the bus and get a QR ticket on your phone. It sends alerts when a trip changes and works in Arabic and English on Android, iOS and the web.",
      result: "A commercial product built at ATMTA Technological Solutions, with a public website.",
      role: "Software engineer in a team of two.",
      notes: [
        "Seat availability has to stay consistent while many people book at the same time, so the seat map is driven by live server state.",
        "OTP sign-in with secure token storage.",
        "Release pipeline: GitHub Actions lints every commit, builds signed APK/AAB from repository secrets and deploys the web build to a Linux VPS over SSH/rsync.",
        "Clean Architecture with BLoC; GoRouter for navigation; Dio for the API layer.",
      ],
    },
    ar: {
      name: "مسافر",
      tagline: "احجز مقعدك في الحافلة بين المدن من هاتفك.",
      who: "المسافرون وركّاب الحافلات.",
      problem:
        "شراء تذكرة الحافلة كثيراً ما يعني زيارة مكتب أو إجراء مكالمة، دون أن ترى أي المقاعد ما زال متاحاً.",
      built:
        "تطبيق حجز تبحث فيه عن الرحلات، وتختار مقعدك بالضبط على خريطة الحافلة، وتصلك تذكرة QR على هاتفك. ينبّهك عند تغيّر الرحلة، ويعمل بالعربية والإنجليزية على أندرويد وiOS والويب.",
      result: "منتج تجاري بنيته في ATMTA Technological Solutions، وله موقع عام.",
      role: "مهندس برمجيات ضمن فريق من اثنين.",
      notes: [
        "يجب أن يبقى توافر المقاعد متسقاً بينما يحجز كثيرون في اللحظة نفسها، لذلك تُدار خريطة المقاعد بحالة الخادم الحيّة.",
        "تسجيل دخول برمز OTP مع تخزين آمن للرموز.",
        "خط الإصدار: GitHub Actions يفحص كل commit، ويبني APK/AAB موقّعاً من أسرار المستودع، وينشر نسخة الويب على VPS لينكس عبر SSH/rsync.",
        "Clean Architecture مع BLoC، وGoRouter للتنقل، وDio لطبقة الـ API.",
      ],
    },
  },

  masar: {
    en: {
      name: "Masar",
      tagline: "One control room for a bus company.",
      who: "Transport companies and fleet managers.",
      problem:
        "Running a bus company means juggling offices, buses, drivers, routes, prices and cash — often spread over paper, chats and spreadsheets.",
      built:
        "An operations system with 23+ modules: offices, fleet, drivers, routes, trips and pricing in one dashboard. Five roles — super admin, supervisor, booking agent, driver, inspector — each see only what they need. Staff scan QR tickets, print receipts on Bluetooth thermal printers and reach customers through WhatsApp.",
      result:
        "A commercial system built at ATMTA, with financial and operational reports and expense tracking included.",
      role: "Software engineer in a team of two.",
      notes: [
        "23+ feature modules kept apart with Clean Architecture so they can grow independently.",
        "A multi-role permission system: each of the five roles has its own screens and actions.",
        "Bluetooth thermal printer integration — hardware that behaves differently from any API.",
        "Financial reporting where totals must always match the underlying records.",
        "The admin web portal deploys itself to a Linux VPS from GitHub Actions over SSH/rsync.",
      ],
    },
    ar: {
      name: "مسار",
      tagline: "غرفة تحكم واحدة لشركة حافلات.",
      who: "شركات النقل ومديرو الأساطيل.",
      problem:
        "إدارة شركة حافلات تعني التنقل بين المكاتب والحافلات والسائقين والمسارات والأسعار والنقد، وكثيراً ما يتوزع ذلك بين أوراق ومحادثات وجداول.",
      built:
        "نظام تشغيل متكامل من 23+ وحدة: المكاتب والأسطول والسائقون والمسارات والرحلات والتسعير في لوحة واحدة. خمسة أدوار (مدير عام، مشرف، موظف حجز، سائق، مفتش) يرى كلٌّ منها ما يحتاجه فقط. يمسح الموظفون تذاكر QR، ويطبعون الإيصالات على طابعات حرارية عبر Bluetooth، ويتواصلون مع العملاء عبر واتساب.",
      result:
        "نظام تجاري بنيته في ATMTA، فيه تقارير مالية وتشغيلية وتتبّع للمصاريف.",
      role: "مهندس برمجيات ضمن فريق من اثنين.",
      notes: [
        "أكثر من 23 وحدة مفصولة بـ Clean Architecture لتنمو كلٌّ منها باستقلال.",
        "نظام صلاحيات متعدد الأدوار: لكل دور من الخمسة شاشاته وإجراءاته.",
        "ربط الطابعات الحرارية عبر Bluetooth، وهو عتاد يتصرف بغير ما تتصرف به الـ APIs.",
        "تقارير مالية يجب أن تطابق مجاميعها السجلات الأصلية دائماً.",
        "بوابة الإدارة على الويب تُنشر تلقائياً إلى VPS لينكس من GitHub Actions عبر SSH/rsync.",
      ],
    },
  },

  "neighborhood-guide": {
    en: {
      name: "Neighborhood Guide",
      tagline: "A pocket guide to everything in the neighbourhood — even without internet.",
      who: "Residents of a local community.",
      problem:
        "Finding the right shop, the right service or tonight's duty pharmacy is harder than it should be, especially on weak mobile data.",
      built:
        "A directory app with a map, opening hours that show open or closed right now, and the duty-pharmacy schedule. Residents can suggest new places, which an admin reviews before they appear. It keeps working offline and only downloads what changed.",
      result:
        "Built solo as a personal project, end to end: the app, the backend and the admin dashboard. It has a public web version.",
      role: "Everything: product, design, app and backend.",
      notes: [
        "Offline-first: Hive cache on the phone plus a delta sync with Supabase that compares timestamps and fetches only modified records, saving data and battery.",
        "A custom time engine so open/closed status follows Syria time (UTC+3).",
        "Marker clustering on OpenStreetMap so the map stays smooth with many places.",
        "Row Level Security in PostgreSQL separating what guests and admins may read or write.",
        "Image compression before upload, for weak cellular networks.",
      ],
    },
    ar: {
      name: "دليل الضاحية",
      tagline: "دليل الحيّ في جيبك، حتى دون إنترنت.",
      who: "سكان حيٍّ محلي.",
      problem:
        "العثور على المحل المناسب أو الخدمة المناسبة أو صيدلية المناوبة الليلة أصعب مما ينبغي، خاصة مع ضعف بيانات الجوال.",
      built:
        "تطبيق دليل فيه خريطة، وساعات عمل تُظهر مفتوح أو مغلق الآن، وجدول الصيدليات المناوبة. يقترح السكان أماكن جديدة فيراجعها مشرف قبل ظهورها. يعمل دون إنترنت ولا ينزّل إلا ما تغيّر.",
      result:
        "بنيته بمفردي كمشروع شخصي من الألف إلى الياء: التطبيق والخادم ولوحة الإدارة. وله نسخة ويب عامة.",
      role: "كل شيء: المنتج والتصميم والتطبيق والخادم.",
      notes: [
        "يعمل دون إنترنت: ذاكرة Hive على الهاتف ومزامنة تفاضلية مع Supabase تقارن الطوابع الزمنية وتجلب السجلات المعدّلة فقط، فتوفّر البيانات والبطارية.",
        "محرّك وقت مخصّص ليتبع مفتوح/مغلق توقيت سوريا (UTC+3).",
        "تجميع العلامات (marker clustering) على OpenStreetMap لتبقى الخريطة سلسة مع كثرة الأماكن.",
        "سياسات Row Level Security في PostgreSQL تفصل ما يقرؤه الزائر عمّا يكتبه المشرف.",
        "ضغط الصور قبل الرفع من أجل الشبكات الضعيفة.",
      ],
    },
  },

  reviewiq: {
    en: {
      name: "ReviewIQ",
      tagline: "Reads your customers' reviews so you don't have to.",
      who: "Business owners and local merchants.",
      problem:
        "Reviews pile up, some are spam or insults, and it is hard to see what customers are really saying.",
      built:
        "A platform that collects reviews, tells whether each one is positive, neutral or negative, scores its quality and flags toxic or irrelevant ones. It writes a short summary with suggested replies. Owners get Telegram alerts and dashboards on web and mobile, in Arabic and English.",
      result:
        "Three connected parts — web dashboard, mobile app and backend — built solo in about two months.",
      role: "Full-stack developer and AI engineer.",
      notes: [
        "A multi-model NLP pipeline: Hugging Face models for sentiment and toxicity, a DeepSeek LLM for summaries and suggested replies.",
        "Getting Arabic text analysis accurate enough to trust.",
        "Secure webhook ingestion from Tally Forms, with validation before anything is stored.",
        "Clean Architecture across the Flask backend and the Flutter app; JWT auth; MongoDB Atlas.",
      ],
    },
    ar: {
      name: "ReviewIQ",
      tagline: "يقرأ مراجعات زبائنك نيابةً عنك.",
      who: "أصحاب الأعمال والتجار المحليون.",
      problem:
        "تتراكم المراجعات، وبعضها إزعاج أو إساءة، ويصعب أن ترى ما يقوله زبائنك حقاً.",
      built:
        "منصة تجمع المراجعات وتحدد هل كلٌّ منها إيجابية أم محايدة أم سلبية، وتقيّم جودتها، وتنبّه إلى المسيء أو غير المتصل بالموضوع. تكتب ملخصاً قصيراً مع ردود مقترحة. يصل صاحب العمل تنبيه على تيليجرام ولوحات على الويب والجوال، بالعربية والإنجليزية.",
      result:
        "ثلاثة أجزاء مترابطة: لوحة ويب وتطبيق جوال وخادم، بنيتها بمفردي في نحو شهرين.",
      role: "مطوّر Full-stack ومهندس ذكاء اصطناعي.",
      notes: [
        "خط معالجة NLP متعدد النماذج: نماذج Hugging Face للمشاعر والإساءة، وLLM من DeepSeek للملخصات والردود المقترحة.",
        "الوصول بتحليل النص العربي إلى دقة تُوثق بها.",
        "استقبال آمن لـ webhook من Tally Forms مع تحقق قبل تخزين أي شيء.",
        "Clean Architecture في خادم Flask وتطبيق Flutter، مع JWT وMongoDB Atlas.",
      ],
    },
  },

  "radar-almasrouf": {
    en: {
      name: "Radar Al-Masrouf",
      tagline: "A private family-budget app that works fully offline.",
      who: "Arab families and individuals.",
      problem:
        "Tracking money across currencies, bills and debts is messy, and many apps want your financial data in the cloud.",
      built:
        "Wallets in five currencies, monthly budgets with alerts, savings goals, recurring bills, debts, a shopping radar that tracks prices, and spending charts. Everything stays on the phone, with manual and automatic backups.",
      result:
        "Built solo with an Arabic-first design. Privacy by design: no cloud account is needed.",
      role: "Developer and product designer.",
      notes: [
        "Multi-currency wallet logic where balances stay consistent after every transfer, bill and debt payment.",
        "Debts linked to wallets so the financial state never drifts.",
        "A recurring-bills engine with undo and rollback.",
        "JSON backup and one-tap restore; charts with fl_chart; Hive and SharedPreferences for storage.",
      ],
    },
    ar: {
      name: "رادار المصروف",
      tagline: "تطبيق ميزانية عائلية خاص، يعمل بالكامل دون إنترنت.",
      who: "العائلات والأفراد العرب.",
      problem:
        "تتبّع المال بين عملات وفواتير وديون أمر فوضوي، وكثير من التطبيقات تريد بياناتك المالية في السحابة.",
      built:
        "محافظ بخمس عملات، وميزانيات شهرية بتنبيهات، وأهداف ادخار، وفواتير متكررة، وديون، و«رادار تسوّق» يتتبع الأسعار، ومخططات للإنفاق. كل شيء يبقى على الهاتف، مع نسخ احتياطي يدوي وتلقائي.",
      result:
        "بنيته بمفردي بتصميم عربي أولاً. الخصوصية من التصميم نفسه: لا حاجة إلى حساب سحابي.",
      role: "مطوّر ومصمم منتج.",
      notes: [
        "منطق محافظ متعدد العملات تبقى أرصدته متسقة بعد كل تحويل وفاتورة وسداد دَين.",
        "ربط الديون بالمحافظ كي لا تنحرف الحالة المالية.",
        "محرّك فواتير متكررة مع تراجع (undo/rollback).",
        "نسخ احتياطي بصيغة JSON واستعادة بلمسة، ومخططات بـ fl_chart، وتخزين بـ Hive وSharedPreferences.",
      ],
    },
  },

  "atmta-website": {
    en: {
      name: "ATMTA Website",
      tagline: "The official bilingual website of a transport-technology company.",
      who: "ATMTA's clients and visitors.",
      problem:
        "A technology company needed a professional Arabic and English presence, with a page for each of its products.",
      built:
        "A responsive site with landing pages for Musafer and Masar, smooth switching between Arabic and English, contact options and a WhatsApp button. I directed the content, design and quality, and used AI tools to implement it — my first Next.js project.",
      result: "Live as the company's public website, and deployed automatically on every update.",
      role: "Product director and AI-workflow manager.",
      notes: [
        "AI-augmented development: the hard skill was writing requirements clear enough to steer the tools.",
        "Keeping design consistent across RTL and LTR layouts.",
        "Next.js standalone output, deployed by GitHub Actions with a graceful PM2 restart over SSH so the site does not go down on release.",
        "Next.js App Router, React 19, TypeScript, Tailwind CSS v4, Framer Motion.",
      ],
    },
    ar: {
      name: "موقع ATMTA",
      tagline: "الموقع الرسمي ثنائي اللغة لشركة تقنيات نقل.",
      who: "عملاء ATMTA وزوّار الموقع.",
      problem:
        "احتاجت شركة تقنية إلى حضور احترافي بالعربية والإنجليزية، مع صفحة لكل منتج من منتجاتها.",
      built:
        "موقع متجاوب فيه صفحات هبوط لمسافر ومسار، وتبديل سلس بين العربية والإنجليزية، وطرق تواصل وزر واتساب. وجّهتُ المحتوى والتصميم والجودة، واستعنتُ بأدوات الذكاء الاصطناعي في التنفيذ، وكان أول مشروع لي بـ Next.js.",
      result: "يعمل كموقع الشركة العام، ويُنشر تلقائياً مع كل تحديث.",
      role: "مدير المنتج ومدير سير العمل مع الذكاء الاصطناعي.",
      notes: [
        "التطوير بمساعدة الذكاء الاصطناعي: المهارة الصعبة كانت كتابة متطلبات واضحة بما يكفي لتوجيه الأدوات.",
        "اتساق التصميم بين تخطيطَي RTL وLTR.",
        "ناتج Next.js بنمط standalone يُنشر عبر GitHub Actions مع إعادة تشغيل سلسة بـ PM2 عبر SSH كي لا ينقطع الموقع عند الإصدار.",
        "Next.js App Router وReact 19 وTypeScript وTailwind CSS v4 وFramer Motion.",
      ],
    },
  },

  "training-center-bot": {
    en: {
      name: "Training Center Bot",
      tagline: "A training center managed entirely from Telegram.",
      who: "Training center administrators.",
      problem:
        "Registrations, payments and reminders handled by hand across chats and sheets take a lot of time.",
      built:
        "A Telegram bot where admins create courses, approve registrations, track who has paid, send reminders and announcements, keep materials in Google Drive and schedule Facebook and Instagram posts from Google Sheets. In Arabic and English.",
      result: "A production-ready system, built solo for a private client.",
      role: "Full-stack developer.",
      notes: [
        "Clean Architecture in Python: entities, use cases and repositories.",
        "Async MongoDB with Motor.",
        "Several third-party APIs working together: Telegram, Google Drive and Sheets, Meta Graph.",
        "APScheduler for 24-hour reminders and scheduled posts; Pydantic for validation, including Syrian phone numbers.",
      ],
    },
    ar: {
      name: "بوت إدارة مركز تدريب",
      tagline: "مركز تدريب يُدار بالكامل من تيليجرام.",
      who: "مديرو مراكز التدريب.",
      problem:
        "إدارة التسجيل والدفعات والتذكيرات يدوياً بين المحادثات والجداول تستهلك وقتاً كبيراً.",
      built:
        "بوت على تيليجرام ينشئ منه المدير الدورات، ويوافق على التسجيلات، ويتتبع من دفع، ويرسل التذكيرات والإعلانات، ويحفظ المواد في Google Drive، ويجدول منشورات فيسبوك وإنستجرام من Google Sheets. بالعربية والإنجليزية.",
      result: "نظام جاهز للإنتاج، بنيته بمفردي لعميل خاص.",
      role: "مطوّر Full-stack.",
      notes: [
        "Clean Architecture في Python: كيانات وحالات استخدام ومستودعات.",
        "MongoDB غير متزامن عبر Motor.",
        "عدة APIs خارجية تعمل معاً: Telegram وGoogle Drive وSheets وMeta Graph.",
        "APScheduler لتذكيرات الـ 24 ساعة والمنشورات المجدولة، وPydantic للتحقق ومنه أرقام الهواتف السورية.",
      ],
    },
  },

  "purchase-management": {
    en: {
      name: "Purchase Management System",
      tagline: "Purchase approvals that follow the company's chain of command.",
      who: "The departments of an enterprise client.",
      problem:
        "When purchase requests pass between managers, finance and auditors, it is hard to see where each one is and who approved what.",
      built:
        "A Windows and Android system where a purchase request moves through approval steps — general manager, finance, procurement, assistant, auditor — with vendors, items, reports, audit logs and notifications, in Arabic and English.",
      result: "Built solo as a full-stack system for a private enterprise client in about two months.",
      role: "Full-stack developer.",
      notes: [
        "A multi-stage approval workflow with a different permission set per role.",
        "Data integrity when several people act on the same request.",
        "Audit logs so every action is traceable for compliance.",
        "Flutter client with GetX; Node.js, TypeScript, Express and PostgreSQL backend.",
      ],
    },
    ar: {
      name: "نظام إدارة المشتريات",
      tagline: "موافقات شراء تتبع التسلسل الإداري للشركة.",
      who: "أقسام شركة عميلة.",
      problem:
        "حين تتنقل طلبات الشراء بين المديرين والمالية والمدققين يصعب أن تعرف أين وصل كل طلب ومن وافق على ماذا.",
      built:
        "نظام لويندوز وأندرويد يمر فيه طلب الشراء بمراحل موافقة (المدير العام، المالية، المشتريات، المساعد، المدقق)، مع الموردين والأصناف والتقارير وسجلات التدقيق والإشعارات، بالعربية والإنجليزية.",
      result: "بنيته بمفردي كنظام Full-stack لعميل مؤسسي خاص في نحو شهرين.",
      role: "مطوّر Full-stack.",
      notes: [
        "سير موافقات متعدد المراحل، ولكل دور مجموعة صلاحيات مختلفة.",
        "سلامة البيانات حين يتعامل عدة أشخاص مع الطلب نفسه.",
        "سجلات تدقيق ليكون كل إجراء قابلاً للتتبع والامتثال.",
        "عميل Flutter مع GetX، وخادم Node.js وTypeScript وExpress وPostgreSQL.",
      ],
    },
  },

  "team-management": {
    en: {
      name: "Team Management App",
      tagline: "A team's tasks and chat in one app, on Windows and Android.",
      who: "The employees of YES for Online Services.",
      problem: "Teams need to assign work, follow progress and talk, without jumping between separate tools.",
      built:
        "A desktop and mobile app to create, assign and track tasks and projects, with an admin dashboard to monitor performance and a built-in real-time chat in the style of WhatsApp.",
      result: "Improved team productivity by 30% across 20+ employees, in internal use at the company.",
      role: "Lead mobile developer in a team of two.",
      notes: [
        "Real-time sync between many users with Socket.IO connected to Flutter.",
        "Offline scenarios handled with local caching in Hive.",
        "An admin dashboard that stays understandable despite how much it shows.",
        "Supporting many concurrent users; role-based permissions.",
      ],
    },
    ar: {
      name: "تطبيق إدارة الفريق",
      tagline: "مهام الفريق ومحادثاته في تطبيق واحد على ويندوز وأندرويد.",
      who: "موظفو YES for Online Services.",
      problem: "تحتاج الفرق إلى توزيع العمل ومتابعة التقدم والتحدث، دون القفز بين أدوات منفصلة.",
      built:
        "تطبيق مكتبي وجوال لإنشاء المهام والمشاريع وإسنادها وتتبعها، مع لوحة إدارة لمراقبة الأداء ودردشة فورية مدمجة على نمط واتساب.",
      result: "رفع إنتاجية الفريق بنسبة 30% لدى أكثر من 20 موظفاً، وذلك في الاستخدام الداخلي بالشركة.",
      role: "مطوّر الجوال الرئيسي ضمن فريق من اثنين.",
      notes: [
        "مزامنة فورية بين مستخدمين كثر عبر Socket.IO مع Flutter.",
        "التعامل مع حالات انقطاع الاتصال بتخزين محلي في Hive.",
        "لوحة إدارة تبقى مفهومة رغم كثرة ما تعرضه.",
        "دعم عدد كبير من المستخدمين المتزامنين، وصلاحيات حسب الدور.",
      ],
    },
  },

  idbook: {
    en: {
      name: "iDBOOK",
      tagline: "A marketplace app on Google Play, with a live feed of ads, polls and posts.",
      who: "The public, through Google Play.",
      problem: "A feed that mixes ads, polls and posts needs to decide what each person sees first.",
      built:
        "I built the Orbit section of the app: a feed of ads, polls and posts ordered by weighted priority to keep people engaged, with live reactions and view counts and timer-based behaviour.",
      result: "Released on Google Play. Worked on it for about a year at YES for Online Services.",
      role: "Mobile developer in a team of three.",
      notes: [
        "A weighted priority algorithm that reorders the feed.",
        "Real-time updates for post reactions and views.",
        "Performance with large amounts of content.",
        "Flutter with GetX and Provider; SQLite and Socket.IO; QR codes and Google Maps elsewhere in the app.",
      ],
    },
    ar: {
      name: "iDBOOK",
      tagline: "تطبيق سوق على Google Play فيه خلاصة حيّة من الإعلانات والاستطلاعات والمنشورات.",
      who: "الجمهور عبر Google Play.",
      problem: "خلاصة تمزج الإعلانات والاستطلاعات والمنشورات تحتاج إلى قرار: ما الذي يراه كل شخص أولاً؟",
      built:
        "بنيتُ قسم Orbit في التطبيق: خلاصة إعلانات واستطلاعات ومنشورات مرتبة بأولوية موزونة لإبقاء المستخدمين متفاعلين، مع تفاعلات ومشاهدات حيّة وسلوك يعتمد على المؤقّتات.",
      result: "نُشر على Google Play. عملتُ عليه نحو عام في YES for Online Services.",
      role: "مطوّر جوال ضمن فريق من ثلاثة.",
      notes: [
        "خوارزمية أولوية موزونة تعيد ترتيب الخلاصة.",
        "تحديثات فورية لتفاعلات المنشورات ومشاهداتها.",
        "الأداء مع كميات كبيرة من المحتوى.",
        "Flutter مع GetX وProvider، وSQLite وSocket.IO، وQR وGoogle Maps في أجزاء أخرى من التطبيق.",
      ],
    },
  },

  "idbook-agent": {
    en: {
      name: "iDBOOK Agent",
      tagline: "Activate a customer's plan by scanning a QR code.",
      who: "Sales agents at YES for Online Services.",
      problem: "Activating a paid plan should be quick and hard to get wrong.",
      built:
        "An agent app: scan a QR code to activate a plan, with a balance check, location verification, plan history and SMS messages.",
      result: "Used internally at YES for Online Services.",
      role: "Mobile developer.",
      notes: [
        "QR scanning accuracy.",
        "Location verification before activation.",
        "Security around payment activation and real-time balance.",
        "Flutter with GetX; Socket.IO for live status.",
      ],
    },
    ar: {
      name: "iDBOOK للوكلاء",
      tagline: "فعّل باقة العميل بمسح رمز QR.",
      who: "وكلاء المبيعات في YES for Online Services.",
      problem: "تفعيل باقة مدفوعة يجب أن يكون سريعاً ويصعب الخطأ فيه.",
      built:
        "تطبيق للوكلاء: يمسح رمز QR لتفعيل الباقة، مع التحقق من الرصيد والموقع، وسجل للباقات، ورسائل SMS.",
      result: "يُستخدم داخلياً في YES for Online Services.",
      role: "مطوّر جوال.",
      notes: [
        "دقة مسح رموز QR.",
        "التحقق من الموقع قبل التفعيل.",
        "الأمان حول تفعيل الدفع والرصيد اللحظي.",
        "Flutter مع GetX، وSocket.IO للحالة الحيّة.",
      ],
    },
  },

  "car-service": {
    en: {
      name: "Car Service App",
      tagline: "Book a parking spot or find a car-service center.",
      who: "Drivers.",
      problem: "Finding parking and a trustworthy service center usually means driving around or asking people.",
      built:
        "An app to book parking spots, find service centers on a map, rate them and see service history, with live booking updates and an admin dashboard of statistics.",
      result: "My university graduation project at the University of Homs, built with a partner.",
      role: "Lead developer in a team of two.",
      notes: [
        "Real-time booking management with Socket.IO.",
        "Location-based search with Google Maps.",
        "An admin dashboard that turns bookings into usable statistics.",
        "Flutter and GetX client; Node.js, Express and MongoDB backend.",
      ],
    },
    ar: {
      name: "تطبيق خدمات السيارات",
      tagline: "احجز موقف سيارة أو اعثر على مركز صيانة.",
      who: "سائقو السيارات.",
      problem: "العثور على موقف ومركز صيانة موثوق يعني غالباً التجوال بالسيارة أو سؤال الناس.",
      built:
        "تطبيق لحجز المواقف، والعثور على مراكز الصيانة على الخريطة، وتقييمها، وعرض سجل الخدمات، مع تحديث فوري للحجوزات ولوحة إدارة بالإحصاءات.",
      result: "مشروع تخرجي في جامعة حمص، أنجزته مع شريك.",
      role: "المطوّر الرئيسي ضمن فريق من اثنين.",
      notes: [
        "إدارة حجوزات فورية عبر Socket.IO.",
        "بحث مبني على الموقع مع Google Maps.",
        "لوحة إدارة تحوّل الحجوزات إلى إحصاءات مفيدة.",
        "عميل Flutter وGetX، وخادم Node.js وExpress وMongoDB.",
      ],
    },
  },

  "food-ordering": {
    en: {
      name: "Food Ordering App",
      tagline: "Order from nearby restaurants and follow your order live.",
      who: "Customers of a private client.",
      problem: "Ordering food should show what is nearby, take payment safely and tell you where your order is.",
      built:
        "A cross-platform app with restaurant discovery on a map, a cart, card payments through Stripe, live order tracking, ratings, push notifications and cached data when the connection drops.",
      result: "A freelance project for a private client, built with a partner.",
      role: "Full-stack developer in a team of two.",
      notes: [
        "Real-time order status updates.",
        "Payment security with Stripe.",
        "Order tracking accuracy and location-based discovery.",
        "BLoC with Clean Architecture; Firebase; Hive for offline cache.",
      ],
    },
    ar: {
      name: "تطبيق طلب الطعام",
      tagline: "اطلب من المطاعم القريبة وتابع طلبك لحظةً بلحظة.",
      who: "زبائن عميل خاص.",
      problem: "طلب الطعام ينبغي أن يُظهر ما حولك، ويأخذ الدفع بأمان، ويخبرك أين وصل طلبك.",
      built:
        "تطبيق متعدد المنصات فيه استكشاف المطاعم على الخريطة، وسلة، ودفع بالبطاقة عبر Stripe، وتتبّع حيّ للطلب، وتقييمات، وإشعارات، وبيانات مخزّنة عند انقطاع الاتصال.",
      result: "مشروع عمل حر لعميل خاص، أنجزته مع شريك.",
      role: "مطوّر Full-stack ضمن فريق من اثنين.",
      notes: [
        "تحديثات فورية لحالة الطلب.",
        "أمان الدفع مع Stripe.",
        "دقة تتبّع الطلب والاستكشاف المبني على الموقع.",
        "BLoC مع Clean Architecture، وFirebase، وHive للتخزين دون إنترنت.",
      ],
    },
  },

  "darrebni-national": {
    en: {
      name: "Darrebni National",
      tagline: "One place for Syrian students to prepare for the national exam.",
      who: "Syrian students preparing for the National Unified Exam.",
      problem: "Study material for a national exam is scattered, large and hard to organise.",
      built:
        "An app with organised study resources and structured exam content, a PDF reader, bookmarks, search, progress tracking and offline access.",
      result: "My final project in the Darrebni Company training programme, built with another trainee.",
      role: "Lead developer in a team of two.",
      notes: [
        "Handling large PDF files without slowing the app.",
        "Organising a complex content structure so students can find things.",
        "Hive for offline access; Flutter with Clean Architecture and GetX.",
        "Cross-checking and testing between the two of us for quality.",
      ],
    },
    ar: {
      name: "درّبني الوطني",
      tagline: "مكان واحد للطلاب السوريين للاستعداد للامتحان الوطني.",
      who: "الطلاب السوريون المستعدون للامتحان الوطني الموحد.",
      problem: "مواد دراسة الامتحان الوطني مبعثرة وكبيرة ويصعب تنظيمها.",
      built:
        "تطبيق بموارد دراسية منظّمة ومحتوى امتحاني مرتب، وقارئ PDF، وإشارات مرجعية، وبحث، وتتبّع للتقدم، وعمل دون إنترنت.",
      result: "مشروعي الختامي في برنامج التدريب بشركة درّبني، أنجزته مع متدرب آخر.",
      role: "المطوّر الرئيسي ضمن فريق من اثنين.",
      notes: [
        "التعامل مع ملفات PDF كبيرة دون إبطاء التطبيق.",
        "تنظيم بنية محتوى معقّدة ليجد الطالب ما يريده.",
        "Hive للعمل دون إنترنت، وFlutter مع Clean Architecture وGetX.",
        "مراجعة واختبار متبادل بيننا لضمان الجودة.",
      ],
    },
  },

  betterme: {
    en: {
      name: "BetterMe",
      tagline: "A friendly health app with an AI assistant.",
      who: "Anyone building healthier habits.",
      problem: "Healthy habits are easier with gentle reminders and quick answers than with a thick manual.",
      built:
        "A health app with BMI tracking, tips and FAQs, smart reminders and an assistant powered by ChatGPT for personalised guidance.",
      result: "My final-year project at the University of Homs, built with a partner.",
      role: "Mobile developer in a team of two.",
      notes: [
        "Integrating the ChatGPT API and shaping its answers for a health context.",
        "Reminders that fire reliably.",
        "Care with health data and user privacy.",
        "Flutter with GetX and SharedPreferences.",
      ],
    },
    ar: {
      name: "BetterMe",
      tagline: "تطبيق صحي ودود مع مساعد بالذكاء الاصطناعي.",
      who: "كل من يريد بناء عادات صحية.",
      problem: "العادات الصحية أسهل مع تذكيرات لطيفة وأجوبة سريعة منها مع كتيّب ثقيل.",
      built:
        "تطبيق صحي فيه تتبّع لمؤشر كتلة الجسم، ونصائح وأسئلة شائعة، وتذكيرات ذكية، ومساعد يعمل بـ ChatGPT لإرشاد مخصّص.",
      result: "مشروع تخرجي في السنة الأخيرة بجامعة حمص، أنجزته مع شريك.",
      role: "مطوّر جوال ضمن فريق من اثنين.",
      notes: [
        "ربط ChatGPT API وتشكيل إجاباته بما يناسب السياق الصحي.",
        "تذكيرات تعمل في موعدها بشكل موثوق.",
        "الحرص على البيانات الصحية وخصوصية المستخدم.",
        "Flutter مع GetX وSharedPreferences.",
      ],
    },
  },

  "ecommerce-api": {
    en: {
      name: "E-Commerce API",
      tagline: "The engine behind an online shop.",
      who: "Developers and shop owners who need a ready, secure back end.",
      problem: "Every online shop needs accounts, products, orders and payments that are secure and documented.",
      built:
        "A secure backend for online stores: accounts, products, orders, wishlists, roles, payment integration and admin endpoints, with live API documentation you can try in the browser.",
      result: "Open source, with public API documentation.",
      role: "Backend developer.",
      notes: [
        "Clean Architecture in Node.js and TypeScript.",
        "Security basics done properly: JWT, CORS, input validation.",
        "MongoDB and PostgreSQL, with thought given to indexing and scale.",
        "Swagger/OpenAPI documentation and a Postman collection.",
      ],
    },
    ar: {
      name: "واجهة برمجة لمتجر إلكتروني",
      tagline: "المحرّك الذي يقف خلف المتجر الإلكتروني.",
      who: "المطورون وأصحاب المتاجر الذين يحتاجون إلى خادم جاهز وآمن.",
      problem: "كل متجر إلكتروني يحتاج حسابات ومنتجات وطلبات ودفعاً، آمنة وموثّقة.",
      built:
        "خادم آمن للمتاجر الإلكترونية: حسابات ومنتجات وطلبات وقوائم رغبات وأدوار وربط دفع ونقاط نهاية للإدارة، مع توثيق API حيّ يمكنك تجربته في المتصفح.",
      result: "مفتوح المصدر، مع توثيق عام للـ API.",
      role: "مطوّر خلفي (Backend).",
      notes: [
        "Clean Architecture في Node.js وTypeScript.",
        "أساسيات الأمان بشكل صحيح: JWT وCORS والتحقق من المدخلات.",
        "MongoDB وPostgreSQL مع التفكير بالفهرسة والتوسّع.",
        "توثيق Swagger/OpenAPI ومجموعة Postman.",
      ],
    },
  },
};
