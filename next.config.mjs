/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: process.env.API_URL,
        apiKey: process.env.API_KEY,
        cacheTime: process.env.CACHE_TIME,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'servicosweb.cnpq.br',
            },
        ]
    },
};

export default nextConfig;
