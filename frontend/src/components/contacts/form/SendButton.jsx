import { Button } from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import { useThemeColor, useThemeConstantColor } from "@/assets/colors";

const SendButton = () => {
  const [primary, accent] = useThemeColor(["primary", "accent"]);
  const btnColor = useThemeConstantColor("titleFont", "dark");
  return (
    <Button
      type="submit"
      size="lg"
      bg={primary}
      color={btnColor}
      rightIcon={<IoSend />}
      borderRadius="xl"
      _hover={{ bg: accent }}
    >
      Send
    </Button>
  );
};

export default SendButton;
