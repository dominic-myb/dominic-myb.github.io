const colorMap = {
  light: {
    logo: "linear-gradient(to-r, #ff4f64, #6936c2)",
    font: "gray.100",
    background: "rgb(242, 243, 245, 1)",
    cardBg: "rgba(0, 0, 0, 0.05)",
    cardBorder: "rgba(0, 0, 0, 0.125)",
    buttonBg: "rgba(0, 0, 0, 0.125)",
    line: "linear-gradient(to-b, #ff4f64, #6936c2)",
  },
  dark: {
    logo: "linear(to-r, #00b09b, #96c93d)",
    font: "gray.800",
    background: "rgba(14, 16, 20, 1)",
    cardBg: "rgba(255, 255, 255, 0.05)",
    cardBorder: "rgba(255, 255, 255, 0.125)",
    buttonBg: "rgba(255, 255, 255, 0.125)",
    line: "linear(to-b, #00b09b, #96c93d)",
  },
};

// [1] Namecard
// [2] Techstack
// [3] Background
const aboutGridSize = [
  { rowSpan: { base: 1, md: 2, lg: 2 }, colSpan: { base: 1, md: 2, lg: 3 } },
  { rowSpan: { base: 1, md: 2, lg: 2 }, colSpan: { base: 1, md: 2, lg: 2 } },
  { rowSpan: { base: 3, md: 5, lg: 5 }, colSpan: { base: 1, md: 4, lg: 5 } },
];

export { colorMap, aboutGridSize };
