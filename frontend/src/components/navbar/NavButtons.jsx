import { HStack, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";

const NavButtons = ({ colorMode, onToggleColorMode, onOpenDrawer }) => (
  <HStack>
    <IconButton
      onClick={onToggleColorMode}
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    />
    <IconButton
      display={{ base: "flex", md: "none" }}
      icon={<HamburgerIcon />}
      onClick={onOpenDrawer}
      aria-label="Open menu"
      variant="ghost"
    />
  </HStack>
);

export default NavButtons;
