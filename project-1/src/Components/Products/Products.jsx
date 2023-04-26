import { Box, Flex, FormControl, Select } from "@chakra-ui/react";

function Products() {
  return (
    <>
      <Flex w={"100%"} h={"300px"} marginTop={"20px"}>
        <Box marginLeft={"80px"}>
          {/* <Menu>
            <MenuButton
              as={Button}
              rightIcon={
                <ChevronDownIcon fontSize={"30px"} color={"#4A5568"} />
              }
              w={"350px"}
              textAlign={"start"}
              background={"white"}
              color={"gray.400"}
              border={"1px solid #E2E8F0"}
              borderRadius={"5px"}
            >
              Sort by :
              <span style={{ fontWeight: "500", color: "black" }}> Price</span>
            </MenuButton>
            <MenuList>
              <MenuItem>Price (High to Low)</MenuItem>
              <MenuItem>Price (Low to High)</MenuItem>
            </MenuList>
          </Menu> */}
          <FormControl>
            <Select
              placeholder="Sort by : Price"
              w={"350px"}
              background={"white"}
              color={"gray.600"}
              border={"1px solid #E2E8F0"}
              borderRadius={"5px"}
              focusBorderColor="gray.300"
            >
              <option>Price (High to Low)</option>
              <option color="black">Price (Low to High)</option>
            </Select>
          </FormControl>
        </Box>
        <Box></Box>
      </Flex>
    </>
  );
}
export default Products;
