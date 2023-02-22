import './Header.css'
import React from 'react'
import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar/Navbar'
import { Cart } from '../Cart/Cart'

export const Header = ({total}) => {
  return (
    <header className="header">
        <Logo/>
        <Navbar/>
        <Cart total={total}/>
    </header>
  )
}
