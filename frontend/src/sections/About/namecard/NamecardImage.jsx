import { Box, Image } from '@chakra-ui/react';
import ProfilePicture from '@/assets/profile-picture.jpg';

function NamecardImage() {
  return (
    <Box className="profile-pic-container" cursor="pointer">
      <Image
        src={ProfilePicture}
        alt="profile-picture"
        boxSize={{ base: '100px', md: '150px' }}
        maxWidth={150}
        borderRadius="full"
        objectFit="cover"
      />
    </Box>
  );
}

export default NamecardImage;
