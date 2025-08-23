import { Image } from "@chakra-ui/react";
import styles from "./Card.module.css";

// TODO: add another param for the alt labeling

const CardImage = ({ image }) => (
  <Image
    src={`/assets/projects/${image}.jpg`}
    alt={"sample"}
    className={styles.image}
  />
);

export default CardImage;
