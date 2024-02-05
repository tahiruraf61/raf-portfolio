import React from 'react'
import './portfolio.css'
import port1 from '../assets/portfolio-1.png'
import port2 from '../assets/portfolio-2.png'
import port3 from '../assets/portfolio-3.png'
import port4 from '../assets/portfolio-4.png'
import port5 from '../assets/portfolio-5.png'
import port6 from '../assets/portfolio-6.png'

const Portfolio = () => {
  return (
    <div id='portfolio'>
      <h1 className='portHeader'>Satisfied Clients</h1>
      <section className='portItems'>
        <div>
        <img src={port1} alt='' className='portImg' />
        <img src={port2} alt='' className='portImg' />
        </div>
        <div>
        <img src={port3} alt='' className='portImg' />
        <img src={port4} alt='' className='portImg' />
        </div>
        <div>
        <img src={port5} alt='' className='portImg' />
        <img src={port6} alt='' className='portImg' />
        </div>

      </section>
    </div>
  )
}

export default Portfolio