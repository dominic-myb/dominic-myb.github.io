import { Text, Button, VStack } from "@chakra-ui/react";
import styles from "./Certificate.module.css";

const CertificateCard = ({ title, platform, link }) => {
  return (
    <Button
      className={styles.card_button}
      as="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <VStack className={styles.card_wrapper}>
        <Text className={styles.card_title}>{title}</Text>
        <Text className={styles.card_platform}>{platform}</Text>
      </VStack>
    </Button>
  );
};

export default CertificateCard;
