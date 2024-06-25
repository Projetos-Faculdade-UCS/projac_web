/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: process.env.API_URL,
        apiKey: process.env.API_KEY,
        apiKeyHeader: process.env.API_KEY_HEADER,
        apiKeyPrefix: process.env.API_KEY_PREFIX,
        useCache: process.env.USE_CACHE,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'servicosweb.cnpq.br',
            },
            {
                protocol: 'http',
                hostname: 'servicosweb.cnpq.br',
            },
        ]
    },
};

export default nextConfig;
