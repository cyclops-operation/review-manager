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
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".chat-bubble-basic": {
          backgroundColor: theme("colors.zinc.100"),
          color: theme("colors.zinc.950"),
        },
      })
    }),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#047857",
          "primary-content": "#d2e3db",
          secondary: "#15803d",
          "secondary-content": "#d4e5d6",
          accent: "#4d7c0f",
          "accent-content": "#d9e4d1",
          neutral: "#0f766e",
          "neutral-content": "#d3e3e0",
          "base-100": "#18181B",
          "base-200": "#27272A",
          "base-300": "#3F3F46",
          "base-content": "#cbcbcc",
          info: "#06B6D4",
          "info-content": "#000c10",
          success: "#4ADE80",
          "success-content": "#021206",
          warning: "#EAB308",
          "warning-content": "#130c00",
          error: "#F87171",
          "error-content": "#150404",
        },
      },
    ],
  },
}
export default config
