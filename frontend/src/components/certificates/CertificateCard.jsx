import { Text, Button, VStack, Image, HStack } from "@chakra-ui/react";
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
      <HStack>
        <Image
          className={styles.card_icon}
          src={`/assets/icons/${platform.toLowerCase()}.svg`}
          boxSize="50px"
        />
        <VStack className={styles.card_wrapper}>
          <Text className={styles.card_title}>{title}</Text>
          <Text className={styles.card_platform}>{platform}</Text>
        </VStack>
      </HStack>
    </Button>
  );
};

export default CertificateCard;
