import { Text, Button, VStack } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";
import styles from "./Certificate.module.css";

const CertificateCard = ({ title, platform, link }) => {
  const [titleFont, smallFont] = useThemeColor(["titleFont", "smallFont"]);
  return (
    <Button
      className={styles.card_button}
      as="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <VStack className={styles.card_wrapper}> 
        <Text className={styles.card_title} color={titleFont}>
          {title}
        </Text>
        <Text className={styles.card_platform} color={smallFont}>
          {platform}
        </Text>
      </VStack>
    </Button>
  );
};

export default CertificateCard;
