import React from 'react'
import { useState } from 'react';
import { LinkData } from '../assets/data/dummydata';
import{BiShoppingBag} from "react-icons/bi"
import{HiOutlineMenuAlt1} from "react-icons/hi"

function Header() {

  const [open, setOpen] = useState(false);
  return (

    <>
    <header>
      <div className="contaner flex-b">
        <div className="logo">
          <img src="" alt="" />
        </div>
        <nav className={open ? "mobile-view" :"desktop-view"}>
            <ul className='flex-b-g'>
              {LinkData.map((link)=>(
                  <li key={link.id} onClick={()=>setOpen(null)}>
                    <a href={link.url}>{link.title}</a>
                  </li>
              ))}
            
            </ul>
        </nav>
        <div className="account flex-b-g">
              <button>
                <BiShoppingBag/>
              </button>
              <button>
                Login
              </button>
              <button className='open-menu' onClick={()=>setOpen(!open)}>
                <HiOutlineMenuAlt1/>
              </button>
        </div>
      </div>
      
    </header>
    
    </>
  )
}

export default Header