/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    SITE_KEY: process.env.SITE_KEY
  },
  async rewrites() {
    return [
        {
            source: '/robots.txt',
            destination: '/api/route'
        }
    ];
  }
}
module.exports = nextConfig
