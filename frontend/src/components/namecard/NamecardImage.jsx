import { Box, Image } from "@chakra-ui/react";

export default function NamecardImage({avatar}) {
  return (
    <Box className="avatar-container" cursor="pointer">
      <Image
        src={avatar}
        alt="My Avatar"
        boxSize={{ base: "100px", md: "150px" }}
        maxWidth="150"
        borderRadius="full"
        objectFit="cover"
      />
    </Box>
  );
}
