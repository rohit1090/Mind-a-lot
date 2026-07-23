import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        cream: "#fdf5f1",
        brand: "#8B6A56",
        "brand-dark": "#6B4F3F",
        sage: "#8FA87A",
        "text-dark": "#1A1210",
        "text-muted": "#6B5C52",
        "icon-bg": "#E8D5C8",
      },
      fontFamily: {
        serif: ["var(--font-spectral)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
      },
    },
  },
} satisfies Config;
