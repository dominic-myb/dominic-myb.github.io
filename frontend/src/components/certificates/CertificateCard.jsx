import { Text, Button, VStack } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";

export default function CertificateCard({ title, platform, link }) {
  const [titleFont, smallFont] = useThemeColor(["titleFont", "smallFont"]);
  return (
    <Button
      as="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      py={10}
      px={8}
    >
      <VStack spacing={2} alignItems="stretch">
        <Text fontSize="md" fontWeight={600} color={titleFont}>
          {title}
        </Text>
        <Text fontSize="sm" fontStyle="italic" color={smallFont} fontWeight={400}>
          {platform}
        </Text>
      </VStack>
    </Button>
  );
}
