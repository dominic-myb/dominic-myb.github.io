import { useRef } from "react";
import {
  VStack,
  HStack,
  Box,
  Image,
  Link,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { toCapitalize } from "@/utils/formatters";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import styles from "./Card.module.css";

const Card = ({ image, title, desc, src, tools }) => {
  const videoRef = useRef(null);
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          if (err.name !== "AbortError") {
            console.error("Video play failed:", err);
          }
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  };
  return (
    <VStack className={styles.card_container}>
      <Box
        className={styles.image_wrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          className={styles.image}
          src={`/assets/projects/${image}.jpg`}
          alt={`Image of my project ${title}`}
        />
        <Box
          as="video"
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          className={styles.card_video}
        >
          <source src={`/assets/projects/${src}.webm`} type="video/webm" />
          <source src={`/assets/projects/${src}.mp4`} type="video/mp4" />
        </Box>
      </Box>
      <VStack className={styles.card_wrapper}>
        <HStack>
          <Link className={styles.card_title}>
            {title}
            <ExternalLinkIcon className={styles.card_title_icon} boxSize={4} />
          </Link>
        </HStack>
        <Text className={styles.card_desc}>{desc}</Text>
        <HStack spacing={2}>
          <Text className={styles.built_with}>Built with:</Text>
          {tools.map((tool, idx) => (
            <Tooltip key={idx} label={toCapitalize(tool)} hasArrow>
              <Image src={`/assets/icons/${tool}.svg`} boxSize={5} />
            </Tooltip>
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
