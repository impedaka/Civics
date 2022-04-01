import React from "react";
import { Box, Stack, Text, Heading, Avatar } from "@chakra-ui/react";
const Donation = (props) => {
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
      <Box h="auto" bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
        <img
          src={
            props.img
          }
        />
      </Box>
      <Stack >
                <Text
          color="green.500"
          textTransform="uppercase"
          fontWeight={800}
          fontSize="sm"
          letterSpacing={1.1}
        >
          Charity
        </Text>
        <Heading color={"grey.700"} fontSize={"2xl"} fontFamily={"body"}>
          {props.heading}
        </Heading>
        
        <Text color={"gray.500"}>{props.text}</Text>
      </Stack>
    </Box>
  );
};

export default Donation;
