import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function manifest():MetadataRoute.Manifest{return {name:'ORUWA Business Operations Platform',short_name:'ORUWA',description:'Business operations platform for small businesses in Japan.',start_url:'/',display:'standalone',background_color:'#f7f3ea',theme_color:'#176b55',icons:[{src:'/favicon.svg',sizes:'any',type:'image/svg+xml'}]};}
