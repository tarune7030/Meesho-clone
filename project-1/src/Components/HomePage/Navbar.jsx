import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { TfiMobile } from "react-icons/tfi";

import { Search2Icon, HamburgerIcon } from "@chakra-ui/icons";
import Header from "./Header";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      bg="white"
      w="100%"
      border={{
        base: "border none",
      }}
      h={{ xl: "70px", md: "75px", sm: "75px" }}
      position={"fixed"}
      background={"white"}
    >
      <Flex w="100%" alignItems="center" gap="2">
        <Show below="sm">
          <Button ref={btnRef} backgroundColor={"white"} onClick={onOpen}>
            <HamburgerIcon />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Heading
                  size={"xl"}
                  marginLeft={{ xl: "104px", sm: "10px" }}
                  color={"rgb(244, 51, 151)"}
                >
                  Meesho
                </Heading>
              </DrawerHeader>

              <DrawerBody>
                <Input placeholder="Type here..." />
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Show>
        <Show above="sm">
          <Box p="3">
            <Heading
              size={"xl"}
              marginLeft={{ xl: "104px", sm: "10px" }}
              color={"rgb(244, 51, 151)"}
            >
              Meesho
            </Heading>
          </Box>
        </Show>
        <InputGroup w={{ base: "80%", sm: "20%", md: "27%", xl: "27%" }}>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon marginTop={"10px"} color="gray.300" />}
          />
          <Input
            h={{ base: "40px", sm: "50px" }}
            borderColor={"gray.300"}
            type="search"
            placeholder="Search"
            focusBorderColor="gray.300"
          />
        </InputGroup>

        <Show above="md">
          <Flex ml={"15%"}>
            <TfiMobile style={{ marginTop: "9px", fontSize: "20px" }} />
            <Box
              style={{
                width: "130px",
                height: "100%",
                marginTop: "5px",
                cursor: "pointer",
              }}
            >
              <p>Download App</p>
            </Box>
            <Box
              style={{
                width: "10px",
                height: "40px",
                borderRight: "2px solid rgb(230, 227, 227)",
              }}
            ></Box>
            <Box
              style={{
                padding: "0px 25px",
                marginTop: "5px",
                cursor: "pointer",
              }}
            >
              <p>Become a Supplier</p>
            </Box>
            <Box
              style={{
                width: "10px",
                height: "40px",
                borderRight: "2px solid rgb(230 227 227)",
              }}
            ></Box>
            <Box
              style={{
                padding: "0px 20px",
                marginTop: "5px",
                cursor: "pointer",
              }}
            >
              Login
            </Box>
            <Box
              style={{
                padding: "0px 20px",
                marginTop: "5px",
                cursor: "pointer",
              }}
            >
              Cart
            </Box>
          </Flex>
        </Show>
      </Flex>
      <Header />
    </Box>
  );
}

export default Navbar;
