import { useState } from "react";
import { Text, Button, VStack, Image, HStack, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import styles from "./Certificate.module.css";

const CertificateCard = ({ title, platform, desc, link }) => {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 100;
  const isLong = desc.length > maxChars;
  const displayText = expanded ? desc : desc.slice(0, maxChars);

  return (
    <Box className={styles.card_button}>
      <HStack align="start">
        <Image
          className={styles.card_icon}
          src={`/assets/icons/${platform.toLowerCase()}.svg`}
          boxSize="50px"
        />
        <VStack className={styles.card_wrapper}>
          <Box>
            <Text className={styles.card_title}>{title}</Text>
            <Text className={styles.card_platform}>{platform}</Text>
          </Box>
          <Text className={styles.card_desc}>
            {displayText}
            {isLong && !expanded && "..."}
            {isLong && (
              <Button onClick={() => setExpanded(!expanded)}>
                {expanded ? "\u00A0See less" : "\u00A0See more"}
              </Button>
            )}
          </Text>
          <Button
            as="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<ExternalLinkIcon />}
          >
            View Certificate
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};
export default CertificateCard;
