export default function manifest() {
  return {
    name: "GDPR Lime PWA",
    short_name: "GDPR Lime PWA",
    description: "A Progressive Web App built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/next.svg",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/next.svg",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
