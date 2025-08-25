import { HStack } from "@chakra-ui/react";
import NavLink from "./NavLink";
import styles from "./Navbar.module.css";

const NavLinksContainer = () => (
  <HStack
    display={{ base: "none", md: "flex" }}
    className={styles.navlinks_container}
  >
    {[{ name: "about" }, { name: "projects" }, { name: "contact" }].map(
      (link, idx) => (
        <NavLink key={idx} linkName={link.name.toLowerCase()} />
      )
    )}
  </HStack>
);

export default NavLinksContainer;
