import { Container, Flex, Heading, Box, Text, Image, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { AiFillCode } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import profilePic from '../assets/profile-picture.jpg';
function About() {
  return (
    <Container id={'about'} maxW={'container.lg'} h={'100vh'} mb={10}>
      <Grid
        h={'full'}
        templateRows={useBreakpointValue({
          base: 'repeat(6, 1fr)',
          sm: 'repeat(5, 1fr)',
          md: 'repeat(5, 1fr)'
        })}
        templateColumns={useBreakpointValue({
          base: '1fr',
          sm: '1fr',
          md: 'repeat(5, 1fr)'
        })}
        gap={4}
      >
        <GridItem
          rowSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 2
          })}
          colSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 3
          })}
          w={'full'}
          h={'full'}
          borderRadius={'2xl'}
          bg={'tomato'}
        >
          <Flex
            className={'no-select'}
            w={'80%'}
            h={'full'}
            p={4}
            flexDirection={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            verticalAlign={'middle'}
            gap={4}
            mx={'auto'}
            overflow={'hidden'}
          >
            <Box>
              <Image
                src={profilePic}
                alt={'profile-picture'}
                boxSize={100}
                maxWidth={100}
                borderRadius={'full'}
                objectFit={'cover'}
              />
            </Box>
            <Box>
              <Heading as={'h1'} className={'lato'}>hi, dominic here<span className='wave'>👋</span></Heading>
              <Flex alignItems={'center'} gap={1}>
                {/* Try adding map on hover */}
                <FaLocationDot />
                <Text className={'open-sans'}>Cavite, Philippines</Text>
              </Flex>
              <Flex alignItems={'center'} gap={1}>
                <AiFillCode />
                <Text className={'open-sans'}>Web Developer | MERN Stack</Text>
              </Flex>
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 2
          })}
          colSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 2
          })}
          w={'full'}
          h={'full'}
          p={4}
          borderRadius={'2xl'}
          bg={'papayawhip'}
        >
          <Flex>
            <Text>Tech Stack</Text>
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 3
          })}
          colSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 2
          })}
          w={'full'}
          h={'full'}
          borderRadius={'2xl'}
          bg={'papayawhip'}
          p={4}
        >
          <Flex><Text>Tech Stack</Text></Flex>
        </GridItem>
        <GridItem
          rowSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 1
          })}
          colSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 3
          })}
          w={'full'}
          h={'full'}
          borderRadius={'2xl'}
          bg={'papayawhip'}
          p={4}
        >
          <Flex><Text>Tech Stack</Text></Flex>
        </GridItem>
        <GridItem
          rowSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 2
          })}
          colSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 3
          })}
          w={'full'}
          h={'full'}
          borderRadius={'2xl'}
          bg={'tomato'}
          p={4}
        >
          <Flex><Text>Tech Stack</Text></Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default About;
