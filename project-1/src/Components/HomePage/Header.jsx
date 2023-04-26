import {
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";

function Header() {
  const [WomenEthnic, setWomenEthnic] = useState(false);
  const [WomenWestern, setWomenWestern] = useState(false);
  const [Men, setMen] = useState(false);
  const [Kids, setKids] = useState(false);
  const [Home, setHome] = useState(false);
  const [Beauty, setBeauty] = useState(false);
  const [Jewellery, setJewellery] = useState(false);
  const [Bags, setBags] = useState(false);
  const [Electronics, setElectronics] = useState(false);

  return (
    <Box
      bg="white"
      w="100%"
      border={{
        base: "border none",
        xl: "1px solid rgb(204, 204, 204)",
        md: "1px solid rgb(204, 204, 204)",
        lg: "1px solid rgb(204, 204, 204)",
      }}
      h={{ xl: "50px", md: "50px", sm: "50px" }}
    >
      <Flex justifyContent={"space-evenly"} padding={"0px 60px"}>
        <Menu isOpen={WomenEthnic}>
          <MenuButton
            h={"50px"}
            onMouseLeave={() => setWomenEthnic(false)}
            onMouseOver={() => setWomenEthnic(true)}
            _hover={{
              borderBottom: "3px solid rgb(244, 51, 151)",
              color: "rgb(244, 51, 151)",
              fontWeight: "500",
            }}
            fontWeight={"400"}
          >
            Women Ethnic
          </MenuButton>
          <MenuList
            w={"1300px"}
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setWomenEthnic(true)}
            onMouseLeave={() => setWomenEthnic(false)}
          >
            <Grid templateColumns="repeat(6, 1fr)">
              <GridItem w="auto" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    padding: "0px 15px",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                  }}
                >
                  All Women Ethnic
                </p>
                <MenuItem as="a" href="#">
                  View All
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    textAlign: "start",
                    padding: "0px 15px",
                    color: "rgb(244, 51, 151)",
                  }}
                >
                  Sarees
                </p>
                <MenuList
                  borderRadius={"none"}
                  background={"rgb(249,249,249)"}
                  border={"none"}
                >
                  <MenuItem
                    as="a"
                    href="#"
                    color={"#718096"}
                    _hover={{ color: "black" }}
                    background={"rgb(249,249,249)"}
                  >
                    Link 1
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="#"
                    color={"#718096"}
                    _hover={{ color: "black" }}
                    background={"rgb(249,249,249)"}
                  >
                    Link 1
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="#"
                    color={"#718096"}
                    _hover={{ color: "black" }}
                    background={"rgb(249,249,249)"}
                  >
                    Link 1
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="#"
                    color={"#718096"}
                    _hover={{ color: "black" }}
                    background={"rgb(249,249,249)"}
                  >
                    Link 1
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="#"
                    color={"#718096"}
                    _hover={{ color: "black" }}
                    background={"rgb(249,249,249)"}
                  >
                    Link 1
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="#"
                    color={"#718096"}
                    _hover={{ color: "black" }}
                    background={"rgb(249,249,249)"}
                  >
                    Link 1
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="#"
                    color={"#718096"}
                    _hover={{ color: "black" }}
                    background={"rgb(249,249,249)"}
                  >
                    Link 1
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="#"
                    color={"#718096"}
                    _hover={{ color: "black" }}
                    background={"rgb(249,249,249)"}
                  >
                    Link 1
                  </MenuItem>
                </MenuList>
              </GridItem>
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Kurtis
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Kurta Sets
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Suits & Dress Material
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Other Ethnic
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
              </GridItem>
            </Grid>
          </MenuList>
        </Menu>

        {/* ............................................. */}

        <Menu isOpen={WomenWestern}>
          <MenuButton
            h={"50px"}
            onMouseLeave={() => setWomenWestern(false)}
            onMouseOver={() => setWomenWestern(true)}
            _hover={{
              borderBottom: "3px solid rgb(244, 51, 151)",
              color: "rgb(244, 51, 151)",
              fontWeight: "500",
            }}
            fontWeight={"400"}
          >
            Women Western
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setWomenWestern(true)}
            onMouseLeave={() => setWomenWestern(false)}
          >
            <Grid templateColumns="repeat(6, 1fr)">
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Topwear
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Bottomwear
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Innerwear
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Sleepwear
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
              </GridItem>
            </Grid>
          </MenuList>
        </Menu>

        {/* ............................................. */}

        <Menu isOpen={Men}>
          <MenuButton
            h={"50px"}
            onMouseLeave={() => setMen(false)}
            onMouseOver={() => setMen(true)}
            _hover={{
              borderBottom: "3px solid rgb(244, 51, 151)",
              color: "rgb(244, 51, 151)",
              fontWeight: "500",
            }}
            fontWeight={"400"}
          >
            Men
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setMen(true)}
            onMouseLeave={() => setMen(false)}
          >
            <Grid templateColumns="repeat(6, 1fr)">
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Topwear
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Bottomwear
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Men Accessories
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Men Footwear
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Etnic Wear
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Inner & Sleep Wear
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
              </GridItem>
            </Grid>
          </MenuList>
        </Menu>

        {/* **************************************************** */}

        <Menu isOpen={Kids}>
          <MenuButton
            h={"50px"}
            onMouseLeave={() => setKids(false)}
            onMouseOver={() => setKids(true)}
            _hover={{
              borderBottom: "3px solid rgb(244, 51, 151)",
              color: "rgb(244, 51, 151)",
              fontWeight: "500",
            }}
            fontWeight={"400"}
          >
            Kids
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setKids(true)}
            onMouseLeave={() => setKids(false)}
          >
            <Grid templateColumns="repeat(6, 1fr)">
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Boys & Girls 2+ Years
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Infant 0-2 Years
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Toys & Accessories
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Baby Care
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
              </GridItem>
            </Grid>
          </MenuList>
        </Menu>

        {/* **************************************************** */}

        <Menu isOpen={Home}>
          <MenuButton
            h={"50px"}
            onMouseLeave={() => setHome(false)}
            onMouseOver={() => setHome(true)}
            _hover={{
              borderBottom: "3px solid rgb(244, 51, 151)",
              color: "rgb(244, 51, 151)",
              fontWeight: "500",
            }}
            fontWeight={"400"}
          >
            Home & Kitchen
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setHome(true)}
            onMouseLeave={() => setHome(false)}
          >
            <Grid templateColumns="repeat(6, 1fr)">
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Home Furnishing
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Home Decor
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Kitchen & Dining
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
            </Grid>
          </MenuList>
        </Menu>

        {/* **************************************************** */}

        <Menu isOpen={Beauty}>
          <MenuButton
            h={"50px"}
            onMouseLeave={() => setBeauty(false)}
            onMouseOver={() => setBeauty(true)}
            _hover={{
              borderBottom: "3px solid rgb(244, 51, 151)",
              color: "rgb(244, 51, 151)",
              fontWeight: "500",
            }}
            fontWeight={"400"}
          >
            Beauty & Health
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setBeauty(true)}
            onMouseLeave={() => setBeauty(false)}
          >
            <Grid templateColumns="repeat(6, 1fr)">
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Make Up
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Wellness
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Skincare
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
            </Grid>
          </MenuList>
        </Menu>

        {/* **************************************************** */}

        <Menu isOpen={Jewellery}>
          <MenuButton
            h={"50px"}
            onMouseLeave={() => setJewellery(false)}
            onMouseOver={() => setJewellery(true)}
            _hover={{
              borderBottom: "3px solid rgb(244, 51, 151)",
              color: "rgb(244, 51, 151)",
              fontWeight: "500",
            }}
            fontWeight={"400"}
          >
            Jewellery & Accessories
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setJewellery(true)}
            onMouseLeave={() => setJewellery(false)}
          >
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Jewellery
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Women Accessory
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
              </GridItem>
            </Grid>
          </MenuList>
        </Menu>

        {/* **************************************************** */}

        <Menu isOpen={Bags}>
          <MenuButton
            h={"50px"}
            onMouseLeave={() => setBags(false)}
            onMouseOver={() => setBags(true)}
            _hover={{
              borderBottom: "3px solid rgb(244, 51, 151)",
              color: "rgb(244, 51, 151)",
              fontWeight: "500",
            }}
            fontWeight={"400"}
          >
            Bags & Footwear
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setBags(true)}
            onMouseLeave={() => setBags(false)}
          >
            <Grid templateColumns="repeat(5, 1fr)">
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Women Bags
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Men Bags
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Men Footwear
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Women Footwear
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
              </GridItem>
            </Grid>
          </MenuList>
        </Menu>

        {/* **************************************************** */}

        <Menu isOpen={Electronics}>
          <MenuButton
            h={"50px"}
            onMouseLeave={() => setElectronics(false)}
            onMouseOver={() => setElectronics(true)}
            _hover={{
              borderBottom: "3px solid rgb(244, 51, 151)",
              color: "rgb(244, 51, 151)",
              fontWeight: "500",
            }}
            fontWeight={"400"}
          >
            Electronics
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setElectronics(true)}
            onMouseLeave={() => setElectronics(false)}
          >
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Mobile & Accessories
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                >
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "500",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Appliances
                </p>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
                <MenuItem
                  as="a"
                  href="#"
                  color={"#718096"}
                  _hover={{ color: "black" }}
                  background={"rgb(249,249,249)"}
                >
                  Link 1
                </MenuItem>
              </GridItem>
            </Grid>
          </MenuList>
        </Menu>

        {/* **************************************************** */}
      </Flex>
    </Box>
  );
}

export default Header;
