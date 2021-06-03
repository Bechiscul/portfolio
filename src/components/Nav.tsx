import React, {useState} from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <nav className="flex justify-end w-auto items-center h-20 pr-16 space-x-10">
                <a className="cursor-pointer font-roboto text-base" href="#projects">PROJECTS</a>
                <a className="cursor-pointer font-roboto text-base" href="#skills">SKILLS</a>
                <a className="cursor-pointer font-roboto text-base" href="#about">ABOUT</a>
        </nav>
    )
}

export default Nav
