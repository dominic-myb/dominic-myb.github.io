import { useEffect, useState } from "react";
import { HStack } from "@chakra-ui/react";
import NavLink from "./NavLink";
import styles from "./Navbar.module.css";

const links = ["about", "projects", "contact"];

const NavLinksContainer = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = entries.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current
        );

        if (mostVisible.isIntersecting) {
          setActive(mostVisible.target.id);
        }
      },
      { threshold: 0.5 }
    );

    links.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <HStack
      display={{ base: "none", md: "flex" }}
      className={styles.navlinks_container}
    >
      {links.map((link, idx) => (
        <NavLink
          key={idx}
          linkName={link.toLowerCase()}
          isActive={active === link}
        />
      ))}
    </HStack>
  );
};

export default NavLinksContainer;
