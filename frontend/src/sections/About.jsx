import "@/assets/styles/about.css";
import { Container } from "@chakra-ui/react";

import AboutLayout from "@/layouts/AboutLayout";
import TimelineLayout from "@/layouts/TimelineLayout";
import { Namecard } from "@/components/namecard";
import { Techstacks } from "@/components/techstacks";
import { Certificate } from "@/components/certificates";

import background from "@/assets/data/background.json";
import certs from "@/assets/data/certificates.json";


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
    <Container as="section" id="about" maxW="container.lg" scrollMarginTop="75px">
      <AboutLayout
        cards={[
          <Namecard
            key="namecard"
            avatar={avatar}
            textContent={textContent}
            socialLinks={socialLinks}
          />,
          <Techstacks key="techstacks" />,
          <TimelineLayout
            key="timeline"
            title={background.title}
            subtitle={background.subtitle}
            timeline={background.timeline}
          />,
          <Certificate cert={certs} />,
        ]}
      />
    </Container>
  );
}
