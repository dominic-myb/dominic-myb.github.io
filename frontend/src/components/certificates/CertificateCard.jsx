import { Text, Button, VStack } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";
import styles from "./Certificate.module.css";

const CertificateCard = ({ title, platform, link }) => {
  const [titleFont, smallFont] = useThemeColor(["titleFont", "smallFont"]);
  return (
    <Button
      as="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      py={10}
      px={8}
    >
      <VStack spacing={2} alignItems="stretch">
        <Text className={styles.card_title} fontSize="md" color={titleFont}>
          {title}
        </Text>
        <Text className={styles.card_platform} fontSize="sm" color={smallFont}>
          {platform}
        </Text>
      </VStack>
    </Button>
  );
};

export default CertificateCard;
