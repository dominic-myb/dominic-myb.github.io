import {
  VStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import TechstackIcons from "./TechstackIcons";

export default function Techstacks() {
  const [isAnimated, setIsAnimated] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimated((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const iconsPath = "/assets/icons/";
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
  const filetype = ".svg";

  return (
    <VStack mx="auto" p={4}>
      <Heading fontSize={28}>Techstacks</Heading>
      <SimpleGrid columns={4} gap={4} placeItems="center">
        {toolNames.map((img, idx) => (
          <TechstackIcons
            key={img}
            flexClass={`techstack ${isAnimated ? "moveup" : ""}`}
            imgPath={`${iconsPath}${img}${filetype}`}
            imgName={img}
            imgAlt={`${img}${filetype}`}
            imgIdx={idx}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
