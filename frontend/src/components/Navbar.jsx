import { Container, Flex, Text, HStack, Link, Button, useColorModeValue, useColorMode, IconButton, useDisclosure } from '@chakra-ui/react';
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';
import NavbarDrawer from './NavbarDrawer';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container
        h={20}
        maxW={'container.xxl'}
        pos={'sticky'}
        top={0}
        zIndex={100}
        bg={useColorModeValue('#e5ded2', '#1A212D')}
      >
        <Container maxW={'container.lg'}
          py={5}
        >
          <Flex
            alignItems={'center'}
            justifyContent={'space-between'}
            flexDirection={{ base: 'row', md: 'row' }}
          >
            <Text
              as={'h1'}
              className={'no-select'}
              fontSize={{ base: '24', sm: '28' }}
              fontWeight={'bold'}
              textTransform={'uppercase'}
              textAlign={'center'}
              bgGradient={useColorModeValue('linear-gradient(to-r, #ff4f64, #6936c2)', 'linear(to-r, #00b09b, #96c93d)')}
              bgClip={'text'}
            >
              Dominic Esguerra
            </Text>
            <HStack
              spacing={{ base: 4, md: 6, lg: 10 }}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link
                className={'no-select'}
                href={'#about'}
                fontSize={{ base: '16', md: '17', lg: '18' }}
                fontWeight={600}
                padding={'8px 15px'}
                borderRadius={'50px'}
                _hover={{ backgroundColor: useColorModeValue('gray.800', 'gray.100'), color: useColorModeValue('gray.100', 'gray.800') }}
                _focus={{ backgroundColor: useColorModeValue('gray.800', 'gray.200'), color: useColorModeValue('gray.100', 'gray.800') }}
              >
                about
              </Link>

              <Link
                className={'no-select'}
                href={'#projects'}
                fontSize={{ base: '16', md: '17', lg: '18' }}
                fontWeight={600}
                padding={'8px 15px'}
                borderRadius={'50px'}
                _hover={{ backgroundColor: useColorModeValue('gray.800', 'gray.100'), color: useColorModeValue('gray.100', 'gray.800') }}
                _focus={{ backgroundColor: useColorModeValue('gray.800', 'gray.200'), color: useColorModeValue('gray.100', 'gray.800') }}
              >
                projects
              </Link>

              <Link
                className={'no-select'}
                href={'#contact'}
                fontSize={{ base: '16', md: '17', lg: '18' }}
                fontWeight={600}
                padding={'8px 15px'}
                borderRadius={'50px'}
                _hover={{ backgroundColor: useColorModeValue('gray.800', 'gray.100'), color: useColorModeValue('gray.100', 'gray.800') }}
                _focus={{ backgroundColor: useColorModeValue('gray.800', 'gray.200'), color: useColorModeValue('gray.100', 'gray.800') }}
              >
                contact
              </Link>

              <Button onClick={toggleColorMode}>
                {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              </Button>
            </HStack>

            <IconButton
              display={{ base: 'flex', md: 'none' }}
              icon={<HamburgerIcon />}
              onClick={onOpen}
              aria-label="Open menu"
              variant="ghost"
            />
          </Flex>
        </Container>
      </Container>
      <NavbarDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Navbar;
