import {
  GridItem,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import Timeline from './Timeline';
import backgroundData from '@/assets/data/background.json';

function Background() {
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
        md: 2,
        lg: 5,
      })}
      borderRadius="lg"
      bg={useColorModeValue('#e5ded2', 'gray.700')}
    >
      <Timeline timelineData={backgroundData} />
    </GridItem>
  );
}

export default Background;
