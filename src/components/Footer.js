import React from 'react'
import { Instagram ,Facebook, LinkedIn, WhatsApp } from '@mui/icons-material';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'>
      <Instagram />
      <WhatsApp />
      <Facebook />
      <LinkedIn />
    </div>
    <p> &copy; 2023 pedrotechpizza.copy</p>
    </div>
  )
}

export default Footer;