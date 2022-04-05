import React from 'react'

import { Link, Image, Container, Heading, VStack, Text, OrderedList, ListIcon, ListItem, Breadcrumb } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Break from '../../components/Break'
const blog4 = () => {
  return (
  <Container maxW="container.md" pt={14}>
    <Break/>
    <VStack align="start" gap={3}>
      <Heading>
        Melting Ice Caps: A Global Emergency
      </Heading>
        <Image borderRadius="lg" w="full" src={"https://media.discordapp.net/attachments/634834381927743498/959513107720437790/IMG_9156.webp?width=719&height=479"} alt={"a"} mb={4} />
      <Text>
        As we are all aware, global temperatures are increasing at an alarming rate. This increase has lead to more ice melting, year after year. While some ice cap melting during the warmer months of the year is part of Earth&apos;s natural processes, the record losses of ice over the past 10 years is more than concerning.
      
      </Text>

          <Image borderRadius="lg" w="full" src={"https://media.discordapp.net/attachments/634834381927743498/959513241216757780/IMG_9158.jpg?width=719&height=479"} alt={"a"} mb={4} />
      <Text>

The melting of glaciers in the poles lead to higher sea levels, and this increase in liquid water on our Earth is thoroughly detrimental. It causes temperatures to rise even further, and can cause flooding when the land level is low enough. If this pattern continues into the far future, much of our current lands will be submerged in water.
      </Text>

      <Text>
        This phenomenon harshly impacts Canada, as our northern country&apos;s permafrost has been thawing at unprecedented rates. This permafrost makes up much of our northern territories, and it&apos;s melting takes away habitat for arctic animals such as snow owls. These animals have increasingly been found interacting with humans, as they are forced to move southward to find habitable land. Not only are land animals impacted, all oceanic lifeforms are harmed by this problem. A problem we caused.
      </Text>
      <Break/>
        <Image borderRadius="lg" w="full" src={"https://media.discordapp.net/attachments/634834381927743498/959513192080506930/IMG_9157.webp"} alt={"a"} mb={4} />
   
        
      <Heading size="md">Sources</Heading>

      <Link color='green.500'href="https://www.worldatlas.com/articles/the-biggest-environmental-issues-in-canada.html">

      The Biggest Environmental Issues In Canada <ExternalLinkIcon mx='2px' />
      </Link>   
      <Link color='green.500'href="https://www.worldwildlife.org/pages/six-ways-loss-of-arctic-ice-impacts-everyone">

      Six ways loss of Arctic ice impacts everyone <ExternalLinkIcon mx='2px' />
      </Link>   
      <Link color='green.500'href="https://earth.gsfc.nasa.gov/cryo/data/current-state-sea-ice-cover">

      Currect State Sea Ice Cover <ExternalLinkIcon mx='2px' />
      </Link>
  
      <Break/>
    </VStack>
  </Container>
  )
}

export default blog4
