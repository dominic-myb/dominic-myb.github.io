import { HStack, Text, Tooltip, Image } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";
import { toCapitalize } from "@/utils/formatters";
import styles from "./Card.module.css";

// Parameters tools which has iconLabel, iconPath
// Make new Component for Tooltip then iterate the list

const CardTools = ({ tools }) => (
  <HStack spacing={2}>
    <Text className={styles.built_with} color={useThemeColor("smallFont")}>
      Built with:
    </Text>
    {tools.map((tool, idx) => (
      <Tooltip key={idx} label={toCapitalize(tool)} hasArrow>
        <Image src={`/assets/icons/${tool}.svg`} boxSize={5} />
      </Tooltip>
    ))}
  </HStack>
);

export default CardTools;
