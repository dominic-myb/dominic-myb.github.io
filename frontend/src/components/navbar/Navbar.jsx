import { useEffect } from "react";
import {
  Container,
  HStack,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import NavLogo from "./NavLogo";
import NavLinksContainer from "./NavLinksContainer";
import NavButtons from "./NavButtons";
import NavbarDrawer from "./NavbarDrawer";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", colorMode);
  }, [colorMode]);

  return (
    <Container as="nav" className={styles.navbar}>
      <Container className={styles.navbar_wrapper}>
        <HStack className={styles.navbar_stack}>
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
