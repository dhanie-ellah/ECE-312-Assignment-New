import React from 'react'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Service from '../Components/Service'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Service />
      <Footer/>
    </div>
  )
}

export default Home