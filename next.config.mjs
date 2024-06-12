/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: process.env.API_URL,
        apiKey: process.env.API_KEY,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'servicosweb.cnpq.br',
            },
        ]
    },
    experimental : {
        outputFileTracingIncludes: {
            '/': ['./cache/*'],
        }
    }
};

export default nextConfig;
