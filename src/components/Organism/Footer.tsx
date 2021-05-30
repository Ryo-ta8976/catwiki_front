import React, { VFC } from 'react'
import { Box, Text } from '@chakra-ui/react'
import InvertLogoImage from '../atoms/InvertLogoImage'

const Footer: VFC = () => {
  return (
    <Box padding="10px" bg="black" borderRadius="30px 30px 0px 0px" p={6}>
      <InvertLogoImage />
      <Text
        marginRight="10px"
        display="inline-block"
        color="white"
        ml={{ base: 0, lg: '60%' }}
      >
        &copy;created by r.akiyama - devChallenge.io 2021
      </Text>
    </Box>
  )
}

export default Footer
