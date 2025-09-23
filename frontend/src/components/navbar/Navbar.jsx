import { useEffect, useState } from "react";
import {
  Container,
  VStack,
  HStack,
  IconButton,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import styles from "./Navbar.module.css";

const links = ["about", "projects", "contact"];

function NavLogo() {
  return (
    <Link
      className={`${styles.logo} no-select`}
      fontSize={useBreakpointValue({ base: 24, md: 28 })}
      href="/"
    >
      dominic
    </Link>
  );
}

function NavLink({ isActive, linkName }) {
  return (
    <Link
      className={`${styles.navlink} no-select ${isActive ? styles.active : ""}`}
      href={`#${linkName.toLowerCase()}`}
      fontSize={{ base: 16, lg: 18 }}
    >
      {linkName}
    </Link>
  );
}

function NavLinks() {
  const [active, setActive] = useState(links[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = entries.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current
        );

        if (mostVisible.isIntersecting) {
          setActive(mostVisible.target.id);
        }
      },
      { threshold: 0.5 }
    );

    links.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <HStack
      display={{ base: "none", md: "flex" }}
      className={styles.navlinks_container}
    >
      {links.map((link, idx) => (
        <NavLink key={idx} isActive={active === link} linkName={link} />
      ))}
    </HStack>
  );
}

function NavButtons({ colorMode, onToggleColorMode, onOpenDrawer }) {
  return (
    <HStack>
      <IconButton
        onClick={onToggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        aria-label={
          colorMode === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      />
      <IconButton
        display={{ base: "flex", md: "none" }}
        icon={<HamburgerIcon />}
        onClick={onOpenDrawer}
        aria-label="Open menu"
        variant="ghost"
      />
    </HStack>
  );
}

function NavbarDrawer({ isOpen, onClose }) {
  return (
    <Drawer
      placement="right"
      onClose={onClose}
      isOpen={isOpen}
      className={styles.navbar_drawer}
    >
      <DrawerOverlay />
      <DrawerContent
        bg={"rgba(255, 255, 255, 0.08)"}
        backdropFilter="blur(30px)"
      >
        <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
        <DrawerBody>
          <VStack spacing={4} py={4}>
            {links.map((link, idx) => (
              <NavLink
                key={idx}
                linkName={link.toLowerCase()}
                onClick={onClose}
              />
            ))}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default function Navbar() {
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
            <NavLinks />
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
}
