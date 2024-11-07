import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                // userAgent: 'Googlebot',
                userAgent: '*',
                allow: ['/', '/rag', '/rag/llama', '/rag/titan'],

                // completely exclude if want to sub exclude it then check some demo
                disallow: '/private/',
                // can be disallow: ['/admin','/privacy']
            },
            // {
            //     userAgent: ['Applebost', 'Bingbot'],
            //     disallow: ['/'],
            // },
        ],
        sitemap: 'https://100xnavi.com/sitemap.xml',
    }
}