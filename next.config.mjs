/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    output: 'export',
    images: {
      loader: 'akamai',
      path: '',
    },
    basePath: '/nextjs-pages',
    assetPrefix: '/nextjs-pages',
  };
  
  export default nextConfig;