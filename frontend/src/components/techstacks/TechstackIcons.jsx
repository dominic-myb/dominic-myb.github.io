import { Tooltip, Flex, Image } from "@chakra-ui/react";
import { toCapitalize } from "@/utils/formatters";
import styles from "./Techstacks.module.css";

const TechstackIcons = ({ imgPath, imgName, imgAlt, imgIdx, flexClass }) => {
  const flexStyles = {
    className: `${flexClass} ${styles.image_wrapper}`,
    boxSize: 20,
    style: { animationDelay: `${imgIdx}00ms` },
  };
  return (
    <Tooltip
      className={styles.tooltip}
      label={toCapitalize(imgName)}
      placement="top"
      hasArrow
    >
      <Flex {...flexStyles}>
        <Image
          className={`${styles.icon_image} no-select`}
          src={imgPath}
          alt={imgAlt}
          boxSize="65%"
          draggable="false"
          loading="lazy"
        />
      </Flex>
    </Tooltip>
  );
};

export default TechstackIcons;
