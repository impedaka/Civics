import React from "react";
import Link from "next/link";
import { Box, Stack, Text, Heading, Avatar } from "@chakra-ui/react";
const Card = (props) => {
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
    > <Link  href={`/blogs/${encodeURIComponent(props.id)}`}>
      <a>


      <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={14} pos={"relative"}>
        <img
          src={
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        />
      </Box>
      <Stack pt={10} >
        <Text
          color="green.500"
          textTransform="uppercase"
          fontWeight={800}
          fontSize="sm"
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
      <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
        <Avatar
          src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
          alt={"Author"}
        />
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text fontWeight={600}>Achim Rolle</Text>
          <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
        </Stack>
      </Stack>
      </a>
    </Link>
    </Box>
  );
};

export default Card;
