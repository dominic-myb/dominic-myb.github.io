import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";

import { NavigationLink } from "./Navbar";

function NavbarDrawer({ isOpen, onClose }) {
  function toCapitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
        <DrawerBody>
          <VStack spacing={4} py={4}>
            {[{ name: "about" }, { name: "projects" }, { name: "contact" }].map(
              (link, index) => (
                <NavigationLink
                  key={index}
                  linkName={toCapitalize(link.name)}
                  onClick={onClose}
                />
              )
            )}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default NavbarDrawer;
