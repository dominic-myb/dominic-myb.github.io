import { About } from "@/components/about";
import { Namecard } from "@/components/namecard";
import { Techstacks } from "@/components/techstacks";
import { Timeline } from "@/components/timelines/";
import { Certificate } from "@/components/certificates";

import aboutData from "@/assets/data/about.json";

const AboutSection = () => {
  const avatar = "/assets/images/avatar.jpg";
  const background = aboutData.background;
  const certs = aboutData.certificates;
  return (
    <About>
      <Namecard avatar={avatar} />
      <Techstacks />
      <Timeline
        title={background.title}
        subtitle={background.subtitle}
        timeline={background.timeline}
      />
      <Certificate cert={certs} />
    </About>
  );
};

export default AboutSection;
