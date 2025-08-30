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
    Frontend: ["React.js", "TailwindCSS", "Bootstrap", "ChakraUI", "HTML/CSS"],
    Backend: ["Node.js","Express.js", "MongoDB", "MySQL"],
    Tools: ["Git", "Github", "Postman", "Godot", "VSCode"],
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
        <Box>
          {Object.entries(data).map(([category, items]) => (
            <Box key={category} mb={2}>
              <Text fontSize="md" fontWeight={800}>
                {category}:&nbsp;
              </Text>
              {items.map((item, idx) => (
                <Box
                  as="span"
                  key={idx}
                  className={styles.item}
                  mr={idx < items.length - 1 ? 1 : 0}
                >
                  {item}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </VStack>
    </GridItem>
  );
};

const Item = (item) => (
  <Box as="span" border="1px solid white">
    {item}
  </Box>
);

export default Techstacks;
