/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiUrl: process.env.API_URL,
        apiKey: process.env.API_KEY,
    }
};

export default nextConfig;
