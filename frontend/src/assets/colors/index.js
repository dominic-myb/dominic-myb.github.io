import { useColorMode } from "@chakra-ui/react";

const colorMap = {
  logo: {
    light: "linear-gradient(to-r, #ff4f64, #6936c2)",
    dark: "linear-gradient(to-r, #00b09b, #96c93d)",
  },
  font: { light: "gray.100", dark: "gray.800" },
  titleFont: { light: "gray.800", dark: "whiteAlpha.900" },
  bodyFont: { light: "gray.700", dark: "gray.300" },
  smallFont: { light: "gray.500", dark: "gray.400" },
  bg: { light: "rgba(242, 243, 245, 1)", dark: "rgba(14, 16, 20, 1)" },
  cardBg: { light: "rgba(0, 0, 0, 0.05)", dark: "rgba(255, 255, 255, 0.05)" },
  cardBd: { light: "rgba(0, 0, 0, 0.125)", dark: "rgba(255, 255, 255, 0.125)" },
  btnBg: { light: "rgba(0, 0, 0, 0.125)", dark: "rgba(255, 255, 255, 0.125)" },
  line: {
    light: "linear-gradient(to-b, #ff4f64, #6936c2)",
    dark: "linear-gradient(to-b, #00b09b, #96c93d)",
  },
};

function useThemeColors() {
  const { colorMode } = useColorMode();
  const res = {};

  for (const key in colorMap) {
    res[key] = colorMap[key][colorMode];
  }
  return res;
}

function useThemeColor(keys) {
  const { colorMode } = useColorMode();

  if (Array.isArray(keys)) {
    return keys.map((key) => colorMap[key][colorMode]);
  }

  return colorMap[keys][colorMode];
}

export { colorMap, useThemeColors, useThemeColor };
