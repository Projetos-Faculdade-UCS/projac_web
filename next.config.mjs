/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: process.env.API_URL,
        apiKey: process.env.API_KEY,
        withCache: process.env.WITH_CACHE,
    },
    images: {
        domains: ['servicosweb.cnpq.br'],
    }
};

export default nextConfig;
