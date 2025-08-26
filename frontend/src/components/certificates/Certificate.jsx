import { VStack, Heading, SimpleGrid, GridItem, Flex } from "@chakra-ui/react";
import CertificateCard from "./CertificateCard";
import styles from "./Certificate.module.css";

const Certificate = ({ cert }) => (
  <GridItem
    colSpan={{ base: 4, md: 4, lg: 5 }}
    className={styles.main_container}
  >
    <VStack className={styles.stack_wrapper}>
      <Heading className={styles.title}>📜 Certificates</Heading>
      <Flex className={styles.flex}>
        {cert.map(({ title, platform, link }, idx) => (
          <CertificateCard
            key={idx}
            title={title}
            platform={platform}
            link={link}
          />
        ))}
      </Flex>
    </VStack>
  </GridItem>
);

export default Certificate;
