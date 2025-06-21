import {
  Container,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  useColorMode,
  IconButton,
  useDisclosure,
  Heading,
} from '@chakra-ui/react';

import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';
import NavbarDrawer from './NavbarDrawer';
import { colorMap } from '@/assets/color';

function Logo() {
  return (
    <Heading
      as="h1"
      className="no-select"
      fontSize={{ base: '24', sm: '28' }}
      fontWeight="bold"
      textTransform="lowercase"
      textAlign="center"
      bgGradient={useColorModeValue(
        'linear-gradient(to-r, #ff4f64, #6936c2)',
        'linear(to-r, #00b09b, #96c93d)'
      )}
      bgClip="text"
    >
      dominic-esguerra
    </Heading>
  );
}

function NavigationLink({ linkName }) {
  return (
    <Link
      className="no-select"
      href={`#${linkName.toLowerCase()}`}
      fontSize={{ base: '16', md: '17', lg: '18' }} //
      fontWeight={600}
      padding="8px 15px"
      borderRadius="50px"
      _hover={{
        backgroundColor: useColorModeValue('gray.800', 'gray.100'),
        color: useColorModeValue('gray.100', 'gray.800'),
      }}
      _focus={{
        backgroundColor: useColorModeValue('gray.800', 'gray.200'),
        color: useColorModeValue('gray.100', 'gray.800'),
      }}
    >
      {linkName}
    </Link>
  );
}

function Navigations() {
  return (
    <HStack
      display={{ base: 'none', md: 'flex' }}
      spacing={{ base: 4, md: 6, lg: 10 }}
      justifyContent="flex-end"
    >
      {[{ name: 'about' }, { name: 'projects' }, { name: 'contact' }].map(
        (link, index) => (
          <NavigationLink key={index} linkName={link.name.toLowerCase()} />
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
          {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
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
      h={20}
      maxW="container.xl"
      pos="sticky"
      top={0}
      zIndex={100}
      bg={useColorModeValue(
        colorMap.light.background,
        colorMap.dark.background
      )}
    >
      <Container maxW="container.lg" py={5}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: 'row', md: 'row' }}
        >
          <Logo />
          <Navigations />
          <NavButtons />
        </Flex>
      </Container>
      <NavbarDrawer isOpen={isOpen} onClose={onClose} />
    </Container>
  );
}

export { Navbar, NavigationLink };
