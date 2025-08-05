import { Box, Text } from "@chakra-ui/react";

export default function MainFooter() {
  return (
    <Box as="footer" bg="gray.100" py={4} textAlign="center">
      <Text fontSize="sm" color="gray.600">
         © 2024 - {new Date().getFullYear()} Dominic Esguerra. All rights reserved.
      </Text>
      <Text fontSize="sm" color="gray.600">Made with React + ChakraUI</Text>
    </Box>
  );
}