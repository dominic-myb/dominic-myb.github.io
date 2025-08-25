import { Box, Image } from "@chakra-ui/react";
import styles from "./Namecard.module.css";

const NamecardImage = ({ avatar }) => (
  <Box className={styles.image_container}>
    <Image
      src={avatar}
      alt="My Avatar"
      loading="lazy"
      className={styles.image_avatar}
      boxSize={{ base: "100px", md: "150px" }}
    />
  </Box>
);

export default NamecardImage;
