import { Container, VStack } from "@chakra-ui/react";
import { Navbar } from "@/components/navbar/";
import { Footer } from "@/components/footer";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <Container className={styles.mainlayout}>
      <Navbar />
      <VStack as="main" className={styles.main}>
        {children}
      </VStack>
      <Footer />
    </Container>
  );
};

export default MainLayout;
