import { Box, Image, Stack, Text } from "@chakra-ui/react";
import Pic1 from "../../assets/Images/Image1.png";
import Pic2 from "../../assets/Images/image2.png";
import Pic3 from "../../assets/Images/image3.png";
import Pic4 from "../../assets/Images/image4.png";
import Pic5 from "../../assets/Images/image5.png";

function Banner() {
  return (
    <div>
      <Image
        w={"73%"}
        margin={"auto"}
        marginTop={"130px"}
        borderRadius={"5px"}
        src={Pic1}
        alt="Banner-1"
      />

      <Stack spacing={3} marginTop={"50px"}>
        <Text fontSize="4xl" fontWeight={"700"}>
          Top Categories to choose from
        </Text>
      </Stack>

      <Box>
        <Image
          w={"73%"}
          margin={"auto"}
          marginTop={"50px"}
          borderRadius={"5px"}
          src={Pic2}
          alt="Banner-2"
        />
      </Box>

      <Box>
        <Image
          w={"73%"}
          margin={"auto"}
          marginTop={"50px"}
          borderRadius={"5px"}
          src={Pic3}
          alt="Banner-3"
        />
      </Box>

      <Box>
        <Image
          w={"73%"}
          margin={"auto"}
          marginTop={"50px"}
          borderRadius={"5px"}
          src={Pic4}
          alt="Banner-4"
        />
      </Box>

      <Box>
        <Image
          w={"73%"}
          margin={"auto"}
          marginTop={"50px"}
          borderRadius={"5px"}
          src={Pic5}
          alt="Banner-5"
        />
      </Box>

      <Stack spacing={3} marginTop={"50px"}>
        <Text
          fontSize="4xl"
          fontWeight={"700"}
          textAlign={"start"}
          padding={"0px 80px"}
        >
          Products for you
        </Text>
      </Stack>
    </div>
  );
}

export default Banner;
