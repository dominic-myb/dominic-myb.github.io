import { HStack, Button, Tooltip, IconButton } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import { handleDownload } from "@/utils/downloads";
import styles from "./Namecard.module.css";

const DownloadPDFButton = () => {
  const download = {
    url: "/assets/pdf/Dominic-Esguerra-CV.pdf",
    filename: "Dominic-Esguerra-CV.pdf",
  };
  return (
    <Tooltip label="Download my resume (PDF)" placement="bottom" hasArrow>
      <Button
        onClick={() => handleDownload(download)}
        leftIcon={<DownloadIcon />}
        className={styles.download_icon}
      >
        Resumé
      </Button>
    </Tooltip>
  );
};

const NamecardButton = ({ label, icon, link }) => (
  <Tooltip label={label} placement="bottom" hasArrow>
    <IconButton
      onClick={() => window.open(link, "_blank")}
      icon={icon}
      boxSize={10}
      className={styles.platform_icon}
    />
  </Tooltip>
);

const NamecardButtons = () => {
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
  return (
    <HStack className={styles.buttons_container}>
      {data.map(({ label, link }, idx) => (
        <NamecardButton
          key={idx}
          label={label}
          icon={iconMap[label]}
          link={link}
        />
      ))}
      <DownloadPDFButton />
    </HStack>
  );
};

export default NamecardButtons;
