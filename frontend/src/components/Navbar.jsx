import {
  Container,
  Heading,
  VStack,
  HStack,
  Link,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useThemeColor, colorMap } from "@/assets/colors";
import "@/assets/styles/navbar.css";

const navTitles = [
  { name: "about" },
  { name: "projects" },
  { name: "contact" },
];

function Logo() {
  const logo = useThemeColor("logo");
  return (
    <Heading
      as="h1"
      bgClip="text"
      cursor="pointer"
      className="logo no-select"
      fontSize={useBreakpointValue({ base: 24, md: 28 })}
      bgGradient={logo}
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
          colorMap.font.dark,
          colorMap.font.light
        ),
        color: useColorModeValue(colorMap.font.light, colorMap.font.dark),
      }}
      _focus={{
        backgroundColor: useColorModeValue(
          colorMap.font.dark,
          colorMap.font.light
        ),
        color: useColorModeValue(colorMap.font.light, colorMap.font.dark),
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
      gap={6}
    >
      {navTitles.map((link, idx) => (
        <NavigationLink key={idx} linkName={link.name.toLowerCase()} />
      ))}
    </HStack>
  );
}

function NavbarDrawer({ isOpen, onClose }) {
  const bg = useThemeColor("bg");
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen} bg={bg}>
      <DrawerOverlay />
      <DrawerContent
        bg={"rgba(255, 255, 255, 0.08)"}
        backdropFilter="blur(30px)"
      >
        <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
        <DrawerBody>
          <VStack spacing={4} py={4}>
            {navTitles.map((link, index) => (
              <NavigationLink
                key={index}
                linkName={link.name.toLowerCase()}
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
  // const bg = useThemeColor("bg");

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
    <Container className="navbar" maxW="container.xxl">
      <Container maxW="container.lg" py={4}>
        <HStack justifyContent="space-between" flexDirection="row">
          <Logo />
          <HStack gap={6}>
            <Navigations />
            <NavButtons />
          </HStack>
        </HStack>
      </Container>
      <NavbarDrawer isOpen={isOpen} onClose={onClose} />
    </Container>
  );
}
