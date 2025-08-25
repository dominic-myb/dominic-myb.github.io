import AboutContainer from "./AboutContainer";
import AboutGrid from "./AboutGrid";

const About = ({ children }) => (
  <AboutContainer>
    <AboutGrid>{children}</AboutGrid>
  </AboutContainer>
);

export default About;
