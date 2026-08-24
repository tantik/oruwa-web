import Image from 'next/image';

export function BrandMark({ className = '' }: { className?: string }) {
  return <span className={`brand-mark ${className}`.trim()} aria-hidden="true"><Image src="/oruwa-mark.svg" alt="" width={50} height={45}/></span>;
}
