import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.instagram.com/mdathar44__/" target="_blank"><BsInstagram/></a>
        <a href="www.linkedin.com/in/md-athar-0b0abb239" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/mdathar4403" target="_blank"><BsGithub/></a>
      
    </div>
  )
}

export default HeaderSocial
