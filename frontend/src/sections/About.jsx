import { Container } from "@chakra-ui/react";

import AboutLayout from "@/layouts/AboutLayout";
import Namecard from "@/components/namecard/Namecard";
import Techstacks from "@/components/techstacks/Techstacks";
import Background from "@/components/background/Background";
import Certificate from "@/components/certificates/Certificate";

import background from "@/assets/data/background.json";
import certs from "@/assets/data/certificates.json";

import "@/assets/styles/about.css";

const avatar = "/assets/images/avatar.jpg";
const textContent = {
  greet: "Hi, I'm Dominic",
  icon: "👋",
  location: "Cavite, Philippines",
  profession: "IT Grad | Junior Web Developer",
};
const socialLinks = [
  {
    label: "Github",
    icon: "FaGithub",
    link: "https://github.com/dominic-myb",
  },
  {
    label: "Leetcode",
    icon: "SiLeetcode",
    link: "https://leetcode.com/desguerra246/",
  },
  {
    label: "LinkedIn",
    icon: "FaLinkedin",
    link: "https://www.linkedin.com/in/dominic-esguerra/",
  },
];
export default function About() {
  return (
    <Container id="about" maxW="container.lg" scrollMarginTop="75px">
      <AboutLayout
        cards={[
          <Namecard
            key="namecard"
            avatar={avatar}
            textContent={textContent}
            socialLinks={socialLinks}
          />,
          <Techstacks key="techstacks" />,
          <Background
            key="background"
            title={background.title}
            subtitle={background.subtitle}
            timeline={background.timeline}
          />,
          <Certificate cert={certs}/>,
        ]}
      />
    </Container>
  );
}
