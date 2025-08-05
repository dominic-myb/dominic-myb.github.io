import { Container, VStack } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import MainFooter from "@/components/MainFooter";
import { useThemeColor } from "@/assets/colors";

export default function MainLayout({ children }) {
  const bg = useThemeColor("bg");
  return (
    <Container maxW="container.xxl" bg={bg}>
      <Navbar />
      <VStack as="main" gap={4}>
        {children}
      </VStack>
      <MainFooter />
    </Container>
  );
}
