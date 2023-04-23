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
          >
            Women Ethnic
          </MenuButton>
          <MenuList
            w={"1300px"}
            marginTop={"-9px"}
            borderRadius={"none"}
            onMouseOver={() => setWomenEthnic(true)}
            onMouseLeave={() => setWomenEthnic(false)}
          >
            <Grid templateColumns="repeat(6, 1fr)">
              <GridItem w="auto" h="auto">
                <p
                  style={{
                    fontWeight: "bold",
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
                    fontWeight: "bold",
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
                    background={"rgb(249,249,249)"}
                    color={"#718096"}
                    _hover={{ color: "black" }}
                  >
                    Link 1
                  </MenuItem>
                  <MenuItem as="a" href="#" background={"rgb(249,249,249)"}>
                    Link 2
                  </MenuItem>
                  <MenuItem as="a" href="#" background={"rgb(249,249,249)"}>
                    Link 2
                  </MenuItem>
                  <MenuItem as="a" href="#" background={"rgb(249,249,249)"}>
                    Link 2
                  </MenuItem>
                  <MenuItem as="a" href="#" background={"rgb(249,249,249)"}>
                    Link 2
                  </MenuItem>
                  <MenuItem as="a" href="#" background={"rgb(249,249,249)"}>
                    Link 2
                  </MenuItem>
                  <MenuItem as="a" href="#" background={"rgb(249,249,249)"}>
                    Link 2
                  </MenuItem>
                  <MenuItem as="a" href="#" background={"rgb(249,249,249)"}>
                    Link 2
                  </MenuItem>
                </MenuList>
              </GridItem>
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "bold",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Kurtis
                </p>
                <MenuItem as="a" href="#" background>
                  Link 1
                </MenuItem>
                <MenuItem as="a" href="#">
                  Link 2
                </MenuItem>
                <MenuItem as="a" href="#">
                  Link 2
                </MenuItem>
                <MenuItem as="a" href="#">
                  Link 2
                </MenuItem>
                <MenuItem as="a" href="#">
                  Link 2
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Kurta Sets
                </p>
                <MenuItem as="a" href="#" background>
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto">
                <p
                  style={{
                    fontWeight: "bold",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Suits & Dress Material
                </p>
                <MenuItem as="a" href="#" background>
                  Link 1
                </MenuItem>
                <MenuItem as="a" href="#" background>
                  Link 1
                </MenuItem>
                <MenuItem as="a" href="#" background>
                  Link 1
                </MenuItem>
                <MenuItem as="a" href="#" background>
                  Link 1
                </MenuItem>
              </GridItem>
              <GridItem w="100%" h="auto" background={"rgb(249,249,249)"}>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "rgb(244, 51, 151)",
                    textAlign: "start",
                    padding: "0px 15px",
                  }}
                >
                  Other Ethnic
                </p>
                <MenuItem as="a" href="#" background>
                  Link 1
                </MenuItem>
                <MenuItem as="a" href="#" background>
                  Link 1
                </MenuItem>
                <MenuItem as="a" href="#" background>
                  Link 1
                </MenuItem>
                <MenuItem as="a" href="#" background>
                  Link 1
                </MenuItem>
                <MenuItem as="a" href="#" background>
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
          >
            Women Western
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setWomenWestern(true)}
            onMouseLeave={() => setWomenWestern(false)}
          >
            <Grid templateColumns="repeat(6, 1fr)" gap={1}>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Topwear
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Bottomwear
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Innerwear
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Sleepwear
                </p>
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
          >
            Men
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setMen(true)}
            onMouseLeave={() => setMen(false)}
          >
            <Grid templateColumns="repeat(6, 1fr)" gap={1}>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Topwear
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Bottomwear
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Men Accessories
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Men Footwear
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Etnic Wear
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Inner & Sleep Wear
                </p>
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
          >
            Kids
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setKids(true)}
            onMouseLeave={() => setKids(false)}
          >
            <Grid templateColumns="repeat(6, 1fr)" gap={1}>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Boys & Girls 2+ Years
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Infant 0-2 Years
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Toys & Accessories
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Baby Care
                </p>
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
          >
            Home & Kitchen
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setHome(true)}
            onMouseLeave={() => setHome(false)}
          >
            <Grid templateColumns="repeat(6, 1fr)" gap={1}>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Home Furnishing
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Home Decor
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Kitchen & Dining
                </p>
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
          >
            Beauty & Health
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setBeauty(true)}
            onMouseLeave={() => setBeauty(false)}
          >
            <Grid templateColumns="repeat(6, 1fr)" gap={1}>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Make Up
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Wellness
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Skincare
                </p>
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
          >
            Jewellery & Accessories
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setJewellery(true)}
            onMouseLeave={() => setJewellery(false)}
          >
            <Grid templateColumns="repeat(6, 1fr)" gap={1}>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Jewellery
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Women Accessory
                </p>
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
          >
            Bags & Footwear
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setBags(true)}
            onMouseLeave={() => setBags(false)}
          >
            <Grid templateColumns="repeat(6, 1fr)" gap={1}>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Women Bags
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Men Bags
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Men Footwear
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Women Footwear
                </p>
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
          >
            Electronics
          </MenuButton>
          <MenuList
            marginTop={"-8px"}
            borderRadius={"none"}
            onMouseOver={() => setElectronics(true)}
            onMouseLeave={() => setElectronics(false)}
          >
            <Grid templateColumns="repeat(6, 1fr)" gap={1}>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Mobile & Accessories
                </p>
              </GridItem>
              <GridItem w="100%" h="auto" border={"1px"}>
                <p style={{ fontWeight: "bold", color: "rgb(244, 51, 151)" }}>
                  Appliances
                </p>
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
