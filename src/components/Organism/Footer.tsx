import React, { VFC } from 'react'
import { Box, Text } from '@chakra-ui/react'
import InvertLogoImage from '../atoms/InvertLogoImage'

const Footer: VFC = () => {
  return (
    <Box padding="10px" bg="black" borderRadius="30px" height="100px">
      <InvertLogoImage />
      <Text marginRight="10px" display="inline-block" color="white">
        created by r.akiyama - devChallenge.io 2021
      </Text>
    </Box>
  )
}

export default Footer
