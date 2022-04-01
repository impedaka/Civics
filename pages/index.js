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
          <Donation
            heading="Sierra Club"
            text="
Sierra is an organization fighting for change for our dependency on fossil fuels, preserving habitats and offering wildness treks to people across the US. They run multiple campaigns for specific causes like passing the Outdoors for All Act- expanding equitable access to the outdoors."
          />
          <Donation
            heading="Ocean Conservancy"
            text="Ocean conservancy is an organization working to protect the oceans and its diverse biodiversity. Their current mission is to protect manatees from deadly threats such as entanglement in marine debris."
          />
        </Center>
        <Center py={6}>
          <Donation
            heading="Climate Emergency"
            text="Climate Emergency Fund is an organization supporting activists and protests for transformative climate change-related changes. They provide backing to the climate movement as to inspire systemic change."
          />
          <Donation
            heading="Fidra"
            text="Fidra is an organization based in the UK working on reducing plastic waste and chemical pollution in our environment. It runs multiple campaigns, targeting different problems such as microplastics in our ocean."
          />
        </Center>
        <Break />
      </Box>
      <Footer />
    </>
  );
}
