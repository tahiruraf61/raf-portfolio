import React from 'react'
import './services.css'
import { FaLaptop} from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa"
import { FaUserGraduate } from "react-icons/fa";

const Services = () => {
  return (
    <div id='services'>
      <h1>What I do best</h1>
      <section className='serviceContent'>
        <section className='serviceSection'>
        <div className='serviceItem'>
        <FaLaptop  className="serviceIcon"/>
        <h5>Web Development</h5>
        <p className='sevPara'>Lorem ipsum dolor sit amet,
consectetur<br/> adipiscing elit.
Ut elit tellus, luctus nec<br/> ullam
corper mattis, pulvinar dapibus leo.
Lorem ipsum dolor sit amet,
consectetur<br/> adipiscing elit.
Ut elit tellus, luctus nec<br/> ullam
corper mattis, pulvinar dapibus leo
</p>
</div>
        <div className='serviceItem'>
        <FaMobileAlt className="serviceIcon" />
        <h5>Mobile App</h5>
        <p className='sevPara'>Lorem ipsum dolor sit amet,
consectetur<br/> adipiscing elit.
Ut elit tellus, luctus nec<br/> ullam
corper mattis, pulvinar dapibus leo.
Lorem ipsum dolor sit amet,
consectetur<br/> adipiscing elit.
Ut elit tellus, luctus nec<br/> ullam
corper mattis, pulvinar dapibus leo
</p>
      </div>
        </section>

         <section className='serviceSection'>
        <div className='serviceItem'>
        <FaSearch  className="serviceIcon"/>
        <h5>SEO</h5>
        <p className='sevPara'>Lorem ipsum dolor sit amet,
consectetur<br/> adipiscing elit.
Ut elit tellus, luctus nec<br/> ullam
corper mattis, pulvinar dapibus leo.
Lorem ipsum dolor sit amet,
consectetur<br/> adipiscing elit.
Ut elit tellus, luctus nec<br/> ullam
corper mattis, pulvinar dapibus leo
</p>

        </div>
        <div className='serviceItem'>
        <FaUserGraduate  className="serviceIcon"/>
        <h5>Web Maintenance</h5>
        <p className='sevPara'>Lorem ipsum dolor sit amet,
consectetur<br/> adipiscing elit.
Ut elit tellus, luctus nec<br/> ullam
corper mattis, pulvinar dapibus leo.
Lorem ipsum dolor sit amet,
consectetur<br/> adipiscing elit.
Ut elit tellus, luctus nec<br/> ullam
corper mattis, pulvinar dapibus leo
</p>

        </div>
        </section>
      </section>
    </div>
  )
}

export default Services