import { Container, VStack } from "@chakra-ui/react";
import { Navbar } from "@/components/navbar/";
import { Footer } from "@/components/footer";
import { useThemeColor } from "@/assets/colors";

const MainLayout = ({ children }) => {
  return (
    <Container maxW="container.xxl" bg={useThemeColor("bg")}>
      <Navbar />
      <VStack as="main" gap={4}>
        {children}
      </VStack>
      <Footer />
    </Container>
  );
};

export default MainLayout;
