import { BrandMark } from './BrandMark';

const concepts = [
  ['01', 'Cafe', 'First'],
  ['02', 'Salon Booking', 'Concept'],
  ['03', 'Cleaning', 'Concept'],
  ['04', 'Construction', 'Concept'],
  ['05', 'Procurement', 'Concept'],
];

export function PlatformVisual({ locale = 'ja' }: { locale?: 'ja' | 'en' }) {
  return <div className="platform-visual" aria-label={locale === 'ja' ? 'ORUWAプラットフォームとパッケージの構成イメージ' : 'ORUWA platform and package architecture illustration'}>
    <div className="platform-core"><BrandMark className="core-mark"/><div><small>Business Operations Platform</small><strong>ORUWA</strong><p>{locale === 'ja' ? '会社・店舗・役割をつなぐ共通基盤' : 'A shared foundation for companies, locations and roles'}</p></div></div>
    <div className="platform-rail" aria-hidden="true" />
    <div className="visual-package-grid">{concepts.map(([number,name,status]) => <div className={`visual-package ${status === 'First' ? 'available' : ''}`} key={name}><span>{number}</span><div><strong>ORUWA {name}</strong><small>{status === 'First' ? (locale === 'ja' ? '第一パッケージ' : 'First package') : (locale === 'ja' ? '構想中' : 'Concept')}</small></div></div>)}</div>
    <p className="visual-note">{locale === 'ja' ? '共通基盤に、業種ごとのパッケージを追加' : 'Add industry packages to one shared foundation'}</p>
  </div>;
}
