/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Root → English homepage
      { source: "/", destination: "/en" },
      // All top-level pages → /en/*
      { source: "/about", destination: "/en/about" },
      { source: "/pricing", destination: "/en/pricing" },
      { source: "/ai-chatbot", destination: "/en/ai-chatbot" },
      { source: "/ai-voice-assistant", destination: "/en/ai-voice-assistant" },
      { source: "/ai-consulting", destination: "/en/ai-consulting" },
      { source: "/ai-appointment-setter", destination: "/en/ai-appointment-setter" },
      { source: "/missed-call-text-back", destination: "/en/missed-call-text-back" },
      { source: "/database-reactivation", destination: "/en/database-reactivation" },
      { source: "/reputation-management", destination: "/en/reputation-management" },
      { source: "/website-design", destination: "/en/website-design" },
      { source: "/blog", destination: "/en/blog" },
      { source: "/blog/:slug", destination: "/en/blog/:slug" },
      { source: "/free-assessment", destination: "/en/free-assessment" },
      { source: "/terms", destination: "/en/terms" },
      { source: "/privacy-policy", destination: "/en/privacy-policy" },
      { source: "/disclaimer", destination: "/en/disclaimer" },
      // Industry pages
      { source: "/industries/:slug", destination: "/en/industries/:slug" },
      // Sub-industry pages
      { source: "/industries/:slug/:subSlug", destination: "/en/industries/:slug/:subSlug" },
      // Comparison pages
      { source: "/compare/:slug", destination: "/en/compare/:slug" },
      // Tools pages
      { source: "/tools/:slug", destination: "/en/tools/:slug" },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
