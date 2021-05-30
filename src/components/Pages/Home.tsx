import React, { VFC } from 'react'
import { Box } from '@chakra-ui/react'
import SearchArea from '../Organism/SearchArea'
import CatImageArea from '../Organism/CatImageArea'
import DescriptionArea from '../Organism/DescriptionArea'

const Home: VFC = () => {
  return (
    <Box m={10} justifyContent="center">
      <SearchArea />
      <CatImageArea />
      <DescriptionArea />
    </Box>
  )
}

export default Home
