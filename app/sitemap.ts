import type { MetadataRoute } from 'next';
import { publicRoutes, siteConfig } from '../lib/site-config';
export const dynamic = 'force-static';
export default function sitemap():MetadataRoute.Sitemap{ return publicRoutes.map(route=>({url:`${siteConfig.siteUrl}${route}`,lastModified:new Date(),changeFrequency:route==='/'||route==='/en'?'weekly':'monthly',priority:route==='/'||route==='/en'?1:.7})); }
