import { VStack, Stack, GridItem } from "@chakra-ui/react";
import NamecardImage from "./NamecardImage";
import NamecardButtons from "./NamecardButtons";
import NamecardTextContent from "./NamecardTextContent";
import styles from "./Namecard.module.css";

const Namecard = ({ avatar }) => (
  <GridItem
    colSpan={{ base: 4, md: 2, lg: 3 }}
    className={styles.main_container}
  >
    <VStack className={styles.container}>
      <Stack
        className={`${styles.wrapper} no-select`}
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
          <NamecardTextContent />
          <NamecardButtons />
        </VStack>
      </Stack>
    </VStack>
  </GridItem>
);

export default Namecard;
