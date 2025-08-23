import { HStack, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useThemeColor } from "@/assets/colors";
import styles from "./Card.module.css";

const CardTitle = ({ title }) => (
  <HStack>
    <Link className={styles.card_title} color={useThemeColor("titleFont")}>
      {title}
      <ExternalLinkIcon className={styles.card_title_icon} boxSize={4} />
    </Link>
  </HStack>
);

export default CardTitle;
