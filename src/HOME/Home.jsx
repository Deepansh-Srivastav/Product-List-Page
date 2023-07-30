import React from 'react'
import "./Home.css"
import NavBar from './NavBar/NavBar'

const Home = () => {
  return (
    <div className='header'>
      <NavBar />

      <marquee direction="right" scrollamount='20'   >
      This is the home Page
    </marquee>
    </div >
  )
}

export default Home
