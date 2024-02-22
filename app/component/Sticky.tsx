'use client'

import React from 'react'
import { useState, useEffect } from "react";
import NavBar from '../NavBar';


export default function Sticky() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    <header className={` ${isSticky? 'bg-color-primary-dark border-b border-color-gray' :''} `}>
        <NavBar />
    </header>
  )

}

