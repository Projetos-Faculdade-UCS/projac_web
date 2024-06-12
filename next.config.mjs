/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: process.env.API_URL,
        apiKey: process.env.API_KEY,
    },
    images: {
        domains: ['servicosweb.cnpq.br'],
    }
};

export default nextConfig;
