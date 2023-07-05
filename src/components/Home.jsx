import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
const headingOptions ={
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%,-50%)",
textTransform:"uppercase",
   p:'4',
   size:"4xl"

}
const Home = () => {
  return (
     <Box>
<MyCarousel/>
 <Container maxW={'container.xl'} minH={'100vh'} p="16">
  <Heading textTransform={'uppercase'}py="2" w={"fit-content"}borderBottom={"2px solid"}m="auto">Services</Heading>
 <Stack  h="full"
 p={"4"}
 alignItems={"center"}
 direction={["column","row"]}
 >
  <Image src={img5}h={["40","400"]} filter={"hue-rotate(-130deg)"}></Image>
 <Text letterSpacing={"widest"}lineHeight={"190%"}padding={["4","16"]}textAlign={"center"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quam similique at eius quis sed, sint est tempore ipsum dolore! Odio, illo voluptates qui architecto earum veritatis iusto nulla Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim a error, sed corporis officia reiciendis eveniet dolor alias amet aliquam nemo necessitatibus omnis! Enim quos obcaecati sit nemo vel harum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem doloremque quo ipsam at temporibus esse neque sit, nulla ullam aspernatur consequatur fugit corporis, blanditiis tempora, reiciendis doloribus minima quam. Labore.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni facere ipsum error recusandae corrupti pariatur dignissimos cum voluptates velit, ad facilis commodi, vel laboriosam fuga sapiente quia? Minima, ab corrupti?
 </Text>
 </Stack>
 </Container>
 
     </Box>
  )
}
const MyCarousel=()=>(
  <Carousel autoPlay infiniteLoop interval={1000}showStatus={false} showThumbs={false}
  showArrows={false}>
    <Box w="full" h={'100vh'}>
<Image src={img1} />
 <Heading bgColor={"blackAlpha.600"}color={"white"}{...headingOptions}> 
  Watch the future
 </Heading>
    </Box>
    
    <Box w="full" h={'100vh'}>
<Image src={img2} />
 <Heading bgColor={"whiteAlpha.600"}color={"black"} {...headingOptions}> 
  Future Is Gaming
 </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
<Image src={img3} />
 <Heading bgColor={"whiteAlpha.600"}color={"black"} {...headingOptions}> 
 Gaming On Console;
 </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
<Image src={img4} />
 <Heading bgColor={"whiteAlpha.600"}color={"black"} {...headingOptions}> 
   Night LIFE IS COOL
 </Heading>
    </Box>

  </Carousel>
)
export default Home