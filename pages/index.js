import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link"
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
import Section from "../components/section";

export default function Home() {
  return (
    <><Section delay={0.1}>
<Hero/>

    </Section>
      
      <Break />
      <Section delay={0.3}>
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
        <Card id="1" title="Climate Change" info="Climate Change is defined as long-term shifts in average temperatures and weather patterns for Earth’s local, regional, and global climates. These climactic changes seen throughout the planet since the 1800s have proven the undeniable fact that the main driver in rising climate change is us, primarily our excessive use of fossil fuels." desc="Jan 08, 2022 · 4min read" name="Joseph" img="https://github.com/impedaka/helloSign/blob/main/Frontend/src/pages/Assets/Avatars%20Default%20with%20Backdrop-1.png?raw=true"/>
        <Card id="2"  title="" info="" desc="March 12, 2022 · 5min read"name="Samreen" img="https://github.com/impedaka/helloSign/blob/main/Frontend/src/pages/Assets/Avatars%20Default%20with%20Backdrop-2.png?raw=true"/>
      </Center>
      <Center py={6}>
        <Card id="3" title="" info="" desc="Feb 09, 2022 · 6min read"name="Alice" img="https://github.com/impedaka/helloSign/blob/main/Frontend/src/pages/Assets/Avatars%20Default%20with%20Backdrop-3.png?raw=true"/>
        <Card id="4"  title="" info="" desc="Feb 02, 2022 · 5min read"name="Linda" img="https://github.com/impedaka/helloSign/blob/main/Frontend/src/pages/Assets/Avatars%20Default%20with%20Backdrop-4.png?raw=true"/>
      </Center>
      </Section>
      <Break />
      <Section delay="0.3">

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
          <Link href="https://www.sierraclub.org"><a>

          <Donation
          img="https://www.sierraclub.org/sites/www.sierraclub.org/files/default_images/Large-Default-PullThru-03.png"
            heading="Sierra Club"
            text="
Sierra is an organization fighting for change for our dependency on fossil fuels, preserving habitats and offering wildness treks to people across the US. They run multiple campaigns for specific causes like passing the Outdoors for All Act- expanding equitable access to the outdoors."
          />
          </a>
          </Link>
          <Link href="https://oceanconservancy.org/">
          <a>

          <Donation
            img="https://upload.wikimedia.org/wikipedia/commons/b/b0/OC_Wiki_SVG.svg"
            heading="Ocean Conservancy"
            text="Ocean conservancy is an organization working to protect the oceans and its diverse biodiversity. Their current mission is to protect manatees from deadly threats such as entanglement in marine debris."
          />
          </a>
          </Link>
        </Center>
        <Center py={6}>
          <Link href="https://www.climateemergencyfund.org/">
          <a>

          <Donation
          img="https://givingcompass.org/wp-content/uploads/2021/11/ad9cb30a-4a88-11ec-a3c6-02074da7a271.png"
            heading="Climate Emergency"
            text="Climate Emergency Fund is an organization supporting activists and protests for transformative climate change-related changes. They provide backing to the climate movement as to inspire systemic change."
          />
          </a>
          </Link>
          <Link href="https://www.fidra.org.uk">
          <a>

          <Donation
          img="https://www.fidra.org.uk/wp-content/uploads/home-bk1.jpg"
            heading="Fidra"
            text="Fidra is an organization based in the UK working on reducing plastic waste and chemical pollution in our environment. It runs multiple campaigns, targeting different problems such as microplastics in our ocean."
          />
          </a>
          </Link>
        </Center></Box>
      </Section>
        <Break />
    </>
  );
}
