import {
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import NavLink from "./NavLink";
import { useThemeColor } from "@/assets/colors";

const NavbarDrawer = ({ isOpen, onClose }) => (
  <Drawer
    placement="right"
    onClose={onClose}
    isOpen={isOpen}
    bg={useThemeColor("bg")}
  >
    <DrawerOverlay />
    <DrawerContent bg={"rgba(255, 255, 255, 0.08)"} backdropFilter="blur(30px)">
      <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
      <DrawerBody>
        <VStack spacing={4} py={4}>
          {[{ name: "about" }, { name: "projects" }, { name: "contact" }].map(
            (link, index) => (
              <NavLink
                key={index}
                linkName={link.name.toLowerCase()}
                onClick={onClose}
              />
            )
          )}
        </VStack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default NavbarDrawer;
