import { Text, Button, VStack, Image, HStack, Box } from "@chakra-ui/react";
import styles from "./Certificate.module.css";

const CertificateCard = ({ title, platform, link }) => (
  <Box
    className={styles.card_button}
    as="a"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <HStack align="start">
      {/* <Image
        className={styles.card_icon}
        src={`/assets/icons/${platform.toLowerCase()}.svg`}
        boxSize="50px"
      /> */}
      <VStack className={styles.card_wrapper}>
        <Box>
          <Text className={styles.card_title}>{title}</Text>
          <Text className={styles.card_platform}>{platform}</Text>
        </Box>
        <Text className={styles.card_desc}>
          Demonstrated proficiency in HTML, CSS, and modern design principles
          including accessibility, mobile-first design, and responsive layouts.
        </Text>
      </VStack>
    </HStack>
  </Box>
);
export default CertificateCard;
