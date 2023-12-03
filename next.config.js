/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sign-up",
        destination: "/auth/sign-up",
      },
      {
        source: "/sign-in",
        destination: "/auth/sign-in",
      },
    ];
  },
};

module.exports = nextConfig;
