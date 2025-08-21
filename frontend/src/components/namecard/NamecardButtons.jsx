import {
  HStack,
  Button,
  Text,
  Tooltip,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
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
      <Button onClick={() => handleDownload(download)}>
        <DownloadIcon />
        <Text>&nbsp;Resumé</Text>
      </Button>
    </Tooltip>
  );
};

const SocialLink = ({ label, icon, link }) => {
  const size = useBreakpointValue({ base: 3, md: 4 });
  return (
    <Tooltip label={label} placement="bottom" hasArrow>
      <Button onClick={() => window.open(link, "_blank")}>
        <Icon as={icon} boxSize={size} />
      </Button>
    </Tooltip>
  );
};

const NamecardButtons = ({ socialLinks }) => {
  const iconMap = {
    SiLinkedin,
    SiGithub,
    SiLeetcode,
  };
  const socials = socialLinks.map(({ label, icon, link }) => ({
    label,
    icon: iconMap[icon],
    link,
  }));

  return (
    <HStack className={styles.buttons_container} gap={2} pt={2}>
      {socials.map(({ label, icon, link }) => (
        <SocialLink key={label} label={label} icon={icon} link={link} />
      ))}
      <DownloadPDFButton />
    </HStack>
  );
};

export default NamecardButtons;
