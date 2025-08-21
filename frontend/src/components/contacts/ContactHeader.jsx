import { VStack, Heading, Text } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";
import styles from "./Contacts.module.css";

const ContactHeader = () => {
  const [titleFont, bodyFont] = useThemeColor(["titleFont", "bodyFont"]);
  const textContent = {
    title: "Get in Touch",
    subtitle: `Have a project in mind or just want to say hello? I'd love to hear from you. Send me a
        message and I'll get back to you as soon as possible.`,
  };
  return (
    <VStack className={styles.contact_header}>
      <Heading fontSize="3xl" color={titleFont}>
        {textContent.title}
      </Heading>
      <Text className={styles.subtitle} fontSize={16} color={bodyFont}>
        {textContent.subtitle}
      </Text>
    </VStack>
  );
};

export default ContactHeader;
