import {
  GridItem,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import Timeline from './Timeline';
import backgroundData from '@/assets/data/background.json';
import { colorMap } from '@/assets/color';

function Background() {
  return (
    <GridItem
      className="block"
      rowSpan={useBreakpointValue({
        base: 1,
        md: 2,
        lg: 3,
      })}
      colSpan={useBreakpointValue({
        base: 1,
        md: 2,
        lg: 5,
      })}
      borderRadius="lg"
      bg={useColorModeValue(colorMap.light.cardBg, colorMap.dark.cardBg)}
      border={`1px solid ${useColorModeValue(
        colorMap.light.cardBorder,
        colorMap.dark.cardBorder
      )}`}
    >
      <Timeline timelineData={backgroundData} />
    </GridItem>
  );
}

export default Background;
