import { Heading, useBreakpointValue } from "@chakra-ui/react";
import { useThemeConstantColor } from "@/assets/colors";
import styles from "./Navbar.module.css";

const NavLogo = ({ ...props }) => (
  <Heading
    className={`${styles.logo} no-select`}
    fontSize={useBreakpointValue({ base: 24, md: 28 })}
    bgGradient={useThemeConstantColor("logo", "light")}
    {...props}
  >
    _dominic
  </Heading>
);

export default NavLogo;
