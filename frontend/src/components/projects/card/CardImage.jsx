import { Image } from "@chakra-ui/react";
import styles from "./Card.module.css";

// TODO: add another param for the alt labeling

const CardImage = ({ image, alt }) => (
  <Image
    src={`/assets/projects/${image}.jpg`}
    alt={`Image of my project ${alt}`}
    className={styles.image}
  />
);

export default CardImage;
