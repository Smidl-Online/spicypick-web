import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(nextConfig, {
  org: 'smidl-online',
  project: 'spicypick-web',
  // Upload source maps during CI builds only (requires SENTRY_AUTH_TOKEN)
  silent: !process.env.CI,
  // Only upload source maps in production CI
  sourcemaps: {
    disable: process.env.NODE_ENV !== 'production',
  },
  // Disable Sentry telemetry
  telemetry: false,
});
