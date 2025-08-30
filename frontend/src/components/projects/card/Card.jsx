import { useRef } from "react";
import { VStack } from "@chakra-ui/react";
import CardContainer from "./CardContainer";
import CardImageWrapper from "./CardImageWrapper";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardDesc from "./CardDesc";
import CardTools from "./CardTools";
import CardVideoPreview from "./CardVideoPreview";
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
    <CardContainer>
      <CardImageWrapper
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      >
        <CardImage image={image} alt={title} />
        <CardVideoPreview src={src} ref={videoRef} />
      </CardImageWrapper>
      <VStack className={styles.card_wrapper}>
        <CardTitle title={title} />
        <CardDesc desc={desc} />
        <CardTools tools={tools} />
      </VStack>
    </CardContainer>
  );
};

export default Card;
