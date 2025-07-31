import { Tooltip, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { colorMap } from "@/assets/data/constants";
import { toCapitalize } from "@/utils/formatters";

export default function TechstackIcons({ imgPath, imgName, imgAlt, imgIdx, flexClass }) {
  const _animDelay = `${imgIdx}00ms`;
  const _bg = useColorModeValue(
    colorMap.light.buttonBg,
    colorMap.dark.buttonBg
  );
  const flexStyles = {
    className: flexClass,
    p: 2,
    boxSize: 20,
    borderRadius: "md",
    bg: _bg,
    style: { animationDelay: _animDelay },
  };
  return (
    <Tooltip label={toCapitalize(imgName)} placement="top" hasArrow>
      <Flex {...flexStyles}>
        <Image src={imgPath} alt={imgAlt} boxSize="65%" objectFit="contain" />
      </Flex>
    </Tooltip>
  );
}
