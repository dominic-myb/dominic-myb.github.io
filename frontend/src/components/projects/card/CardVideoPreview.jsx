import { forwardRef } from "react";
import { Box } from "@chakra-ui/react";
import styles from "./Card.module.css";

const CardVideoPreview = forwardRef(({ src, ...props }, ref) => {
  return (
    <Box
      as="video"
      ref={ref}
      src={src}
      muted
      loop
      preload="metadata"
      className={styles.card_video}
      {...props}
    />
  );
});

export default CardVideoPreview;
