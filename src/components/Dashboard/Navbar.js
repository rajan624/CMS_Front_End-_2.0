import React, { useState } from 'react'
import Image from 'next/image';
import NavLink from 'next/link'
import { Avatar } from "@nextui-org/react";
import navbarStyle from "../../styles/ModuleCSS/Dashboard/Navbar.module.css"
import Loading from './Loading';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={`shadow-2xl  ${navbarStyle.navbarMainDiv}`} >
        <div className={navbarStyle.navLogo} >
        <Image alt="Next.js Logo" src={"/Logo.png"} width={100} height={100} />
        </div>
      <div className={navbarStyle.navLinkProfileDiv} >
        <div className={navbarStyle.navDivider} >
        </div>
        <div className={navbarStyle.navLink} >
        <NavLink className={`${navbarStyle.navLink} ${navbarStyle.aButton} ${navbarStyle.shadow} ${navbarStyle.rotateX}`} href="/about" activeClassName="active-link">Home</NavLink>
        <NavLink className={`${navbarStyle.navLink} ${navbarStyle.aButton} ${navbarStyle.shadow} ${navbarStyle.rotateX}`} href="/about" activeClassName="active-link">Blog</NavLink>
        <NavLink className={`${navbarStyle.navLink} ${navbarStyle.aButton} ${navbarStyle.shadow} ${navbarStyle.rotateX}`} href="/about" activeClassName="active-link">About</NavLink>
        <NavLink className={`${navbarStyle.navLink} ${navbarStyle.aButton} ${navbarStyle.shadow} ${navbarStyle.rotateX}`}  href="/about" activeClassName="active-link">Categories</NavLink>
        <NavLink className={`${navbarStyle.navLink} ${navbarStyle.aButton} ${navbarStyle.shadow} ${navbarStyle.rotateX}`} href="/about" activeClassName="active-link">Author</NavLink>
        <NavLink className={`${navbarStyle.navLink} ${navbarStyle.aButton} ${navbarStyle.shadow} ${navbarStyle.rotateX}`} href="/about" activeClassName="active-link">Shop</NavLink>
        <NavLink className={`${navbarStyle.navLink} ${navbarStyle.aButton} ${navbarStyle.shadow} ${navbarStyle.rotateX}`} href="/about" activeClassName="active-link">Contact</NavLink>
        </div>
        <div>
        <Avatar isBordered color="secondary" radius="lg" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        </div>
        <button onClick={handleOpenModal}>Open Modal</button>
       <Loading isOpen={isOpen} onClose={handleCloseModal}/>
      </div>
    </div>
  )
}

export default Navbar