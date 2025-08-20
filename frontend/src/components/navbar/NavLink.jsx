import { Link, useColorModeValue } from "@chakra-ui/react";
import { colorMap } from "@/assets/colors";
import styles from "./Navbar.module.css";

const NavLink = ({ linkName }) => {
  const pseudoClassColors = {
    bg: useColorModeValue(
      colorMap.invertColor.dark,
      colorMap.invertColor.light
    ),
    color: useColorModeValue(
      colorMap.invertColor.light,
      colorMap.invertColor.dark
    ),
  };
  return (
    <Link
      className={`${styles.navlink} no-select`}
      href={`#${linkName.toLowerCase()}`}
      fontSize={{ base: 16, lg: 18 }}
      borderRadius="xl"
      _hover={pseudoClassColors}
      _focus={pseudoClassColors}
    >
      {linkName}
    </Link>
  );
};

export default NavLink;
