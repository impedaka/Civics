import React from 'react'

import { Link, Image, Container, Heading, VStack, Text, OrderedList, ListIcon, ListItem, Breadcrumb } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Break from '../../components/Break'
import Author from '../../components/Author'
const blog3 = () => {
  return (
  <Container maxW="container.md" pt={14}>
    <Break/>
    <VStack align="start" spacing={5}>
      <Heading>
        7 simple ways to make a change
      </Heading>
       
 <Author name="Linda" date={new Date('2021-04-06T19:01:27Z')}  img="https://github.com/impedaka/helloSign/blob/main/Frontend/src/pages/Assets/Avatars%20Default%20with%20Backdrop-4.png?raw=true"/> 
        <Image borderRadius="lg" w="full" src={"https://media.discordapp.net/attachments/634834381927743498/960952107408719902/IMG_9211.webp"} alt={"a"} mb={4} />


      <OrderedList>
        <ListItem>
          Bike and walk more. Drive less. Transportation accounts for 28% of Canada&apos;s production of greenhouse gases. Windsor has built many bike lanes and public buses pass by every 30mins.
        </ListItem>
        <ListItem>
Shop sustainable. Bring reusable shopping bags and purchase less plastic. Choose fair trade products as not only are farmers paid equitable wages, they have higher environmental standards
        </ListItem>
        <ListItem>
          Save water. Close the faucet when not in use and try to take shorter showers. You can also purchase water-recycling or efficient appliances to reduce waste water ending up in the ocean.
        </ListItem>
        <ListItem>
          Volunteer. There are many local opportunities for volunteer cleanups and other restauration projects.
        </ListItem>
        <ListItem>
          Recycle, reduce and reuse. Follow the three r&apos;s to cut down on waste.
        </ListItem>
        <ListItem>
          Educate others. Spread the word on environmental problems and solutions we can take!
        </ListItem>
        <ListItem>
          Donate. Your generous donation to environmental organizations allocates them more ressources to further their progress!
        </ListItem>
          

      </OrderedList>
<br/> 

      <Heading size="md">Sources</Heading>
      
      <Link color='green.500'href="https://davidsuzuki.org/what-you-can-do/top-10-ways-can-stop-climate-change/">

      Top 10 things you can do about climate change <ExternalLinkIcon mx='2px' />
      </Link>   
      <Link color='green.500'href="https://www.greenmountainenergy.com/why-renewable-energy/protect-the-environment/">

      12 Ways You Can Protect the Environment <ExternalLinkIcon mx='2px' />
      </Link>   
      <Link color='green.500'href="https://oceanservice.noaa.gov/ocean/earthday.html">

      What can I do to protect coral reefs? <ExternalLinkIcon mx='2px' />
      </Link>   
      <Break/>
    </VStack>
  </Container>
  )
}

export default blog3
