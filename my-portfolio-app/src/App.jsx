import React from 'react'
// import {About} from '../src/container/index'
// About/About.jsx'
import {About,Footer,Header,Skills,Testimonial,Work}from '../src/container/index'

const App = () => {
  return (
    <div className='app'>
     <h1>Hello World Sadhana Here</h1>
     <Header/>
     <About/>
     <Work/>
     <Skills/>
     <Testimonial/>
     <Footer/>
    </div>
  )
}

export default App
