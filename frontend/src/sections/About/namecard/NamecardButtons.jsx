import { HStack, Button, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { IoMdDownload } from 'react-icons/io';

function DownloadPDFButton() {
  const handleDownload = async () => {
    const pdf = await import('@/assets/downloads/Dominic-Esguerra-CV.pdf');
    const link = document.createElement('a');
    link.href = pdf.default;
    link.download = 'Dominic-Esguerra-CV.pdf';
    link.click();
  };

  return (
    <Button onClick={handleDownload}>
      <IoMdDownload />
      <Text> &nbsp;Resumé</Text>
    </Button>
  );
}

function SocialLink({ link, Component }) {
  return (
    <Button onClick={() => window.open(link, '_blank')}>
      <Component size="20" />
    </Button>
  );
}

function NamecardButtons() {
  const socialLinks = [
    { link: 'https://github.com/dominic-myb', component: FaGithub },
    {
      link: 'https://leetcode.com/desguerra246/',
      component: SiLeetcode,
    },
    {
      link: 'https://www.linkedin.com/in/dominic-esguerra/',
      component: FaLinkedin,
    },
  ];
  return (
    <HStack w="full" flexDirection="row" alignItems="center" gap={2} pt={2}>
      {socialLinks.map((item, idx) => (
        <SocialLink
          key={idx}
          link={item.link}
          Component={item.component}
        ></SocialLink>
      ))}
      <DownloadPDFButton />
    </HStack>
  );
}

export default NamecardButtons;
