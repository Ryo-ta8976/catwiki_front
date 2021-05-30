import React, { VFC } from 'react'
import { Box, Text, SimpleGrid } from '@chakra-ui/react'
import CatGridImage from '../Molecules/CatGridImage'

const DescriptionArea: VFC = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={10}
      p={{ base: 10, lg: 50 }}
    >
      <Box
        display="inline-block"
        maxW={{ base: '400px', lg: '350px' }}
        ml={{ base: 0, lg: 100 }}
        mt={{ base: 0, lg: 50 }}
      >
        <Text fontSize={{ base: '3xl', lg: '4xl' }} fontWeight="bold">
          Why should you have a cat?
        </Text>
        <Text fontSize="md">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety loves
        </Text>
      </Box>
      <CatGridImage />
    </SimpleGrid>
  )
}

export default DescriptionArea
