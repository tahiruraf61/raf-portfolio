import React from 'react'
import './about.css'
import mohamad from '../assets/mohamad.png'
import { FaCheck } from "react-icons/fa6";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";


const About = () => {
  return (
    <div id='about'>
        <section className='about-me'>
            <img src={mohamad} alt='' className='aboutImg' />
            <div className='aboutText'>
                <h1>About Me</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
Ut elit tellus, luctus nec ullamcorper mattis,
pulvinar dapibus<br/> leo. Lorem ipsum dolor sit amet,
consectetur adipiscing elit.<br/> Ut elit tellus,
luctus nec ullamcorper mattis, pulvinar dapibus<br/> leo.
Lorem ipsum dolor sit amet, consectetur.
                </p>
                <h4><FaCheck className='checkIcon'/> All kinds of websites</h4>
                <h4><FaCheck className='checkIcon'/> Unlimited revision </h4>
                <h4><FaCheck className='checkIcon'/> 24/7 service support</h4>
                <button className='btn'>Get in touch</button>
            </div>
        </section>
        <h1 className='skills'>My Skills</h1>
        <div className='progress'>
            <h5 className='heading'>Web design</h5>
            <p className='percent'>98%</p>
            <progress value={98} max={100} className='progressBar' />
        </div>
        <div className='progress'>
            <h5 className='heading'>SEO</h5>
            <p className='percent'>90%</p>
            <progress value={90} max={100} className='progressBar' />
        </div>
        <div className='progress'>
            <h5 className='heading'>Responsive design</h5>
            <p className='percent'>95%</p>
            <progress value={95} max={100} className='progressBar' />
        </div>
        <div className='missions'>
            <div className='mission'>
            <FaArrowUpRightDots className='icon2'/>
            <h4 className='missionHeader'>Mission</h4>
            <p className='missionsPara'>
            Lorem ipsum dolor sit amet,<br/>
consectetur adipiscing elit.<br/>
Ut elit tellus, luctus nec ullam<br/>
corper mattis, pulvinar dapibus leo.
            </p>
            </div>
            <div className='mission'>
            <FaRegEye className='icon2'/>
            <h4 className='missionHeader'>Vission</h4>
            <p className='missionsPara'>
            Lorem ipsum dolor sit amet,<br/>
consectetur adipiscing elit.<br/>
Ut elit tellus, luctus nec ullam<br/>
corper mattis, pulvinar dapibus leo.
            </p>
            </div>
        </div>

    </div>
  )
}

export default About;