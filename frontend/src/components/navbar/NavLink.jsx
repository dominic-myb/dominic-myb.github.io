import { Link } from "@chakra-ui/react";
import styles from "./Navbar.module.css";

const NavLink = ({ linkName }) => {
  return (
    <Link
      className={`${styles.navlink} no-select`}
      href={`#${linkName.toLowerCase()}`}
      fontSize={{ base: 16, lg: 18 }}
    >
      {linkName}
    </Link>
  );
};

export default NavLink;
