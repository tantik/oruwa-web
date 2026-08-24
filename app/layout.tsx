import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import './sections.css';
import './packages.css';
import './sales.css';
import './brand.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });
export const metadata: Metadata = { metadataBase: new URL('https://oruwa.jp'), title: 'ORUWA | 日々の運営を、ひとつの流れに。', description: '散らばる情報と毎日の確認を減らし、会社、店舗、現場、管理を一つの流れに。日本の小規模事業者向け業務運営プラットフォーム。', alternates:{canonical:'/',languages:{'ja-JP':'/','en':'/en','x-default':'/'}},openGraph:{title:'ORUWA | 日々の運営を、ひとつの流れに。',description:'日本の小規模事業者向け業務運営プラットフォーム。',url:'/',siteName:'ORUWA',locale:'ja_JP',type:'website',images:[{url:'/og.png',width:1200,height:630,alt:'ORUWA Business Operations Platform'}]},twitter:{card:'summary_large_image',images:['/og.png']} };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ja"><body className={geist.variable}>{children}</body></html>; }
