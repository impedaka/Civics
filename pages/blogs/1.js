import { Center, Image, Container, Heading,Text, VStack, Breadcrumb } from "@chakra-ui/react";
import React from "react";
import Break from "../../components/Break";

const Better = () => {
return <Container maxW="container.md" pt={14}>
<VStack>
  <Break/>
<Heading size="2xl">Climate Change</Heading>
  <Heading size="md">Information</Heading>
  <Image borderRadius="lg" w="full" src={"https://media.discordapp.net/attachments/634834381927743498/959513107720437790/IMG_9156.webp?width=905&height=603"} alt={"a"} mb={4} />
  <Text>
    Climate Change is defined as long-term shifts in average temperatures and weather patterns for Earth’s local, regional, and global climates. These climactic changes seen throughout the planet since the 1800s have proven the undeniable fact that the main driver in rising climate change is us, primarily our excessive use of fossil fuels. Fossil-fuel burning like coal, oil, and gas increase heat-trapping greenhouse emissions in Earth’s atmosphere, trapping the sun’s heat and raising Earth’s average surface temperature. Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane. These harmful emissions come from using gasoline to drive a car or using coal to heat a building. Cutting down and clearing land and forests can also release carbon dioxide. "Landfills for garbage are a major source of methane emissions." (“What Is Climate Change? | United Nations”) Energy, industry, transport, buildings, agriculture, and land use are among the main emitters of carbon dioxide and methane. Climate data records provide indisputable evidence of climate change indicators, such as land and ocean temperature increasing around the world; rising sea levels; ice loss at Earth’s poles and in mountain glaciers; frequency and severity changes in extreme weather such as hurricanes, heatwaves, wildfires, droughts, floods and precipitation; and cloud and vegetation cover changes.  
  </Text>
  <Break/>
     <Heading size="md">How we plan to make a positive change</Heading>
  <Text>
   We can reduce our carbon footprint by taking a few simple and easy steps: Make energy conservation a part of your daily routine and your decisions as a consumer. (“Follow The Sun – Follow the sun”) When you shop for new appliances like refrigerators, washers, and dryers, look for products with the government’s ENERGY STAR® label; they meet a higher standard for energy efficiency than the minimum federal requirements. When you buy a car, look for one with the highest gas mileage and lowest emissions, or buy an electric car. You can also reduce your emissions by taking public transportation or carpooling when possible. (“Global Warming 101 - Definition, Facts, Causes and Effects ...”) 

Other ways you can make a positive change in the environment are by: 

Shortening the amount of time used up in a shower.  

Hanging your clothes outside to dry.  

Avoid using lawn chemicals.  

Unplugging unused devices and appliances. 

Using energy-efficient lightbulbs.  

Reusing and recycling as much as possible.  

Reducing water usage.  

Consuming less meat.  

Cutting back on unnecessary waste.  

Donating clothes and other unused items to people in need. 
  </Text>
  <Break/>
  <Image borderRadius="lg" w="full" src={"https://media.discordapp.net/attachments/634834381927743498/959513192080506930/IMG_9157.webp"} alt={"a"} mb={4} />
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor lacinia orci et ornare. Sed elementum risus vel malesuada euismod. Vivamus ornare quam est, vitae rutrum diam tincidunt in. Duis venenatis consequat rutrum. Maecenas a interdum nisi. Ut et erat in eros mollis mattis non vitae magna. Suspendisse sodales nulla vitae rhoncus posuere. Fusce non turpis ut massa eleifend blandit. Vivamus hendrerit mollis accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris commodo facilisis neque in accumsan. Phasellus non efficitur erat, vitae porta quam. 
  </Text>
  <Break/>
  <Image borderRadius="lg" w="full" src={"https://media.discordapp.net/attachments/634834381927743498/959513241216757780/IMG_9158.jpg?width=905&height=603"} alt={"a"} mb={4} />
</VStack>
<Break/>
</Container>
};

export default Better;
