import { Link } from "@chakra-ui/react";
import styles from "./Navbar.module.css";

const NavLink = ({ linkName, isActive }) => {
  return (
    <Link
      className={`${styles.navlink} no-select ${isActive ? styles.active : ""}`}
      href={`#${linkName}`}
      fontSize={{ base: 16, lg: 18 }}
    >
      {linkName}
    </Link>
  );
};

export default NavLink;
