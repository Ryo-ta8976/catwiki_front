import React, { VFC } from 'react'
import { Box, Text, Link, Wrap, WrapItem } from '@chakra-ui/react'
import CatImage from '../Molecules/CatImage'

const sampleImage = [
  { name: 'aaaaaaaa', url: 'https://bit.ly/sage-adebayo' },
  { name: 'bbbbbbbb', url: 'https://bit.ly/sage-adebayo' },
  { name: 'cccccccc', url: 'https://bit.ly/dan-abramov' },
  { name: 'dddddddd', url: 'https://bit.ly/dan-abramov' },
]

const CatImageArea: VFC = () => {
  return (
    <Box
      backgroundColor="#F5F5DC"
      borderRadius="0px 0px 30px 30px"
      p={{ base: 2, lg: 10 }}
    >
      <Text>Most Searched Breeds...</Text>
      <Box>
        <Text
          width={{ base: '60%', lg: '35%' }}
          fontSize={{ base: 'xl', lg: '5xl' }}
          fontWeight="bold"
          display="inline-block"
        >
          66+ Breeds For you to discover
        </Text>
        <Link ml={{ base: 0, lg: '50%' }} to="/">
          See More →
        </Link>
      </Box>

      <Wrap spacing={{ base: '20px', lg: '50px' }} justify="center">
        {sampleImage.map((image) => (
          <WrapItem key={image.name}>
            <CatImage name={image.name} url={image.url} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}

export default CatImageArea
