import React from "react";
import './nav.css';
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {TiContacts} from 'react-icons/ti'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import { useState } from "react";


function Nav(){
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#'?'active':''}><FaHome/></a>
            <a href="#about" onClick={()=> setActiveNav('#about')}  className={activeNav === '#about'?'active':''}><AiOutlineUser/></a>
            <a href="#experience" onClick={()=> setActiveNav('#experience')}  className={activeNav === '#experience'?'active':''}><BiBookAlt/></a>
            <a href="#services" onClick={()=> setActiveNav('#services')}  className={activeNav === '#services'?'active':''}><MdOutlineMiscellaneousServices/></a>
            <a href="#contact" onClick={()=> setActiveNav('#contact')}  className={activeNav === '#contact'?'active':''}><TiContacts/></a>
        </nav> 
    )
}

export default Nav;