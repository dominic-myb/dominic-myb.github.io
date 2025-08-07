import { VStack, Text } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";

export default function MainFooter() {
  const [bg, bodyFont, smallFont] = useThemeColor(["bg", "bodyFont", "smallFont"]);
  return (
    <VStack as="footer" bg={bg} py={4} textAlign="center">
      <Text fontSize="sm" color={bodyFont}>
        © 2024 - {new Date().getFullYear()} Dominic Esguerra. All rights
        reserved.
      </Text>
      <Text fontSize="sm" color={smallFont}>
        Made with React + ChakraUI
      </Text>
    </VStack>
  );
}
