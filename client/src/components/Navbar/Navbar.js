import React from 'react'
import { NavbarContainer, LogoImg } from './Styles'

function Navbar() {
  return (
    <NavbarContainer>
      <LogoImg src={`${process.env.PUBLIC_URL}/logo.svg`} alt='spruce-logo' />
    </NavbarContainer>
  )
}

export default Navbar
