import React, { VFC } from 'react'
import { Image } from '@chakra-ui/react'

const Header: VFC = () => {
  return (
    <Image src={`${process.env.PUBLIC_URL}/assets/CatwikiLogo.svg`} m={3} />
  )
}

export default Header
