import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from "@chakra-ui/react";

const EmailField = ({ isTouched, setIsTouched, email, setEmail, isEmailInvalid }) => (
  <FormControl isInvalid={isTouched && isEmailInvalid}>
    <FormLabel>Email address</FormLabel>
    <Input
      type="email"
      placeholder="name@domain.com"
      value={email}
      onChange={(e) => {
        const value = e.target.value;
        setEmail(value);
        if (!value) setIsTouched(false);
      }}
      onBlur={() => {
        if (email) setIsTouched(true);
      }}
    />
    <FormErrorMessage>Please enter a valid email address.</FormErrorMessage>
    <FormHelperText>I'll never share your email.</FormHelperText>
  </FormControl>
);

export default EmailField;
