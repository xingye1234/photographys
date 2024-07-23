/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@douyinfe/semi-ui', '@douyinfe/semi-icons', '@douyinfe/semi-illustrations'],
    reactStrictMode: false,
    output: 'standalone',
};

export default nextConfig;
