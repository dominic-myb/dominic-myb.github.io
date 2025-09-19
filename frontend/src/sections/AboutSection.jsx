import { Container, Grid } from "@chakra-ui/react";
import Namecard from "@/components/namecard/Namecard";
import Techstacks from "@/components/techstacks/Techstacks";
import Timeline from "@/components/timelines/Timeline";
import Certificate from "@/components/certificates/Certificate";
import styles from "./AboutSection.module.css";

import aboutData from "@/assets/data/timeline.json";

export default function AboutSection() {
  const certificates = [
    {
      title: "Responsive Web Design",
      platform: "freeCodeCamp",
      desc: "Demonstrated proficiency in HTML, CSS, and modern design principles including accessibility, mobile-first design, and responsive layouts.",
      link: "https://www.freecodecamp.org/certification/dominic-esguerra/responsive-web-design",
    },
  ];
  return (
    <Container as="section" id="about" className={styles.about_container}>
      <Grid templateColumns="repeat(auto-fit, auto)" gap={4}>
        <Namecard />
        <Techstacks />
        <Timeline timeline={aboutData.timeline} />
        <Certificate cert={certificates} />
      </Grid>
    </Container>
  );
}
