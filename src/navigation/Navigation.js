import {Link} from 'react-router-dom'
import React, {useEffect} from 'react'
import './navigation.css'

const Navigation = () => {
  useEffect(() => {
    const navbar = document.querySelector('.nav');
    const navbarTop = navbar.offsetTop;

    const adjustNavbar = () => {
      if (window.scrollY > navbarTop) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
      } else {
        navbar.style.position = 'static';
      }
    };

    window.addEventListener('scroll', adjustNavbar);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener('scroll', adjustNavbar);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
    <div className='nav'>
      <nav>
      <Link to='/' className='nav-item'>About Me</Link>
      <Link to='services' className='nav-item'>Services</Link>
      <Link to='portfolio' className='nav-item'>Portfolio</Link>
      <Link to='contact' className='nav-item'>Contact</Link>
      </nav>
    </div>
    <div className='mobileMenu'>
      <section className='menu'>
      <Link to='/' className='item'>About Me</Link>
      <Link to='services' className='item'>Services</Link>
      <Link to='portfolio' className='item'>Portfolio</Link>
      <Link to='contact' className='item'>Contact</Link>
      </section>
      </div>
    </>
  )
}

export default Navigation;