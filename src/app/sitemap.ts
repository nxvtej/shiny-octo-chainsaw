import { MetadataRoute } from 'next'

const url = 'https://100xnavi.com';
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: url,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${url}/rag`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },

    ]
}