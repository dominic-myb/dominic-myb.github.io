import { VStack, Heading, GridItem, Flex, Box, Text } from "@chakra-ui/react";
import styles from "./Techstacks.module.css";

const Techstacks = () => {
  const data = {
    "Programming Languages": [
      "JavaScript/TypeScript",
      "Python",
      "C++",
      "GDScript",
    ],
    Frontend: ["React.js", "TailwindCSS", "Bootstrap", "ChakraUI", "HTML", "CSS"],
    Backend: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    Tools: ["Git", "Github", "Postman", "Godot"],
  };
  return (
    <GridItem
      colSpan={{ base: 4, md: 2, lg: 2 }}
      className={styles.main_container}
    >
      <VStack className={styles.techstacks_container}>
        <Heading className={`${styles.techstacks_heading}`}>
          🛠️Technical Skills
        </Heading>
        <div>
          {Object.entries(data).map(([category, items]) => (
            <Flex key={category} className={styles.wrapper}>
              <Text className={styles.category}>{category}:&nbsp;</Text>
              <Flex className={styles.items_wrapper}>
                {items.map((item, idx) => (
                  <Box as="span" key={idx} className={styles.item}>
                    {item}
                  </Box>
                ))}
              </Flex>
            </Flex>
          ))}
        </div>
      </VStack>
    </GridItem>
  );
};

export default Techstacks;
