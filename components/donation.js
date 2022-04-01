import React from "react";
import { Box, Stack, Text, Heading, Avatar } from "@chakra-ui/react";
const Donation = () => {
  return (
    <Box
      maxW={"445px"}
      w={"full"}
      bg={"white"}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      mr={9}
      overflow={"hidden"}
    >
      <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
        <img
          src={
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        />
      </Box>
      <Stack>
        <Text
          color={"green.500"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          Blog
        </Text>
        <Heading color={"grey.700"} fontSize={"2xl"} fontFamily={"body"}>
          Boost your conversion rate
        </Heading>
        <Text color={"gray.500"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </Text>
      </Stack>
    </Box>
  );
};

export default Donation;
