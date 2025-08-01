import { Text, Button, VStack } from "@chakra-ui/react";

export default function CertificateCard({ title, platform, link }) {
  return (
    <Button as="a" href={link} target="_blank" rel="noopener noreferrer" py={10} px={8}>
      <VStack spacing={2} alignItems="stretch">
        <Text fontSize="md" fontWeight="bold" color="white">
          {title}
        </Text>
        <Text fontSize="sm" fontStyle="italic" color="gray.400">
          {platform}
        </Text>
      </VStack>
    </Button>
  );
}
