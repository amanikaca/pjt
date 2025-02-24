// app/manifest.ts
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gecian Hub',
    short_name: 'Gecian',
    description: 'An app for GEC Palakkad students',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    // icons: [
    //   {
    //     src: '@/public/icons/INVENTO.jpg',
    //     sizes: '192x192',
    //     type: 'image/jpeg',
    //   },
    //   {
    //     src: '@/public/icons/INVENTO.jpg',
    //     sizes: '512x512',
    //     type: 'image/jpeg',
    //   },
    // ],
  };
}
