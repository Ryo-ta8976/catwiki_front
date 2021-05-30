import React, { VFC } from 'react'
import Header from '../atoms/Header'
import Footer from '../Organism/Footer'

type Props = {
  children: React.ReactNode
}

const DefaultLayout: VFC<Props> = (props) => {
  const { children } = props

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
