import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NavWrap>
     <h2>Employees List</h2>
    </NavWrap>
  )
}

export default Navbar
const NavWrap = styled.nav`
display: flex;
height: 80px;
align-items: center;
background: #000080;
color: #fff;
padding: 0 64px;
`