import { VStack, Stack } from "@chakra-ui/react";
import NamecardImage from "./NamecardImage";
import NamecardButtons from "./NamecardButtons";
import NamecardTextContent from "./NamecardTextContent";
import styles from "./Namecard.module.css";

const Namecard = ({ avatar, textContent, socialLinks }) => (
  <VStack className={styles.container} p={4}>
    <Stack
      className={`${styles.wrapper} no-select`}
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

export default Namecard;
