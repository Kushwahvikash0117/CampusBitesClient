export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tomato: "#FF6347",
      },
      borderRadius: {
        card: "18px",
        soft: "10px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.06)",
        hover: "0 8px 30px rgba(0,0,0,0.12)",
      },
    },
  },
};
