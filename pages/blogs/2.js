import { Link, Image, Container, Heading, VStack, Text, OrderedList, ListIcon, ListItem, Breadcrumb } from '@chakra-ui/react'
import React from 'react'
import Break from "../../components/Break";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Author from '../../components/Author';
const blog2 = () => {
  return (
  <Container maxW="container.md" pt={14}>
    <Break/>
    <VStack align="start" spacing={3}>
      <Heading>
        Air Pollution
      </Heading>
      
 <Author name="Samreen" date={new Date('2021-04-06T19:01:27Z')} img="https://github.com/impedaka/helloSign/blob/main/Frontend/src/pages/Assets/Avatars%20Default%20with%20Backdrop-2.png?raw=true"/> 
        <Image borderRadius="lg" w="full" src={"https://media.discordapp.net/attachments/958826350381248562/960947886986776596/IMG_2187.jpg"} alt={"a"} mb={4} />
      <Text>
Air pollution affects our health, the environment, building structure and the economy. Natural sources of air pollution include forest fires, volcanoes, and emissions of volatile organic compounds from vegetation. However, human activities cause more air pollution. Approximately 65% of the air pollution is caused by humans such as transportation, off-road vehicles and mobile activities, electrical utilities, industrial processes such as oil and gas production. Air pollution kills an estimated seven million people worldwide every year. The World Health Organization shows that most of the global population (99%) breathe air that has elevated levels of pollutants. Ambient air pollution causes an estimate of 4.2 million deaths per year due to strokes, heart diseases, lung cancer and acute and chronic respiratory diseases. 
      
      </Text>
<Break/>
        <Image borderRadius="lg" w="full" src={"https://media.discordapp.net/attachments/958826350381248562/960947887179726868/IMG_2188.jpg"} alt={"a"} mb={4} />
           <Heading size="md">How To Make A Change</Heading>
      <Text>

We can still reduce pollution in the air by using public transportation, bikes, or walking whenever possible. Driving your car less or whenever necessary. Planting trees and plants is a great way to care for the Earth. Use the recycle, reduce and reuse method before throwing out trash. Turning off lights when not in use. These are small actions we can take to reduce pollution and keep our country and earth a clean place.  
      </Text>

      <Text>
        This phenomenon harshly impacts Canada, as our northern country&apos;s permafrost has been thawing at unprecedented rates. This permafrost makes up much of our northern territories, and it&apos;s melting takes away habitat for arctic animals such as snow owls. These animals have increasingly been found interacting with humans, as they are forced to move southward to find habitable land. Not only are land animals impacted, all oceanic lifeforms are harmed by this problem. A problem we caused.
      </Text>
      
      
         
        <Image borderRadius="lg" w="full" src={"https://assets.nrdc.org/sites/default/files/styles/full_content--retina/public/media-uploads/health4_26_airpollguide_istock_2796602_2400.jpg?itok=n2tBYa7S"} alt={"a"} mb={4} />
      <Heading size="md">Sources</Heading>

      <Link color='green.500'href="https://www.pca.state.mn.us/air/what-you-can-do-about-air-pollution">

      What you can do about air pollution <ExternalLinkIcon mx='2px' />
      </Link>   
      <Link color='green.500'href="https://can01.safelinks.protection.outlook.com/GetUrlReputation">

       Air pollution <ExternalLinkIcon mx='2px' />
      </Link>   

      <Break/>
    </VStack>
  </Container>
  )
}

export default blog2
