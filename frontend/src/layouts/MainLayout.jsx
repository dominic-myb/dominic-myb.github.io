import { Container, VStack, useColorModeValue } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import MainFooter from "@/components/MainFooter";
import { colorMap } from "@/assets/data/constants";

export default function MainLayout({ children }) {
  return (
    <Container
      maxW="container.xxl"
      bg={useColorModeValue(
        colorMap.light.background,
        colorMap.dark.background
      )}
    >
      <Navbar />
      <VStack as="main" gap={4}>
        {children}
      </VStack>
      <MainFooter />
    </Container>
  );
}