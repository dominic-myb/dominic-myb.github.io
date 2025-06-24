import { Container, VStack, useColorModeValue } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { colorMap } from "@/assets/color";

function Home() {
  return (
    <Container
      maxW="container.xxl"
      minW="container.sm"
      h="container.xxl"
      bg={useColorModeValue(
        colorMap.light.background,
        colorMap.dark.background
      )}
    >
      <Navbar />
      <VStack gap={4}>
        <About />
        {/* <Projects /> */}
        <Contact />
      </VStack>
    </Container>
  );
}

export default Home;
