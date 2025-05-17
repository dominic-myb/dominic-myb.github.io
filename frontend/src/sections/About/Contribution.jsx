import {
  GridItem,
  VStack,
  Text,
  Image,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';

function Contribution() {
  return (
    <GridItem
      className="block"
      rowSpan={useBreakpointValue({
        base: 1,
        sm: 1,
        md: 1,
        lg: 3,
      })}
      colSpan={useBreakpointValue({
        base: 1,
        sm: 1,
        md: 1,
        lg: 5,
      })}
      borderRadius="2xl"
      bg={useColorModeValue('#e5ded2', 'gray.700')}
      p={4}
    >
      <VStack mx="auto" h="full">
        <VStack
          w="90%"
          h="full"
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          <Text as="h2" className="open-sans" fontSize={22}>
            GitHub Contributions
          </Text>
          <Image
            w={'full'}
            src="https://ghchart.rshah.org/FE4A49/dominic-myb"
            alt="GitHub Contributions"
            borderRadius="lg"
            objectFit="cover"
          />
        </VStack>
        <Text as="h2" className="open-sans" fontSize={22}>
          GitHub Streak Stats
        </Text>
        <Stack
          width="90%"
          h="full"
          direction={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="https://nirzak-streak-stats.vercel.app/?user=dominic-myb&theme=transparent&hide_border=true"
            alt="GitHub Streak Stats"
            w={{ base: '100%', sm: '100%', md: '75%', lg: '100%' }}
            h={{ base: '100%', sm: '130', md: '180', lg: '180' }}
            borderRadius="lg"
            objectFit="cover"
          />
          <Image
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=dominic-myb&theme=transparent&hide_border=true&include_all_commits=false&count_private=false&layout=compact"
            alt="GitHub Top Languages"
            w={{ base: '100%', sm: '70%', md: '70%', lg: '90%' }}
            h={{ base: '100%', sm: '130', md: '180', lg: '180' }}
            borderRadius="lg"
          />
        </Stack>
      </VStack>
    </GridItem>
  );
}

export default Contribution;
