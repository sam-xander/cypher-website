/** @type {import('next').NextConfig} */


const securityHeaders = [
  
]

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  reactStrictMode: true,
}
