import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        cream: "#fdfbf6",
        "cream-alt": "#f6f2eb",
        brand: "#8B6A56",
        "brand-dark": "#6B4F3F",
        sage: "#8FA87A",
        "text-dark": "#1A1210",
        "text-heading": "#755846",
        "text-accent": "#C9A573",
        "text-muted": "#6B5C52",
        "icon-bg": "#E8D5C8",
        terracotta: "#D9A873",
        mauve: "#A67C93",
      },
      fontFamily: {
        serif: ["var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        subheading: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
      },
    },
  },
} satisfies Config;
