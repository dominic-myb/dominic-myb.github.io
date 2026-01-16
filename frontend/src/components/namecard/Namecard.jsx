import { useEffect, useState } from "react";
import {
  VStack,
  Stack,
  HStack,
  GridItem,
  Box,
  Text,
  Image,
  Tooltip,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import { handleDownload } from "@/utils/downloads";
import styles from "./Namecard.module.css";

function NamecardImage() {
  const profile = "/assets/images/avatar.webp";
  return (
    <Box className={styles.image_container}>
      <Image
        src={profile}
        alt="Dominic Esguerra, web developer from Cavite, Philippines"
        loading="eager"
        className={styles.image_avatar}
        boxSize={{ base: "100px", md: "150px" }}
      />
    </Box>
  );
}

function NamecardTextContent() {
  const [isWaving, setIsWaving] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsWaving((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HStack>
        <Text as="p" className={styles.greet}>
          Hi, I'm Dominic
          <Box
            as="span"
            className={`${styles.hand} ${isWaving ? styles.hand_wave : ""}`}
          >
            👋
          </Box>
        </Text>
      </HStack>
      <HStack className={styles.text_container}>
        <Text className={styles.text}>From Cavite, Philippines</Text>
      </HStack>
      <HStack className={styles.text_container}>
        <Text className={styles.text}>IT Grad, Web Developer</Text>
      </HStack>
    </>
  );
}

function NamecardButtons() {
  const iconMap = {
    Github: <SiGithub />,
    LeetCode: <SiLeetcode />,
    LinkedIn: <SiLinkedin />,
  };
  const data = [
    {
      label: "Github",
      link: "https://github.com/dominic-myb",
    },
    {
      label: "LeetCode",
      link: "https://leetcode.com/desguerra246/",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/dominic-esguerra/",
    },
  ];
  const download = {
    url: "/assets/pdf/Dominic-Esguerra-CV.pdf",
    filename: "Dominic-Esguerra-CV.pdf",
  };
  return (
    <HStack className={styles.buttons_container}>
      {data.map(({ label, link }, idx) => (
        <Tooltip key={idx} label={label} placement="bottom" hasArrow>
          <IconButton
            onClick={() => window.open(link, "_blank")}
            icon={iconMap[label]}
            boxSize={10}
            className={styles.platform_icon}
            aria-label={`Visit Dominic's ${label} profile`}
          />
        </Tooltip>
      ))}
      <Tooltip label="Download my resume (PDF)" placement="bottom" hasArrow>
        <Button
          onClick={() => handleDownload(download)}
          leftIcon={<DownloadIcon />}
          className={styles.download_icon}
          aria-label="Download my resume (PDF)"
        >
          Resumé
        </Button>
      </Tooltip>
    </HStack>
  );
}

export default function Namecard() {
  return (
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
          <NamecardImage />
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
}
