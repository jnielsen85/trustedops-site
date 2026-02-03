import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "rgb(var(--to-navy) / <alpha-value>)",
          teal: "rgb(var(--to-teal) / <alpha-value>)",
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)"
      }
    },
  },
  plugins: [typography],
} satisfies Config;
