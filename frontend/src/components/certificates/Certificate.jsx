import { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  GridItem,
  Flex,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import styles from "./Certificate.module.css";

function Card({ cert }) {
  const { title, platform, desc, link, canInvert } = cert;
  const [expanded, setExpanded] = useState(false);
  const maxChars = 100;
  const isLong = desc.length > maxChars;
  const displayText = expanded ? desc : desc.slice(0, maxChars);
  return (
    <Box className={styles.card_button}>
      <HStack align="start">
        <Image
          className={canInvert ? styles.card_icon_invert : ""}
          src={`/assets/icons/${platform.toLowerCase()}.svg`}
          boxSize="50px"
          alt={`Logo of ${platform}`}
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
}

export default function Certificate({ cert }) {
  return (
    <GridItem
      colSpan={{ base: 4, md: 4, lg: 5 }}
      className={styles.main_container}
    >
      <VStack className={styles.stack_wrapper}>
        <Heading className={styles.title}>📜 Certificates</Heading>
        <Flex className={styles.flex}>
          {cert.map((item, idx) => (
            <Card key={idx} cert={item} />
          ))}
        </Flex>
      </VStack>
    </GridItem>
  );
}
