import { VStack, Stack } from "@chakra-ui/react";
import NamecardImage from "./NamecardImage";
import NamecardTextContent from "./NamecardTextContent";
import NamecardButtons from "./NamecardButtons";

export default function Namecard({ avatar, textContent, socialLinks }) {
  return (
    <VStack h="full" justifyContent="center" p={4}>
      <Stack
        className="no-select"
        overflow="hidden"
        alignItems="center"
        gap={4}
        direction={{
          base: "column",
          sm: "row",
          md: "column",
          lg: "row",
        }}
      >
        <NamecardImage avatar={avatar} />
        <VStack
          alignItems={{
            base: "center",
            sm: "flex-start",
            md: "center",
            lg: "flex-start",
          }}
          gap={1}
        >
          <NamecardTextContent textContent={textContent} />
          <NamecardButtons socialLinks={socialLinks} />
        </VStack>
      </Stack>
    </VStack>
  );
}
