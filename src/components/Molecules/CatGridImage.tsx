import React, { VFC } from 'react'
import { Box, Image } from '@chakra-ui/react'
import Masonry from 'react-masonry-css'
import './CatGridImage.css'

const CatGridImage: VFC = () => {
  return (
    <Box display="inline-block">
      <Box width="100%">
        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <Image
            height={{ base: 100, lg: 150 }}
            src={`${process.env.PUBLIC_URL}/assets/cat_2.png`}
            mr={2}
            mt={2}
          />
          <Image
            height={{ base: 200, lg: 250 }}
            src={`${process.env.PUBLIC_URL}/assets/cat_3.png`}
            mr={2}
            mt={2}
          />
          <Image
            height={{
              base: 150,
              lg: 200,
            }}
            src={`${process.env.PUBLIC_URL}/assets/cat_1.png`}
            mr={2}
            mt={2}
          />
        </Masonry>
      </Box>
    </Box>
  )
}

export default CatGridImage
