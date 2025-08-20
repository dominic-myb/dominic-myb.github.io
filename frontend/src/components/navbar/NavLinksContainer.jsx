import { HStack } from "@chakra-ui/react";
import NavLink from "./NavLink";

const NavLinksContainer = () => (
  <HStack
    display={{ base: "none", md: "flex" }}
    justifyContent="flex-end"
    gap={6}
  >
    {[{ name: "about" }, { name: "projects" }, { name: "contact" }].map(
      (link, idx) => (
        <NavLink key={idx} linkName={link.name.toLowerCase()} />
      )
    )}
  </HStack>
);

export default NavLinksContainer;
