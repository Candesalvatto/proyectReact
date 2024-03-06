import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logoinstgram from './assets/instagram.png'
import logotwitter from './assets/twitter.png'
import logotiktok from './assets/tik-tok.png'
import logoyoutube from './assets/youtube.png'
import logokhy from '../../assets/imgs/logokhy (1).png'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='info'>
        <img src={logokhy} alt='img'/>
        <h3>EDITED COLLECTIONS
BY KYLIE JENNER
AND SPECIAL GUEST
COLLABORATORS</h3>

      </div>
<div className='categorias'>
<Link to='/' className='link'>HOME</Link>
<Link to='/products/001' className='link'>DROP 001</Link>
<Link to='/products/002' className='link'>DROP 002</Link>
<Link to='/products/003' className='link'>DROP 003</Link>
<Link to='/products/004' className='link'>DROP 004</Link>
<Link to='/quienes-somos' className='link'>SHOPPING CART</Link>
</div>
<div className='contacto'>
  <a href="https://www.instagram.com/khy/" target="_blank" rel="noopener noreferrer">
    <img src={logoinstgram} alt="instagram" />
  </a>
  <a href="https://twitter.com/khybrand" target="_blank" rel="noopener noreferrer">
    <img src={logotwitter} alt="twitter" />
  </a>
  <a href="https://www.tiktok.com/@khy" target="_blank" rel="noopener noreferrer">
    <img src={logotiktok} alt="tiktok" />
  </a>
  <a href="https://www.youtube.com/@Khybrand" target="_blank" rel="noopener noreferrer">
    <img src={logoyoutube} alt="youtube" />
  </a>
</div>

    </footer>
  )
}
