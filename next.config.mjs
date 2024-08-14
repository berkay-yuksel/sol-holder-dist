/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
      
          {
            protocol: 'https',
            hostname: 'media.cdn.magiceden.dev',
            port: '',
           
          },
       
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },

};

export default nextConfig;
