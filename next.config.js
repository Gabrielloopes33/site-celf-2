/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      // Add your image domains here, for example:
      'images.unsplash.com',
      'your-cms-domain.com'
    ],
    unoptimized: process.env.NODE_ENV === 'development'
  }
}

module.exports = nextConfig