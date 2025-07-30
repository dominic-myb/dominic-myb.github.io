import {
  HStack,
  Button,
  Text,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoMdDownload } from "react-icons/io";
import { handleDownload } from "@/utils/downloads";
import { iconMap } from "@/assets/icons";

function DownloadPDFButton() {
  const download = {
    url: "/assets/pdf/Dominic-Esguerra-CV.pdf",
    filename: "Dominic-Esguerra-CV.pdf",
  };
  return (
    <Tooltip label="Download my resume (PDF)" placement="bottom" hasArrow>
      <Button onClick={() => handleDownload(download)}>
        <IoMdDownload />
        <Text>&nbsp;Resumé</Text>
      </Button>
    </Tooltip>
  );
}

function SocialLink({ label, Icon, link }) {
  const size = useBreakpointValue({ base: 15, md: 20 });
  return (
    <Tooltip label={label} placement="bottom" hasArrow>
      <Button onClick={() => window.open(link, "_blank")}>
        <Icon size={size} />
      </Button>
    </Tooltip>
  );
}

export default function NamecardButtons({ socialLinks }) {
  const socials = socialLinks.map(({ label, icon, link }) => ({
    label,
    icon: iconMap[icon],
    link,
  }));

  return (
    <HStack w="full" flexDirection="row" alignItems="center" gap={2} pt={2}>
      {socials.map(({ label, icon, link }, idx) => (
        <SocialLink key={idx} label={label} Icon={icon} link={link} />
      ))}
      <DownloadPDFButton />
    </HStack>
  );
}
