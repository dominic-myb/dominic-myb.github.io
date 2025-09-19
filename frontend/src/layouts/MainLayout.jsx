import { Container, VStack } from "@chakra-ui/react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import styles from "./MainLayout.module.css";

export default function MainLayout({ children }) {
  return (
    <Container className={styles.mainlayout}>
      <Navbar />
      <VStack as="main" className={styles.main}>
        {children}
      </VStack>
      <Footer />
    </Container>
  );
}
