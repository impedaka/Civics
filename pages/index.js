import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Center,
  Container,
  Avatar,
} from "@chakra-ui/react";
import Card from "../components/card";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import Donation from "../components/donation";
import Break from "../components/Break";

export default function Home() {
  return (
    <>
      <Hero />
      <Break />
      <Stack
        mt={20}
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
      >
        <Heading fontSize={"6xl"}>LEARN.</Heading>
        <Text color={"gray.600"} fontSize={"4xl"}>
          Make an Impact in Your Community.
        </Text>
      </Stack>
      <Break />
      <Center py={6}>
        <Card />
        <Card />
      </Center>
      <Center py={6}>
        <Card />
        <Card />
      </Center>
      <Break />
      <Box bg="green.400">
        <Stack
          mt={20}
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
        >
          <Break />
          <Heading fontSize={"6xl"} color={"white"}>
            GIVE.
          </Heading>
          <Text color={"white"} fontSize={"4xl"}>
            Help Our World Become a Better Place.
          </Text>
        </Stack>
        <Break />
        <Center py={6}>
          <Donation />
          <Donation />
        </Center>
        <Center py={6}>
          <Donation />
          <Donation />
        </Center>
        <Break />
      </Box>
      <Footer />
    </>
  );
}
