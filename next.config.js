/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: '*' }],
    },
    transpilePackages: ['lucide-react']
}

module.exports = nextConfig
