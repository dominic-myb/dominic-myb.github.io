import {
  Container,
  HStack,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import NavLogo from "./NavLogo";
import NavLinksContainer from "./NavLinksContainer";
import NavbarDrawer from "./NavbarDrawer";
import NavButtons from "./NavButtons";

import { useThemeColor } from "@/assets/colors";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container
      className={styles.navbar}
      maxW="container.xxl"
      bg={useThemeColor("bg")}
    >
      <Container maxW="container.lg" py={4}>
        <HStack className={styles.navbar_wrapper}>
          <NavLogo />
          <HStack gap={6}>
            <NavLinksContainer />
            <NavButtons
              colorMode={colorMode}
              onToggleColorMode={toggleColorMode}
              onOpenDrawer={onOpen}
            />
          </HStack>
        </HStack>
      </Container>
      <NavbarDrawer isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default Navbar;
