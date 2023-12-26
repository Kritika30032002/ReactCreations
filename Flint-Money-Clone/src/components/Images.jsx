import { Box, Image, keyframes, Stack } from "@chakra-ui/react";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const Images = () => {
  const rotate = keyframes`
    0% { transform: translateY(6px); }
    25% { transform: translateY(10px); }
    50% { transform: translateY(15px); }
    75% { transform: translateY(10px); }
    100% { transform: translateY(6px); }
  `;

  const imageStyle = {
    w: "150px",
    h: "150px",
    maxW: "25vw",
    maxH: "25vw",
    pos: "absolute",
    zIndex: "0",
    animation: `${rotate} 4s linear infinite`,
  };

  return (
    <Stack pos="absolute" w="100vw">
      <Image
        src={image1}
        alt='image1'
        sx={imageStyle}
        top={{ base: "120px", md: "100px", lg: "80px" }}
        left={{ base: "20px", md: "50px", lg: "130px" }}
      />
      <Image
        src={image2}
        alt='image2'
        sx={imageStyle}
        top={{ base: "120px", md: "100px", lg: "80px" }}
        right={{ base: "20px", md: "50px", lg: "130px" }}
      />
      <Image
        src={image3}
        alt='image3'
        sx={imageStyle}
        bottom={{ base: "-620px", md: "-600px", lg: "-580px" }}
      />
      <Image
        src={image4}
        alt='image4'
        sx={imageStyle}
        bottom={{ base: "-620px", md: "-600px", lg: "-580px" }}
        right="0px"
      />
    </Stack>
  );
};

export default Images;
