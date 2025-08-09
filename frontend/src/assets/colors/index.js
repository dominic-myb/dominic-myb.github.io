import { useColorMode } from "@chakra-ui/react";

const colorMap = {
  logo: {
    light: "linear-gradient(to-r, #00b09b, #96c93d)",
    dark: "linear-gradient(to-r, #00b09b, #96c93d)",
  },
  invertColor: { light: "hsl(0, 0%, 95%)", dark: "hsl(0, 0%, 5%)" },
  titleFont: { light: "hsl(246, 76%, 5%)", dark: "hsl(246, 76%, 95%)" },
  bodyFont: { light: "hsl(0, 0%, 20%)", dark: "hsl(0, 0%, 80%)" },
  smallFont: { light: "hsl(0, 0%, 40%)", dark: "hsl(0, 0%, 60%)" },
  bg: { light: "hsl(240, 100%, 100%)", dark: "	hsl(240, 60%, 1%)" },
  cardBg: { light: "hsl(240, 16%, 94%)", dark: "hsla(0, 0%, 90%, 0.05)" },
  cardBd: {
    light: "hsla(0, 0%, 10%, 0.125)",
    dark: "hsla(0, 0%, 90%, 0.125)",
  },
  btnBg: { light: "hsla(0, 0%, 10%, 0.125)", dark: "hsla(0, 0%, 80%, 0.125)" },
  primary: { light: "hsl(243, 68%, 48%)", dark: "hsl(243, 68%, 52%)" },
  secondary: { light: "hsl(243, 100%, 93%)", dark: "hsl(243, 100%, 7%)" },
  accent: {
    light: "hsl(242, 100%, 62%)",
    dark: "hsl(242, 100%, 38%)",
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

function useThemeConstantColor(keys, mode = "light") {
  if (Array.isArray(keys)) {
    return keys.map((key) => colorMap[key][mode]);
  }
  return colorMap[keys][mode];
}

export { colorMap, useThemeColors, useThemeColor, useThemeConstantColor };
