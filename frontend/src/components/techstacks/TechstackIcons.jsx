import { Tooltip, Flex, Image } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";
import { toCapitalize } from "@/utils/formatters";
import styles from "./Techstacks.module.css";

const TechstackIcons = ({ imgPath, imgName, imgAlt, imgIdx, flexClass }) => {
  const btnBg = useThemeColor("btnBg");
  const flexStyles = {
    className: flexClass,
    p: 2,
    boxSize: 20,
    borderRadius: "md",
    bg: btnBg,
    style: { animationDelay: `${imgIdx}00ms` },
  };
  return (
    <Tooltip
      className="fw-600 italic"
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
