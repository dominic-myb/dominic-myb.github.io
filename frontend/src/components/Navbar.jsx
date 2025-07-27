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
  useColorModeValue,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import { colorMap } from "@/assets/data/constants.js";
import "@/assets/styles/navbar.css";

const navTitles = [
  { name: "about" },
  { name: "projects" },
  { name: "contact" },
];

function Logo() {
  return (
    <Heading
      as="h1"
      bgClip="text"
      cursor="pointer"
      className="logo no-select"
      fontSize={useBreakpointValue({ base: 24, md: 28 })}
      bgGradient={useColorModeValue(colorMap.light.logo, colorMap.dark.logo)}
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
      gap={6}
    >
      {navTitles.map((link, idx) => (
        <NavigationLink key={idx} linkName={link.name.toLowerCase()} />
      ))}
    </HStack>
  );
}

function NavbarDrawer({ isOpen, onClose }) {
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
        <DrawerBody>
          <VStack spacing={4} py={4}>
            {navTitles.map(
              (link, index) => (
                <NavigationLink
                  key={index}
                  linkName={link.name.toLowerCase()}
                  onClick={onClose}
                />
              )
            )}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default function Navbar() {
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
