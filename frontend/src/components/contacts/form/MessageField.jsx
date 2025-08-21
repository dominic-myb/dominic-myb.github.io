import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

const MessageField = ({message, setMessage}) => (
  <FormControl isRequired>
    <FormLabel>Message</FormLabel>
    <Textarea
      placeholder="Tell me about your project or question."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
  </FormControl>
);

export default MessageField;