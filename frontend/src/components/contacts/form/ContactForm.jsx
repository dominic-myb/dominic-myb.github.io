import { useState } from "react";
import { VStack, Text, useToast } from "@chakra-ui/react";
import styles from "./ContactForm.module.css";

import EmailField from "./EmailField";
import SubjectField from "./SubjectField";
import MessageField from "./MessageField";
import SendButton from "./SendButton";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isEmailInvalid = email && !emailRegex.test(email);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsTouched(true);

    if (isEmailInvalid || !subject || !message) return;

    const promise = fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, subject, message }),
    }).then((res) => {
      if (!res.ok) throw new Error("Failed to send");
      setEmail("");
      setSubject("");
      setMessage("");
      return res;
    });

    toast.promise(promise, {
      loading: { title: "Sending message...", description: "Please wait." },
      success: {
        title: "Message sent!",
        description: "Thanks for reaching out.",
      },
      error: { title: "Error", description: "Failed to send message." },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <VStack className={styles.form_wrapper}>
        <Text className={styles.form_title}>Send a Message</Text>
        <EmailField
          isTouched={isTouched}
          setIsTouched={setIsTouched}
          email={email}
          setEmail={setEmail}
          isEmailInvalid={isEmailInvalid}
        />
        <SubjectField subject={subject} setSubject={setSubject} />
        <MessageField message={message} setMessage={setMessage} />
        <SendButton />
      </VStack>
    </form>
  );
};

export default ContactForm;
