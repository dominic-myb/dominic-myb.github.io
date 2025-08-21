import { Container, VStack } from "@chakra-ui/react";
import { Navbar } from "@/components/navbar/";
import MainFooter from "@/components/MainFooter";
import { useThemeColor } from "@/assets/colors";

const MainLayout = ({ children }) => {
  return (
    <Container maxW="container.xxl" bg={useThemeColor("bg")}>
      <Navbar />
      <VStack as="main" gap={4}>
        {children}
      </VStack>
      <MainFooter />
    </Container>
  );
};

export default MainLayout;
