import { VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import CertificateCard from "./CertificateCard";
import styles from "./Certificate.module.css";

const Certificate = ({ cert }) => (
  <VStack>
    <Heading className={styles.title}>Certificates</Heading>
    <SimpleGrid columns={{ base: 1, md: 3 }} className={styles.grid}>
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

export default Certificate;
