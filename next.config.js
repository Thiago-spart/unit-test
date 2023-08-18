/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.cozey.ca',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
