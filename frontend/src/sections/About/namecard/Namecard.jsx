import {
  VStack,
  Stack,
  GridItem,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import NamecardButtons from "./NamecardButtons";
import NamecardTextContent from "./NamecardTextContent";
import NamecardImage from "./NamecardImage";
import { colorMap } from "@/assets/color";

function Namecard() {
  return (
    <GridItem
      className="block"
      rowSpan={useBreakpointValue({
        base: 1,
        lg: 2,
      })}
      colSpan={useBreakpointValue({
        base: 1,
        lg: 3,
      })}
      borderRadius="xl"
      bg={useColorModeValue(colorMap.light.cardBg, colorMap.dark.cardBg)}
      border={`1px solid ${useColorModeValue(
        colorMap.light.cardBorder,
        colorMap.dark.cardBorder
      )}`}
    >
      <VStack h="full" justifyContent="center">
        <Stack
          direction={{
            base: "row",
            md: "column",
            lg: "row",
          }}
          className="no-select"
          overflow="hidden"
          gap="4"
          alignItems="center"
        >
          <NamecardImage />
          <VStack
            alignItems={{
              base: "flex-start",
              md: "center",
              lg: "flex-start",
            }}
            gap={1}
          >
            <NamecardTextContent />
            <NamecardButtons />
          </VStack>
        </Stack>
      </VStack>
    </GridItem>
  );
}

export default Namecard;
