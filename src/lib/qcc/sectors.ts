import { c, type Copy, type Lang, type PageKey } from './content';

export type SectorSlug = 'oil-gas' | 'healthcare' | 'hospitality' | 'government' | 'banking' | 'education' | 'commercial';
export type SectorIcon = 'factory' | 'heart' | 'hotel' | 'landmark' | 'bank' | 'education' | 'warehouse';

export type Sector = {
  slug: SectorSlug;
  icon: SectorIcon;
  accent: string;
  image: string;
  title: Copy;
  tagline: Copy;
  intro: Copy;
  environments: Copy[];
  priorities: { title: Copy; body: Copy }[];
  services: { division: PageKey; items: Copy[] }[];
};

export const sectorList: Sector[] = [
  {
    slug: 'oil-gas', icon: 'factory', accent: 'oklch(.72 .16 60)', image: '/sectors/oil-gas.png',
    title: c('Oil & Gas', 'النفط والغاز'),
    tagline: c('Disciplined support for demanding industrial sites.', 'دعم منضبط للمواقع الصناعية ذات المتطلبات العالية.'),
    intro: c('Industrial and energy environments call for careful planning, safety awareness and dependable people. QCC supports camps, workshops, offices and facility areas with cleaning, support personnel and pest management shaped around site rules and permit requirements.', 'تتطلب البيئات الصناعية وبيئات الطاقة تخطيطاً دقيقاً ووعياً بالسلامة وكوادر موثوقة. تدعم QCC المعسكرات والورش والمكاتب ومناطق المرافق بخدمات التنظيف وكوادر الدعم وإدارة الآفات وفقاً لقواعد الموقع ومتطلبات التصاريح.'),
    environments: [c('Accommodation camps', 'معسكرات السكن'), c('Workshops & yards', 'الورش والساحات'), c('Site offices', 'مكاتب المواقع'), c('Canteens & welfare areas', 'المقاصف ومناطق الخدمات')],
    priorities: [
      { title: c('Safety-first routines', 'إجراءات تبدأ بالسلامة'), body: c('Work planned around site inductions, PPE expectations and agreed method statements.', 'عمل مخطط وفق تعريفات الموقع ومتطلبات معدات الوقاية وبيانات الطريقة المتفق عليها.') },
      { title: c('Heavy-duty cleaning', 'تنظيف للمهام الشاقة'), body: c('Industrial, workshop and floor-care cleaning suited to high-traffic operational areas.', 'تنظيف صناعي وللورش والأرضيات يناسب المناطق التشغيلية كثيفة الحركة.') },
      { title: c('Camp hygiene', 'نظافة المعسكرات'), body: c('Housekeeping, hygiene and pest-management support for living and welfare facilities.', 'دعم التدبير المنزلي والنظافة وإدارة الآفات لمرافق السكن والخدمات.') },
    ],
    services: [
      { division: 'cleaning', items: [c('Industrial & workshop cleaning', 'تنظيف المواقع الصناعية والورش'), c('Camp housekeeping', 'التدبير المنزلي للمعسكرات'), c('Water-tank cleaning', 'تنظيف خزانات المياه')] },
      { division: 'support', items: [c('Skilled & unskilled labour', 'العمالة الماهرة وغير الماهرة'), c('Catering support personnel', 'كوادر دعم التموين')] },
      { division: 'pest', items: [c('Integrated pest management', 'الإدارة المتكاملة للآفات'), c('Rodent control', 'مكافحة القوارض')] },
    ],
  },
  {
    slug: 'healthcare', icon: 'heart', accent: 'oklch(.72 .13 185)', image: '/sectors/healthcare.png',
    title: c('Healthcare', 'الرعاية الصحية'),
    tagline: c('Hygiene-focused care for clinical environments.', 'عناية تركز على النظافة الصحية للبيئات الطبية.'),
    intro: c('Clinics, hospitals and medical offices depend on consistent hygiene and calm, respectful service. QCC teams follow agreed routines for patient areas, corridors and back-of-house spaces, coordinated with each facility’s own infection-control guidance.', 'تعتمد العيادات والمستشفيات والمكاتب الطبية على نظافة صحية مستمرة وخدمة هادئة ومحترمة. تتبع فرق QCC إجراءات متفق عليها لمناطق المرضى والممرات والمساحات الخلفية، بالتنسيق مع إرشادات مكافحة العدوى الخاصة بكل منشأة.'),
    environments: [c('Hospitals & clinics', 'المستشفيات والعيادات'), c('Waiting & patient areas', 'مناطق الانتظار والمرضى'), c('Medical offices', 'المكاتب الطبية'), c('Staff & service areas', 'مناطق الموظفين والخدمات')],
    priorities: [
      { title: c('Consistent hygiene', 'نظافة صحية مستمرة'), body: c('Routine and periodic cleaning schedules aligned with facility protocols.', 'جداول تنظيف روتينية ودورية تتماشى مع بروتوكولات المنشأة.') },
      { title: c('Discreet presence', 'حضور هادئ'), body: c('Trained personnel who work respectfully around patients, visitors and clinicians.', 'كوادر مدربة تعمل باحترام حول المرضى والزوار والأطباء.') },
      { title: c('Pest prevention', 'الوقاية من الآفات'), body: c('Preventive pest management suited to sensitive, high-standard environments.', 'إدارة وقائية للآفات تناسب البيئات الحساسة عالية المعايير.') },
    ],
    services: [
      { division: 'cleaning', items: [c('Hospital & clinic cleaning', 'تنظيف المستشفيات والعيادات'), c('Hygiene services', 'خدمات النظافة الصحية'), c('Floor care', 'العناية بالأرضيات')] },
      { division: 'support', items: [c('Office support staff', 'موظفو دعم المكاتب'), c('Catering support', 'دعم التموين')] },
      { division: 'pest', items: [c('Integrated pest management', 'الإدارة المتكاملة للآفات'), c('General pest treatment', 'معالجة الآفات العامة')] },
    ],
  },
  {
    slug: 'hospitality', icon: 'hotel', accent: 'oklch(.78 .12 80)', image: '/sectors/hospitality.png',
    title: c('Hospitality', 'الضيافة'),
    tagline: c('Front-of-house polish. Back-of-house reliability.', 'لمسة راقية في الواجهة. وموثوقية خلف الكواليس.'),
    intro: c('Guests notice every detail. QCC supports hotels, residences and venues with housekeeping, public-area care and support personnel who help keep lobbies, rooms and service areas guest-ready throughout the day.', 'يلاحظ الضيوف كل التفاصيل. تدعم QCC الفنادق والمساكن وأماكن الفعاليات بخدمات التدبير المنزلي والعناية بالمناطق العامة وكوادر الدعم للحفاظ على جاهزية الردهات والغرف ومناطق الخدمة طوال اليوم.'),
    environments: [c('Hotel lobbies', 'ردهات الفنادق'), c('Guest rooms & suites', 'غرف وأجنحة الضيوف'), c('Restaurants & banquets', 'المطاعم وقاعات الولائم'), c('Pools & leisure', 'المسابح والترفيه')],
    priorities: [
      { title: c('Guest-ready spaces', 'مساحات جاهزة للضيوف'), body: c('Public-area and housekeeping routines that keep standards visible at every hour.', 'إجراءات للمناطق العامة والتدبير المنزلي تحافظ على المعايير في كل ساعة.') },
      { title: c('Specialist surfaces', 'أسطح متخصصة'), body: c('Carpet, upholstery, marble and floor care for premium interiors.', 'العناية بالسجاد والمفروشات والرخام والأرضيات للتصاميم الداخلية الفاخرة.') },
      { title: c('Flexible support', 'دعم مرن'), body: c('Support personnel for events, banquets and seasonal demand.', 'كوادر دعم للفعاليات والولائم والطلب الموسمي.') },
    ],
    services: [
      { division: 'cleaning', items: [c('Housekeeping', 'التدبير المنزلي'), c('Carpet & upholstery care', 'العناية بالسجاد والمفروشات'), c('Pool cleaning', 'تنظيف المسابح')] },
      { division: 'support', items: [c('Catering & support personnel', 'كوادر التموين والدعم'), c('Office waiters', 'عمال الضيافة')] },
      { division: 'pest', items: [c('Cockroach treatment', 'معالجة الصراصير'), c('Rodent control', 'مكافحة القوارض')] },
    ],
  },
  {
    slug: 'government', icon: 'landmark', accent: 'oklch(.7 .12 255)', image: '/sectors/government.png',
    title: c('Government', 'الجهات الحكومية'),
    tagline: c('Dependable service for public institutions.', 'خدمة موثوقة للمؤسسات العامة.'),
    intro: c('Ministries, authorities and public buildings need consistent, well-managed service delivered to clear specifications. QCC supports offices, reception halls and public-facing areas with structured routines and reliable personnel.', 'تحتاج الوزارات والهيئات والمباني العامة إلى خدمة متسقة ومدارة جيداً وفق مواصفات واضحة. تدعم QCC المكاتب وقاعات الاستقبال والمناطق التي تخدم الجمهور بإجراءات منظمة وكوادر موثوقة.'),
    environments: [c('Ministry offices', 'مكاتب الوزارات'), c('Public service halls', 'قاعات الخدمة العامة'), c('Meeting & reception areas', 'مناطق الاجتماعات والاستقبال'), c('Facility grounds', 'محيط المرافق')],
    priorities: [
      { title: c('Specification-led delivery', 'تنفيذ وفق المواصفات'), body: c('Scopes and schedules organised around agreed tender and contract requirements.', 'نطاقات وجداول منظمة وفق متطلبات المناقصة والعقد المتفق عليها.') },
      { title: c('Public-facing standards', 'معايير للمناطق العامة'), body: c('High-traffic areas kept presentable for visitors throughout the working day.', 'الحفاظ على المناطق كثيفة الحركة بمظهر لائق للزوار طوال يوم العمل.') },
      { title: c('Reliable staffing', 'كوادر موثوقة'), body: c('Office support and operational personnel for day-to-day continuity.', 'كوادر دعم مكتبي وتشغيلي لاستمرارية العمل اليومي.') },
    ],
    services: [
      { division: 'cleaning', items: [c('Office cleaning', 'تنظيف المكاتب'), c('Window & high-rise cleaning', 'تنظيف النوافذ والمباني العالية'), c('Periodic deep cleaning', 'التنظيف العميق الدوري')] },
      { division: 'support', items: [c('Office support staff', 'موظفو دعم المكاتب'), c('Office waiters', 'عمال الضيافة')] },
      { division: 'security', items: [c('Commercial environments', 'البيئات التجارية')] },
    ],
  },
  {
    slug: 'banking', icon: 'bank', accent: 'oklch(.76 .11 90)', image: '/sectors/banking.png',
    title: c('Banking', 'البنوك'),
    tagline: c('Quiet precision for financial environments.', 'دقة هادئة لبيئات القطاع المالي.'),
    intro: c('Banks and financial offices present a first impression of trust. QCC supports branches, headquarters and back offices with discreet cleaning and office support delivered around business hours and access controls.', 'تعكس البنوك والمكاتب المالية انطباعاً أولياً بالثقة. تدعم QCC الفروع والمقرات الرئيسية والمكاتب الخلفية بخدمات تنظيف هادئة ودعم مكتبي يتم تقديمه وفق ساعات العمل وضوابط الدخول.'),
    environments: [c('Branch halls', 'قاعات الفروع'), c('Headquarters', 'المقرات الرئيسية'), c('Executive floors', 'الطوابق التنفيذية'), c('Back offices', 'المكاتب الخلفية')],
    priorities: [
      { title: c('Discreet scheduling', 'جدولة هادئة'), body: c('Work planned outside peak customer hours and in line with access procedures.', 'عمل مخطط خارج ساعات ذروة العملاء ووفق إجراءات الدخول.') },
      { title: c('Premium presentation', 'مظهر راقٍ'), body: c('Glass, marble and reception care that supports a polished brand impression.', 'العناية بالزجاج والرخام ومناطق الاستقبال لدعم صورة راقية للعلامة.') },
      { title: c('Office hospitality', 'ضيافة مكتبية'), body: c('Office waiters and support staff for meetings and executive areas.', 'عمال ضيافة وموظفو دعم للاجتماعات والمناطق التنفيذية.') },
    ],
    services: [
      { division: 'cleaning', items: [c('Bank & office cleaning', 'تنظيف البنوك والمكاتب'), c('Window cleaning', 'تنظيف النوافذ'), c('Floor care', 'العناية بالأرضيات')] },
      { division: 'support', items: [c('Office waiters', 'عمال الضيافة'), c('Office support staff', 'موظفو دعم المكاتب')] },
      { division: 'pest', items: [c('General pest treatment', 'معالجة الآفات العامة')] },
    ],
  },
  {
    slug: 'education', icon: 'education', accent: 'oklch(.74 .14 150)', image: '/sectors/education.png',
    title: c('Education', 'التعليم'),
    tagline: c('Healthier spaces for learning.', 'مساحات أكثر صحة للتعلم.'),
    intro: c('Schools, universities and training centres welcome large numbers of people every day. QCC supports classrooms, libraries, halls and shared facilities with cleaning, hygiene and pest-management routines planned around the academic calendar.', 'تستقبل المدارس والجامعات ومراكز التدريب أعداداً كبيرة من الأشخاص يومياً. تدعم QCC الفصول والمكتبات والقاعات والمرافق المشتركة بإجراءات التنظيف والنظافة الصحية وإدارة الآفات وفق التقويم الأكاديمي.'),
    environments: [c('Classrooms', 'الفصول الدراسية'), c('Libraries & labs', 'المكتبات والمختبرات'), c('Halls & sports areas', 'القاعات والمرافق الرياضية'), c('Canteens & washrooms', 'المقاصف ودورات المياه')],
    priorities: [
      { title: c('Term-time routines', 'إجراءات خلال الفصل الدراسي'), body: c('Daily hygiene for high-touch areas while students and staff are on site.', 'نظافة يومية للمناطق كثيرة اللمس أثناء وجود الطلاب والموظفين.') },
      { title: c('Holiday deep cleans', 'تنظيف عميق في العطلات'), body: c('Periodic deep cleaning and floor care scheduled during breaks.', 'تنظيف عميق دوري وعناية بالأرضيات خلال العطلات.') },
      { title: c('Safe pest control', 'مكافحة آمنة للآفات'), body: c('Treatments planned carefully around occupied learning environments.', 'معالجات مخططة بعناية حول بيئات التعلم المشغولة.') },
    ],
    services: [
      { division: 'cleaning', items: [c('School cleaning', 'تنظيف المدارس'), c('Deep cleaning', 'التنظيف العميق'), c('Hygiene services', 'خدمات النظافة الصحية')] },
      { division: 'support', items: [c('Unskilled labour', 'العمالة غير الماهرة'), c('Catering support', 'دعم التموين')] },
      { division: 'pest', items: [c('Integrated pest management', 'الإدارة المتكاملة للآفات'), c('Termite treatment', 'معالجة النمل الأبيض')] },
    ],
  },
  {
    slug: 'commercial', icon: 'warehouse', accent: 'oklch(.7 .1 230)', image: '/sectors/commercial.png',
    title: c('Commercial & Industrial', 'التجارة والصناعة'),
    tagline: c('Practical service for working facilities.', 'خدمة عملية للمرافق العاملة.'),
    intro: c('Warehouses, factories, retail and mixed-use buildings each have their own rhythm. QCC adapts cleaning, labour and pest-management support to production schedules, logistics flows and customer-facing hours.', 'لكل من المستودعات والمصانع ومتاجر التجزئة والمباني متعددة الاستخدامات إيقاعه الخاص. تكيّف QCC خدمات التنظيف والعمالة وإدارة الآفات وفق جداول الإنتاج وحركة الخدمات اللوجستية وساعات خدمة العملاء.'),
    environments: [c('Warehouses', 'المستودعات'), c('Factories', 'المصانع'), c('Retail & showrooms', 'المتاجر وصالات العرض'), c('Mixed-use buildings', 'المباني متعددة الاستخدامات')],
    priorities: [
      { title: c('Operational fit', 'ملاءمة تشغيلية'), body: c('Schedules arranged around shifts, deliveries and peak trading periods.', 'جداول مرتبة حول المناوبات والتسليمات وفترات الذروة.') },
      { title: c('Industrial floor care', 'عناية بالأرضيات الصناعية'), body: c('Cleaning suited to large floor areas, racking zones and workshops.', 'تنظيف يناسب المساحات الكبيرة ومناطق الرفوف والورش.') },
      { title: c('Scalable labour', 'عمالة قابلة للتوسع'), body: c('Skilled and unskilled personnel to meet agreed operational needs.', 'كوادر ماهرة وغير ماهرة لتلبية الاحتياجات التشغيلية المتفق عليها.') },
    ],
    services: [
      { division: 'cleaning', items: [c('Factory & workshop cleaning', 'تنظيف المصانع والورش'), c('Shop cleaning', 'تنظيف المتاجر'), c('New-building cleaning', 'تنظيف المباني الجديدة')] },
      { division: 'support', items: [c('Skilled labour', 'العمالة الماهرة'), c('Unskilled labour', 'العمالة غير الماهرة')] },
      { division: 'security', items: [c('Industrial environments', 'البيئات الصناعية')] },
    ],
  },
];

export const approachSteps = [
  { title: c('Site review', 'مراجعة الموقع'), body: c('We understand the environment, access rules and service expectations.', 'نتعرف على البيئة وقواعد الدخول وتوقعات الخدمة.') },
  { title: c('Tailored scope', 'نطاق مخصص'), body: c('A scope, schedule and staffing plan shaped around your operation.', 'نطاق وجدول وخطة كوادر مصممة حول عملياتكم.') },
  { title: c('Mobilisation', 'بدء التنفيذ'), body: c('Trained personnel and suitable equipment are introduced to site.', 'يتم تقديم كوادر مدربة ومعدات مناسبة إلى الموقع.') },
  { title: c('Ongoing review', 'مراجعة مستمرة'), body: c('Regular check-ins help keep standards consistent over time.', 'تساعد المتابعة المنتظمة في الحفاظ على اتساق المعايير.') },
];

export const sectorBySlug = (slug: SectorSlug) => sectorList.find(s => s.slug === slug)!;
export const sectorPath = (slug: SectorSlug, lang: Lang) => `${lang === 'ar' ? '/ar' : ''}/industries/${slug}`;
export const sectorHead = (slug: SectorSlug, lang: Lang) => {
  const s = sectorBySlug(slug);
  const title = `${s.title[lang]} — ${lang === 'ar' ? 'القطاعات التي نخدمها' : 'Industries'} — Qatar Cleaning Company W.L.L.`;
  return { meta: [{ title }, { name: 'description', content: s.tagline[lang] + ' ' + s.intro[lang].slice(0, 110) }, { property: 'og:title', content: `${s.title[lang]} — QCC` }, { property: 'og:description', content: s.tagline[lang] }, { property: 'og:type', content: 'website' }, { property: 'og:image', content: s.image }, { name: 'twitter:card', content: 'summary_large_image' }, { name: 'robots', content: 'noindex, nofollow' }] };
};
