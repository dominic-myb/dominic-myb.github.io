import { VStack, Heading, GridItem, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import TechstackIcons from "./TechstackIcons";
import styles from "./Techstacks.module.css";

const Techstacks = () => {
  const [isAnimated, setIsAnimated] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimated((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toolNames = [
    "html5",
    "css3",
    "javascript",
    "react",
    "nodejs",
    "mongodb",
    "mysql",
    "php",
    "cpp",
    "jquery",
    "figma",
    "godot",
    "bootstrap",
  ];

  return (
    <GridItem
      colSpan={{ base: 4, md: 2, lg: 2 }}
      className={styles.main_container}
    >
      <VStack className={styles.techstacks_container}>
        <Heading className={`${styles.techstacks_heading}`}>🛠️Techstacks</Heading>
        <Flex className={styles.techstacks_flex}>
          {toolNames.map((img, idx) => (
            <TechstackIcons
              key={img}
              flexClass={`${styles.techstack} ${
                isAnimated ? styles.moveup : ""
              }`}
              imgPath={`/assets/icons/${img}.svg`}
              imgName={img}
              imgAlt={`${img}.svg`}
              imgIdx={idx}
            />
          ))}
        </Flex>
      </VStack>
    </GridItem>
  );
};

export default Techstacks;
