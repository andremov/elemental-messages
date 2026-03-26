import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF6F1",
          tinted: "#F2EBE1",
        },
        sand: "#E0D5C5",
        walnut: "#3D2F2A",
        "warm-gray": "#7A6B63",
        terracotta: "#C07252",
        olive: "#6B7F5E",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
