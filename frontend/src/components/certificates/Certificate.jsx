import { VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import CertificateCard from "./CertificateCard";

export default function Certificate({ cert }) {
  return (
    <VStack>
      <Heading mt={6} fontSize="3xl">
        Certificates
      </Heading>
      <SimpleGrid columns={3} p={6}>
        {cert.map(({ title, platform, link }, idx) => (
          <CertificateCard
            key={idx}
            title={title}
            platform={platform}
            link={link}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
