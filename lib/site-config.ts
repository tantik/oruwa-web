export const siteConfig = {
  siteUrl: 'https://oruwa.jp',
  developerUrl: 'https://izumiit.com/',
  demoUrl: '/cafe#demo',
  consultationUrl: '/contact',
  accountUrl: '',
  appUrl: '',
  statusUrl: '',
  supportUrl: '',
  pricingStatus: 'inquiry' as 'inquiry' | 'public',
  publicPrice: '',
};

export const productPackages = [
  { slug: 'cafe', status: 'development' as const, name: 'ORUWA Cafe', audienceJa: 'カフェ・小規模飲食店', audienceEn: 'Cafés and small restaurants', summaryJa: 'シフト、勤怠、在庫、レシピを一つの運営フローに。', summaryEn: 'Schedules, attendance, inventory and recipes in one operational flow.' },
] as const;

export const packageConcepts = [
  { slug: 'salon-booking', name: 'ORUWA Salon Booking', labelJa: 'サロン向け予約受付', labelEn: 'Salon booking', summaryJa: '予約受付、スタッフ、日時、確認を一つの流れに。', summaryEn: 'Bookings, staff, availability and confirmations in one flow.' },
  { slug: 'cleaning', name: 'ORUWA Cleaning', labelJa: '清掃会社', labelEn: 'Cleaning companies', summaryJa: '現場、担当者、作業報告、確認を整理。', summaryEn: 'Organize sites, assignments, work reports and follow-ups.' },
  { slug: 'construction', name: 'ORUWA Construction', labelJa: '建設会社の現場運営', labelEn: 'Construction site operations', summaryJa: '現場、担当者、進捗、日報を整理するパッケージ構想。', summaryEn: 'A package concept for sites, assignments, progress and daily reports.' },
  { slug: 'procurement', name: 'ORUWA Procurement', labelJa: '商品・資材の購買', labelEn: 'Goods procurement', summaryJa: '依頼、承認、発注、受領の流れを整理。', summaryEn: 'Connect requests, approvals, orders and receiving.' },
] as const;

export const publicRoutes = ['/', '/en', '/products', '/en/products'] as const;
