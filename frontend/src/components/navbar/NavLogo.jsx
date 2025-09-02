import { Heading, useBreakpointValue } from "@chakra-ui/react";
import styles from "./Navbar.module.css";

const NavLogo = ({ ...props }) => (
  <Heading
    className={`${styles.logo} no-select`}
    fontSize={useBreakpointValue({ base: 24, md: 28 })}
    {...props}
  >
    @dominic-esguerra
  </Heading>
);

export default NavLogo;
