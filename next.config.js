const { Value } = require('@radix-ui/themes/components/data-list')

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers () {
            return [
                {
                    source:"/:path*",
                    headers:[
                        {key: 'referrer-policy', value: 'no-referrer'}
                    ]
                }
            ]
    }
}

module.exports = nextConfig
