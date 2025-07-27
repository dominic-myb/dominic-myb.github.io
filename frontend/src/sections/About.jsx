import { Container } from "@chakra-ui/react";

import AboutLayout from "@/layouts/AboutLayout";
import Namecard from "@/components/namecard/Namecard";
import Techstacks from "@/components/techstacks/Techstacks";
import Background from "@/components/background/Background";

import background from "@/assets/data/background.json";
import textContent from "@/assets/data/namecard-desc.json";
import socialLinks from "@/assets/data/icons.json";

import "@/assets/styles/about.css";
import avatar from "@/assets/img/avatar.jpg";

export default function About() {
  return (
    <Container id="about" maxW="container.lg">
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
        ]}
      />
    </Container>
  );
}
