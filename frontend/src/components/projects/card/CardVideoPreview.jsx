import { forwardRef } from "react";
import { Box } from "@chakra-ui/react";
import styles from "./Card.module.css";

const CardVideoPreview = forwardRef(({ src }, ref) => {
  return (
    <Box
      as="video"
      ref={ref}
      muted
      loop
      playsInline
      preload="metadata"
      className={styles.card_video}
    >
      <source src={`/assets/projects/${src}.webm`} type="video/webm" />
      <source src={`/assets/projects/${src}.mp4`} type="video/mp4" />
    </Box>
  );
});

export default CardVideoPreview;
