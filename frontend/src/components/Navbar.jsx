import {
  Container,
  Heading,
  HStack,
  Link,
  Button,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import { colorMap } from "@/assets/color";
import NavbarDrawer from "./NavbarDrawer";
import "./index.css";

function Logo() {
  return (
    <Heading
      as="h1"
      className="logo no-select"
      fontSize="28"
      cursor="pointer"
      bgGradient={useColorModeValue(colorMap.light.logo, colorMap.dark.logo)}
      bgClip="text"
    >
      dominic-esguerra
    </Heading>
  );
}

function NavigationLink({ linkName }) {
  return (
    <Link
      className="nav-link no-select"
      href={`#${linkName.toLowerCase()}`}
      fontSize={{ base: 16, lg: 18 }}
      _hover={{
        backgroundColor: useColorModeValue(
          colorMap.dark.font,
          colorMap.light.font
        ),
        color: useColorModeValue(colorMap.light.font, colorMap.dark.font),
      }}
      _focus={{
        backgroundColor: useColorModeValue(
          colorMap.dark.font,
          colorMap.light.font
        ),
        color: useColorModeValue(colorMap.light.font, colorMap.dark.font),
      }}
    >
      {linkName}
    </Link>
  );
}

function Navigations() {
  return (
    <HStack
      display={{ base: "none", md: "flex" }}
      justifyContent="flex-end"
      gap="6"
    >
      {[{ name: "about" }, { name: "projects" }, { name: "contact" }].map(
        (link, idx) => (
          <NavigationLink key={idx} linkName={link.name.toLowerCase()} />
        )
      )}
    </HStack>
  );
}

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function NavButtons() {
    return (
      <HStack>
        <Button onClick={toggleColorMode}>
          {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<HamburgerIcon />}
          onClick={onOpen}
          aria-label="Open menu"
          variant="ghost"
        />
      </HStack>
    );
  }

  return (
    <Container
      className="navbar"
      maxW="container.xxl"
      bg={useColorModeValue(
        colorMap.light.background,
        colorMap.dark.background
      )}
    >
      <Container maxW="container.lg" py="4">
        <HStack justifyContent="space-between">
          <Logo />
          <HStack gap="6">
            <Navigations />
            <NavButtons />
          </HStack>
        </HStack>
      </Container>
      <NavbarDrawer isOpen={isOpen} onClose={onClose} />
    </Container>
  );
}

export { Navbar, NavigationLink };
