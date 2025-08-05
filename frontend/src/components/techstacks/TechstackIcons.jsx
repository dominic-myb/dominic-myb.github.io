import { Tooltip, Flex, Image } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";
import { toCapitalize } from "@/utils/formatters";

export default function TechstackIcons({
  imgPath,
  imgName,
  imgAlt,
  imgIdx,
  flexClass,
}) {
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
    <Tooltip label={toCapitalize(imgName)} placement="top" hasArrow>
      <Flex {...flexStyles}>
        <Image
          src={imgPath}
          alt={imgAlt}
          boxSize="65%"
          objectFit="contain"
          loading="lazy"
        />
      </Flex>
    </Tooltip>
  );
}
