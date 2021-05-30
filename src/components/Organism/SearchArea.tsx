import React, { VFC, useState, useEffect } from 'react'
import {
  Box,
  Image,
  Text,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

import InvertLogoImage from '../atoms/InvertLogoImage'
import SearchModal from '../Molecules/SearchModal'

const SearchArea: VFC = () => {
  const WIDTH_THRESHOLD = 375
  const [width, setWidth] = useState<number>(1000)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener(`resize`, updateWidth, {
      capture: false,
      passive: true,
    })
  }, [])
  const handleClick = () => {
    console.log('on click')
  }
  return (
    <Box
      borderRadius="30px 30px 0px 0px"
      height="auto"
      position="relative"
      pb={{ base: 8, lg: 0 }}
      background="black"
    >
      <Image
        src={`${process.env.PUBLIC_URL}/assets/HeroImagesm.png`}
        srcSet={`${process.env.PUBLIC_URL}/assets/HeroImagemd.png 2x, ${process.env.PUBLIC_URL}/assets/HeroImagelg.png 3x`}
        width="100%"
        borderRadius="30px 30px 0px 0px"
      />
      <Box
        width={{ base: '50%', lg: '40%' }}
        position="absolute"
        top={{ base: '10%', lg: '35%' }}
        pl={{ base: 4, lg: 100 }}
        justify="center"
      >
        <InvertLogoImage />
        <Text fontSize={{ base: 10, lg: 20 }} color="white">
          Get to know more about your cat breed
        </Text>
        <InputGroup height={{ base: 3, lg: 10 }} m={{ base: 2, lg: 3 }}>
          {width <= WIDTH_THRESHOLD && (
            <>
              <Input
                pr="4.0rem"
                type="text"
                placeholder="Search"
                onClick={onOpen}
              />
              <SearchModal
                isOpen={isOpen}
                onClose={onClose}
                handleClick={handleClick}
              />
            </>
          )}
          {width > WIDTH_THRESHOLD && (
            <Input pr="4.5rem" type="text" placeholder="Enter your breed" />
          )}
          <InputRightElement width="4.5rem">
            <IconButton
              aria-label="Search database"
              icon={<SearchIcon />}
              onClick={handleClick}
              h={{ base: '1.5rem', lg: '1.75rem' }}
              size="sm"
            />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  )
}

export default SearchArea
