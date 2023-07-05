import React from 'react'
import { Box, Heading, Stack, VStack } from '@chakra-ui/react'
const Footer = () => {
  return (
     <Box bgColor={"blackAlpha.900"}minH={"40"}
     P="16"color={"white"} >
     <Stack direction={['column','row']}>
<VStack>
  <Heading size="md"textTransform={'uppercase'}>Subscribe to get update</Heading>
</VStack>
     </Stack>

     </Box>
  )
}

export default Footer