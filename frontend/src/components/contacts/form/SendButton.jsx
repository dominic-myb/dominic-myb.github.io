import { Button } from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import styles from "./ContactForm.module.css";

const SendButton = () => (
  <Button
    type="submit"
    className={styles.send_button}
    size="lg"
    rightIcon={<IoSend />}
  >
    Send
  </Button>
);

export default SendButton;
