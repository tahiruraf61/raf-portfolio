import React, { useState, useEffect } from 'react'
import './header.css'
import Wallpaper from '../assets/Wallpaper.png'
import profilePic from '../assets/Profile-pic.png'
import facebook from '../assets/facebook-icon.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import { FaLocationDot } from "react-icons/fa6";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

const Header = () => {
    const [FormatDate, setFormatDate] = useState('');
    useEffect(() => {
        const currentDate = new Date();
        const options = {day: 'numeric', month: 'long', year: 'numeric'};
        const dateStr = currentDate.toLocaleDateString('en-Us', options);
        setFormatDate(dateStr);
    }, []);
  return (
    <section id='header'>
        <img src={Wallpaper} alt= '' className='header-img' />

        <div className='profile'>
            <img src={profilePic} alt='' className='profilePic' />
            <div className='name'>
                <h3>Tahiru Rafiu</h3>
                <h4>I'm a front-end developer</h4>
                <img src={facebook} alt='' className='socialsIcon' />
                <img src={twitter} alt='' className='socialsIcon' />
                <img src={instagram} alt='' className='socialsIcon' />
            </div>
            <div className='email' >
                <h4><MdConnectWithoutContact className='icon'/> Contact Me</h4>
                <h4><MdOutlineMail className='icon' /> tahirurafiu61@gmail.com</h4>
            </div>
            <div className='date' >
                <h4><MdOutlineDateRange className='icon' /> {FormatDate}</h4>
                <h4><FaLocationDot className="icon"/> Tamale-Ghana</h4>
            </div>

        </div>
    </section>
  )
}

export default Header;