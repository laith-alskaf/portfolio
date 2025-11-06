# دليل هيكل البيانات الجديد

## 📋 نظرة عامة على البيانات

تم إعادة هيكلة البيانات من ملف واحد إلى عدة ملفات منظمة لسهولة الإدارة والتعديل.

## 📁 توضيح الملفات

### \src/data/common/personal.js\
**المحتوى**: البيانات الشخصية الأساسية

\\\javascript
{
  name: 'الاسم الكامل',
  title: 'المسمى الوظيفي',
  bio: 'السيرة الذاتية المختصرة',
  contact: {
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    location: 'الموقع الجغرافي'
  },
  social: {
    github: 'رابط جيثاب',
    linkedin: 'رابط لينكدإن',
    // ... وسائل التواصل الأخرى
  }
}
\\\

**متى تعدّل**: تحديث البيانات الشخصية أو وسائل التواصل

---

### \src/data/common/skills.js\
**المحتوى**: المهارات والتخصصات

\\\javascript
{
  name: 'اسم المهارة',        // مثل: Flutter, Node.js
  level: 85,                  // من 0 إلى 100
  category: 'mobile',         // تصنيف المهارة
  years: 3,                   // سنوات الخبرة
  experience: 'Advanced',     // مستوى الخبرة
  featured: true              // لعرضها في الصفحة الرئيسية
}
\\\

**التصنيفات المتاحة**:
- \mobile\ - تطوير الجوال
- \ackend\ - تطوير الخادم
- \languages\ - لغات البرمجة
- \databases\ - قواعد البيانات
- \	ools\ - الأدوات والخدمات

**متى تعدّل**: إضافة مهارة جديدة أو تحديث المستوى

---

### \src/data/common/education.js\
**المحتوى**: التعليم والشهادات

**قسم التعليم**:
\\\javascript
{
  degree: 'درجة البكالوريوس',
  institution: 'الجامعة',
  startYear: 2019,
  endYear: 2024,
  description: 'وصف البرنامج',
  highlights: ['نقاط مهمة', '...']
}
\\\

**قسم الشهادات**:
\\\javascript
{
  title: 'اسم الشهادة',
  issuer: 'جهة الإصدار',
  year: 2024,
  description: 'وصف الشهادة',
  skills: ['المهارات المستفادة'],
  image: 'رابط الصورة',
  links: {
    certificate: 'رابط الشهادة',
    coursework: 'رابط المشروع'
  }
}
\\\

**متى تعدّل**: إضافة شهادة جديدة أو حذف قديمة

---

### \src/data/common/experience.js\
**المحتوى**: التجارب العملية والوظائف

\\\javascript
{
  company: 'اسم الشركة',
  position: 'المسمى الوظيفي',
  startDate: '2023-11',
  endDate: '2024-10',
  isCurrent: false,
  description: 'وصف التجربة',
  responsibilities: ['المسؤوليات'],
  achievements: [
    {
      title: 'الإنجاز',
      description: 'التفاصيل'
    }
  ],
  technologies: ['التقنيات المستخدمة'],
  featured: true
}
\\\

**متى تعدّل**: إضافة وظيفة جديدة أو تحديث الوظيفة الحالية

---

### \src/data/projects/projectsData.js\
**المحتوى**: بيانات المشاريع الكاملة

هذا هو الملف الأهم! يحتوي على جميع تفاصيل المشاريع:

\\\javascript
{
  id: 1,
  title: 'اسم المشروع',
  title_en: 'Project Name',
  
  // التصنيف والحالة
  category: 'enterprise',  // mobile, web, backend, enterprise
  status: 'completed',     // completed, in-progress
  featured: true,          // هل يظهر في الصفحة الرئيسية
  priority: 1,             // ترتيب العرض
  
  // الوصف
  shortDescription: 'وصف قصير (سطر واحد)',
  description: 'وصف طويل وتفصيلي',
  
  // التقنيات المستخدمة
  technologies: [
    {
      name: 'Flutter',
      category: 'frontend',
      level: 'advanced',
      proficiency: 95
    }
  ],
  
  // الصور والملفات
  images: {
    thumbnail: 'صورة الغلاف',
    gallery: ['صورة 1', 'صورة 2'],
    color: 'purple'
  },
  
  // الروابط المهمة
  links: {
    liveDemo: 'رابط التطبيق الحي',
    github: 'رابط المستودع',
    presentation: 'رابط العرض التقديمي',
    drive: 'رابط مجلد Google Drive'
  },
  
  // تفاصيل المشروع
  projectDetails: {
    duration: { start: '2024-01', end: '2024-03', months: 3 },
    company: 'الشركة',
    client: 'العميل',
    team: { size: 1, role: 'دورك' },
    budget: 'الميزانية'
  },
  
  // الميزات الرئيسية
  features: [
    'الميزة الأولى',
    'الميزة الثانية'
  ],
  
  // الإنجازات
  achievements: [
    { metric: 'المقياس', value: 'القيمة' }
  ]
}
\\\

**متى تعدّل**: إضافة مشروع جديد أو تحديث مشروع موجود

---

### \src/data/common/googleDrive.js\
**المحتوى**: معلومات ربط Google Drive

تحتوي على:
- معرفات ملفات PDF للعروض التقديمية
- معرفات المجلدات لمشاركة المشاريع
- روابط الملفات المختلفة

**كيفية الحصول على معرف الملف**:
1. افتح الملف على Google Drive
2. انسخ رابط الملف
3. استخرج المعرف من الرابط:
   \https://drive.google.com/file/d/[معرف_الملف]/view\

---

## 🎯 أمثلة عملية

### إضافة مشروع جديد

\\\javascript
// في src/data/projects/projectsData.js
{
  id: 10,
  title: 'تطبيق إدارة المبيعات',
  title_en: 'Sales Management App',
  category: 'enterprise',
  status: 'completed',
  featured: true,
  priority: 2,
  
  shortDescription: 'تطبيق لإدارة عمليات البيع والعملاء',
  description: 'تطبيق متكامل لإدارة المبيعات مع تقارير مفصلة...',
  
  technologies: [
    { name: 'Flutter', category: 'frontend', level: 'advanced', proficiency: 95 },
    { name: 'Node.js', category: 'backend', level: 'advanced', proficiency: 85 }
  ],
  
  // ... باقي البيانات
}
\\\

### تحديث مهارة

\\\javascript
// في src/data/common/skills.js

// قبل: المهارة لم تكن موجودة
// بعد: أضفنا مهارة جديدة

{ 
  name: 'Kotlin', 
  level: 60, 
  category: 'languages',
  years: 0.5,
  experience: 'Beginner',
  featured: false 
}
\\\

### إضافة شهادة جديدة

\\\javascript
// في src/data/common/education.js

{
  id: 4,
  title: 'AWS Solutions Architect',
  title_ar: 'معماري الحلول AWS',
  issuer: 'Amazon Web Services',
  year: 2024,
  
  description: 'شهادة معماري الحلول من AWS',
  skills: ['AWS', 'Cloud Architecture', 'Infrastructure'],
  
  image: 'رابط صورة الشهادة',
  credential: 'معرف الشهادة',
  
  links: {
    certificate: 'https://drive.google.com/file/d/...'
  },
  
  featured: true
}
\\\

---

## 🔄 سير العمل الموصى به

### عند الحصول على مشروع جديد:

1. **توثيق المشروع**:
   - التقط صور للمشروع
   - اكتب وصفاً مفصلاً
   - قائمة الميزات الرئيسية
   - الإنجازات

2. **رفع الملفات على Google Drive**:
   - رفع ملفات PDF التوضيحية
   - رفع لقطات الشاشة
   - رفع الفيديوهات التوضيحية (اختياري)

3. **إضافة المشروع للبوتفوليو**:
   - أضفه في \projectsData.js\
   - أضف الروابط من Google Drive
   - حدّث الصور

4. **تحديث البيانات الأخرى**:
   - أضف المهارات الجديدة (إن وجدت)
   - حدّث التجربة إذا كانت وظيفة

---

## 💾 نصائح حفظ البيانات

1. **استخدم صيغة JSON صحيحة**:
   - تأكد من الفواصل والأقواس
   - استخدم أداة JSON Validator

2. **استخدم الحروف الخاصة بشكل صحيح**:
   - استخدم \\\\\...\\\\ للنصوص متعددة الأسطر
   - استخدم \\\\n للأسطر الجديدة

3. **احتفظ بنسخة احتياطية**:
   - احفظ نسخة في Google Drive
   - احفظ نسخة محلية قبل التعديل

---

هذا الهيكل يوفر مرونة عالية وسهولة في الصيانة والتحديث!
