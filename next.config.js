/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    if (process.env.NODE_ENV === "production") {
      return [
        {
          source: "/api/:path*",
          destination: `${process.env.NEXT_PUBLIC_REACT_APP_SERVER_API}/:path*`,
        },
      ];
    } else {
      return [];
    }
  },
};

module.exports = nextConfig;
