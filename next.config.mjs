/** @type {import('next').NextConfig} */

const isProductionEnv = process.env.NODE_ENV = 'production';
const nextConfig = { 
     basePath: isProductionEnv ? '/teste_build_nextjs' : '',
    distDir: 'dist',
};

export default nextConfig;
