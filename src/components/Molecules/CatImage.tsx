import React, { VFC } from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

type Props = {
  name: string
  url: string
}

const CatImage: VFC<Props> = (props) => {
  const { name, url } = props
  return (
    <Box display="inline-block" m={{ base: '10px 0', lg: '30px 0' }}>
      <Image
        height={{ base: '120px', lg: '250px' }}
        borderRadius="10px"
        src={url}
      />
      <Text>{name}</Text>
    </Box>
  )
}

export default CatImage
