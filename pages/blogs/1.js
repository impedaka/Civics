import { ExternalLinkIcon } from "@chakra-ui/icons";
import { AspectRatio, List, ListItem, OrderedList, UnorderedList, Image, Container, Heading,Text, VStack, Breadcrumb, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import ReactPlayer from "react-player";
import Break from "../../components/Break";

const Better = () => {
return <Container maxW="container.md" pt={14}>
<VStack align="start" >
  <Break/>
<Heading size="xl">Climate Change</Heading>
  
  <Image borderRadius="lg" w="full" src={"https://media.discordapp.net/attachments/958826350381248562/960598120398467082/unknown.png?width=1072&height=603"} alt={"a"} mb={4} />
  <Heading align="left" size="md">Information</Heading>
    <Text>
    Climate Change is defined as long-term shifts in average temperatures and weather patterns for Earth&apos;s local, regional, and global climates. These climactic changes seen throughout the planet since the 1800s have proven the undeniable fact that the main driver in rising climate change is us, primarily our excessive use of fossil fuels. Fossil-fuel burning like coal, oil, and gas increase heat-trapping greenhouse emissions in Earth&apos;s atmosphere, trapping the sun&apos;s heat and raising Earth&apos;s average surface temperature. Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane. These harmful emissions come from using gasoline to drive a car or using coal to heat a building. Cutting down and clearing land and forests can also release carbon dioxide. &apos;Landfills for garbage are a major source of methane emissions.&apos; (&apos;What Is Climate Change? | United Nations&apos;) Energy, industry, transport, buildings, agriculture, and land use are among the main emitters of carbon dioxide and methane. Climate data records provide indisputable evidence of climate change indicators, such as land and ocean temperature increasing around the world; rising sea levels; ice loss at Earth&apos;ss poles and in mountain glaciers; frequency and severity changes in extreme weather such as hurricanes, heatwaves, wildfires, droughts, floods and precipitation; and cloud and vegetation cover changes.  
  </Text>
  <Break/>
       
  <Image borderRadius="lg" w="full" src={"https://media.discordapp.net/attachments/958826350381248562/960598120767574097/unknown.png"} alt={"a"} mb={4} />
     <Heading size="md">How we plan to make a positive change</Heading>
  <Text>
    We can reduce our carbon footprint by taking a few simple and easy steps: Make energy conservation a part of our daily routine and our decisions as a consumer. When we shop for new appliances like refrigerators, washers, and dryers, look for products with the government&apos;s ENERGY STAR® label; they meet a higher standard for energy efficiency than the minimum federal requirements. When we buy a car, look for one with the highest gas mileage and lowest emissions, or buy an electric car. We can also reduce our emissions by taking public transportation or carpooling when possible.  
  </Text>
  <br/>
<Text>Other ways you can make a positiive change to the environment are by:</Text>
<UnorderedList>
  <ListItem>
    Shortening the amount of time used up in a shower. 
  </ListItem>

  <ListItem>
  Hanging your clothes outside to dry.
  </ListItem>
  <ListItem>
  Avoid using lawn chemicals.  
  </ListItem>
  <ListItem>
   Unplugging unused devices and appliances. 
  </ListItem>
  <ListItem>
   Using energy-efficient lightbulbs.  
  </ListItem>
  <ListItem>
   Reusing and recycling as much as possible.  
  </ListItem>
  <ListItem>
   Reducing water usage.  
  </ListItem>
  <ListItem>
    Consuming less meat.  
  </ListItem>
  <ListItem>  Cutting back on unnecessary waste.
  </ListItem>

  <ListItem>
    Donating clothes and other unused items to people in need. 
  </ListItem>
</UnorderedList>
<Break/>
  <Image borderRadius="lg" w="full" src={"https://media.discordapp.net/attachments/958826350381248562/960598121031798844/unknown.png?width=846&height=603"} alt={"a"} mb={4} />
  <Heading size="md">How can others get involved in saving the planet?</Heading>
  <Text>We can save Earth from climate change by:</Text>
  <UnorderedList>
    <ListItem>
    Planting more trees 
    </ListItem>
    <ListItem>
    Protecting public lands 
    </ListItem>
    <ListItem>
Hosting a cleanup
    </ListItem>
    <ListItem>
Growing a community garden
    </ListItem>
    <ListItem>
Volunteering with wildlife rescue and rehabilitation programs
    </ListItem>
  </UnorderedList>
  <Break/>
    <Image borderRadius="lg" w="full" src={"https://media.discordapp.net/attachments/958826350381248562/960598237314687016/unknown.png"} alt={"a"} mb={4} />
  <Heading size="md">Links to other important sites for more information:</Heading>
  <OrderedList>
    
    <ListItem>
      
      <Link color='green.500'href="https://climate.nasa.gov/resources/global-warming-vs-climate-change/#:~:text=Global%20warming%20is%20the%20long,gas%20levels%20in%20Earth's%20atmosphere">

      Overview: Weather, Global Warming and Climate Change. <ExternalLinkIcon mx='2px' />
      </Link>    
    </ListItem>
    <ListItem>
      
      <Link color='green.500'href="https://climate.nasa.gov/evidence/">

      Climate Change: How Do We Know? <ExternalLinkIcon mx='2px' />
      </Link>    
    </ListItem>
    <ListItem>
      
      <Link color='green.500'href="https://www.nrdc.org/stories/global-warming-101">

      Global Warming 101<ExternalLinkIcon mx='2px' />
      </Link>    
    </ListItem>
    <ListItem>
      
      <Link color='green.500'href="https://www.un.org/en/climatechange/what-is-climate-change">

      What Is Climate Change? <ExternalLinkIcon mx='2px' />
      </Link>    
    </ListItem>
    <ListItem>
      
      <Link color='green.500'href="https://www.who.int/health-topics/climate-change#tab=tab_2">

      Climate Change <ExternalLinkIcon mx='2px' />
      </Link>    
    </ListItem>
    <ListItem>
      
      <Link color='green.500'href="https://www.youtube.com/watch?v=G4H1N_yXBiA">

      Video: Causes and Effects of Climate Change | National Geographic <ExternalLinkIcon mx='2px' />
      </Link>    
    </ListItem>
  </OrderedList>
</VStack>
<br/>
    <ReactPlayer url="https://www.youtube.com/watch?v=G4H1N_yXBiA"/>
<Break/>
</Container>
};

export default Better;
