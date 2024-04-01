/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.flixcart.com',
              port: '',
              pathname: '/*/**',
            },
          ],
    },
    env: {
      MONGO_URI: "mongodb+srv://ProgrammerD:deepak8339@cluster0.tnmxvha.mongodb.net/programmerdData?retryWrites=true&w=majority"
    }
}

module.exports = nextConfig
