import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const SubjectField = ({subject, setSubject}) => (
  <FormControl isRequired>
    <FormLabel>Subject</FormLabel>
    <Input
      type="text"
      placeholder="Subject of your message"
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
    />
  </FormControl>
);

export default SubjectField;
