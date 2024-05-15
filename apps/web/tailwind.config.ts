import daisyui from "daisyui"
import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "heading-1": [
          "36px",
          {
            lineHeight: "40px",
            fontWeight: 600,
            letterSpacing: "-0.05em",
          },
        ],
        "heading-2": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: 600,
            letterSpacing: "-0.05em",
          },
        ],
        "heading-3": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: 600,
            letterSpacing: "-0.025em",
          },
        ],
        "heading-4": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: 600,
            letterSpacing: "-0.025em",
          },
        ],
      },
    },
  },
  plugins: [
    daisyui,
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".chat-bubble-basic": {
          backgroundColor: theme("colors.zinc.100"),
          color: theme("colors.zinc.950"),
        },
      })
    }),
  ],
  daisyui: {
    themes: ["forest"],
  },
}
export default config
