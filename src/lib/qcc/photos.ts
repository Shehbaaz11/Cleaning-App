import { c, type PageKey } from './content';

export const servicePhotos:Partial<Record<PageKey,string>>={
  cleaning: '/qcc-pest_2.jpg',
  support: '/qcc-support_boys.jpg',
  pest: '/qcc-pest_1.jpg',
  security: '/qcc-security_1.jpg'
};

export const photos=[
  {image: '/floorcare.mp4', title: c('Floor care in working environments','العناية بالأرضيات في بيئات العمل'), category: 'operations' as const},
  {image: '/housekeeping.mp4', title: c('QCC housekeeping operations','عمليات التدبير المنزلي لدى QCC'), category: 'operations' as const},
  {image: '/qcc-support_boys.jpg', title: c('Office support personnel','كوادر دعم المكاتب'), category: 'people' as const},
  {image: '/qcc-pest_1.jpg', title: c('Outdoor pest-control operations','عمليات مكافحة الآفات الخارجية'), category: 'pest' as const},
  {image: '/qcc-pest_1.jpg', title: c('Pest-control field work','العمل الميداني لمكافحة الآفات'), category: 'pest' as const},
  {image: '/qcc-security_1.jpg', title: c('Security service archive','أرشيف خدمات الأمن'), category: 'people' as const},
  {image: '/qcc-security_1.jpg', title: c('Personnel from the company archive','كوادر من أرشيف الشركة'), category: 'people' as const}
];
