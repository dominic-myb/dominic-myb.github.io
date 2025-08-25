import { VStack, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";
import CertificateCard from "./CertificateCard";
import styles from "./Certificate.module.css";

const Certificate = ({ cert }) => (
  <GridItem
    colSpan={{ base: 4, md: 4, lg: 5 }}
    rowSpan={{ base: 2, md: 1, lg: 1 }}
    className={styles.main_container}
  >
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
  </GridItem>
);

export default Certificate;
