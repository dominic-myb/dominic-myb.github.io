import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, VStack, HStack, Link, Button, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function NavbarDrawer({ isOpen, onClose }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
        <DrawerBody>
          <VStack spacing={4} py={4}>
            <Link
              className={'no-select'}
              href={'#about'}
              fontSize={'18px'}
              fontWeight={600}
              padding={'8px 15px'}
              borderRadius={'50px'}
              _hover={{ backgroundColor: useColorModeValue('gray.800', 'gray.100'), color: useColorModeValue('gray.100', 'gray.800') }}
              onClick={onClose}
            >
              About
            </Link>

            <Link
              className={'no-select'}
              href={'#projects'}
              fontSize={'18px'}
              fontWeight={600}
              padding={'8px 15px'}
              borderRadius={'50px'}
              _hover={{ backgroundColor: useColorModeValue('gray.800', 'gray.100'), color: useColorModeValue('gray.100', 'gray.800') }}
              onClick={onClose}
            >
              Projects
            </Link>

            <Link
              className={'no-select'}
              href={'#contact'}
              fontSize={'18px'}
              fontWeight={600}
              padding={'8px 15px'}
              borderRadius={'50px'}
              _hover={{ backgroundColor: useColorModeValue('gray.800', 'gray.100'), color: useColorModeValue('gray.100', 'gray.800') }}
              onClick={onClose}
            >
              Contact
            </Link>

            <Button onClick={toggleColorMode}>
              {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default NavbarDrawer;