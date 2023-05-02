/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { 
      'custom-tl': '10px 20px', // top-left corner
      'custom-tr': '20px 30px', // top-right corner
      'custom-br': '30px 40px', // bottom-right corner
      'custom-bl': '50px 60px',
    },

    screens: {
      ssm: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    colors: {
      primary: {
        white: "#ffffff",
        black: "#000000",
        yellow: "#FFDE59",
      },
      secondary: {
        normal: "#1E3A8A",
        light1: "#E0F2FE",
        light2: "#E0F2FE",
        light3: "#93C5FD",
        light4: "#60A5FA",
        dark1: "#3B82F6",
        dark2: "#3B82F6",
        dark3: "#1D4ED8",
        dark4: "#1E40AF",
      },
      gray: {
        normal: "#0F172A",
        light1: "#F1F5F9",
        light2: "#E2E8F0",
        light3: "#CBD5E1",
        light4: "#94A3B8",
        dark1: "#64748B",
        dark2: "#475569",
        dark3: "#334155",
        dark4: "#1E293B",
      },
      warning: {
        normal: "#7C2D12",
        light1: "#FFEDD5",
        light2: "#FED7AA",
        light3: "#FDBA74",
        light4: "#FDBA74",
        dark1: "#F97316",
        dark2: "#EA580C",
        dark3: "#C2410C",
        dark4: "#9A3412",
      },
      success: {
        normal: "#365314",
        light1: "#ECFCCB",
        light2: "#D9F99D",
        light3: "#D9F99D",
        light4: "#A3E635",
        dark1: "#84CC16",
        dark2: "#65A30D",
        dark3: "#4D7C0F",
        dark4: "#3F6212",
      },
      black: "#000000",
      white: "#ffffff",
    },
  },
  plugins: [],
};
