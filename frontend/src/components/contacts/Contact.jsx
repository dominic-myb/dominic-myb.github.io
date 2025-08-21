import ContactContainer from "./ContactContainer";
import ContactHeader from "./ContactHeader";
import ContactBody from "./ContactBody";
import { ContactForm } from "./form";

const Contact = () => (
  <ContactContainer>
    <ContactHeader />
    <ContactBody>
      <ContactForm />
    </ContactBody>
  </ContactContainer>
);

export default Contact;
