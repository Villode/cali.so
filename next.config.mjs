/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 * 
 *       {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: `/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/**`,
      },

 */
!process.env.SKIP_ENV_VALIDATION && (await import('./env.mjs'))

@type {import('next').NextConfig} 
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'img.villode.us.kg',
  //       port: '',
  //       pathname: '/**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'img02.anheyu.com',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // },

  experimental: {
    taint: true,
  },

  eslint: {
    ignoreDuringBuilds: true,  // 可以禁用构建时的 ESLint 检查
  },

  redirects() {
    return [
      {
        source: '/twitter',
        destination: 'https://x.com/thecalicastle',
        permanent: true,
      },
      {
        source: '/x',
        destination: 'https://x.com/thecalicastle',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://youtube.com/@calicastle',
        permanent: true,
      },
      {
        source: '/tg',
        destination: 'https://t.me/cali_so',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/calicastle/',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/CaliCastle',
        permanent: true,
      },
      {
        source: '/bilibili',
        destination: 'https://space.bilibili.com/8350251',
        permanent: true,
      },
    ]
  },

  rewrites() {
    return [
      {
        source: '/feed',
        destination: '/feed.xml',
      },
      {
        source: '/rss',
        destination: '/feed.xml',
      },
      {
        source: '/rss.xml',
        destination: '/feed.xml',
      },
    ]
  },
}

export default nextConfig
