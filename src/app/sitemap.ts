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
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${url}/rag/llama`,
            lastModified: new Date(),
            changeFrequency: 'weekly',

        },
        {
            url: `${url}/rag/titan`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
        }

    ]
}