import React from "react";
import {MdMenu} from 'react-icons/md';
import './navbar.css';
import {GiHamburger, GiHamburgerMenu} from 'react-icons/gi';


const btn = document.querySelector(".mobile-button");
const menu = document.querySelector('.mobile-menu');

btn?.addEventListener("click", handleClick);

function handleClick() {
    console.log("wow");
    menu?.classList.toggle("hidden");
}

window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const WindowPosition = window.scrollY > 280;
    header.classList.toggle('nav-scrolled', WindowPosition);
    header.classList.replace('bg-transparent', 'bg-blue');

})


export default function Navbar() {
    return (
        <header id="header" className="header text-white bg-transparent sticky top-0 z-10 ">


            <div
                className="font-serif container mx-auto flex p-5 pl-16 pr-16 items-center sm:p-4 sm:pl-0">
                <a href="#" className=" title-font font-medium mb-4 md:mb-0 ml-3 text-xl">
                    <img
                        className="logo w-32 p-4"

                        alt="hero"
                        src="./logotry.png"
                    />

                </a>
                <a href="#" className="hidden md:block ">

                </a>

                <nav
                    className="hidden md:block md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:underline underline-offset-8 ">
                        Projects
                    </a>
                    <a href="#skills" className="mr-5 hover:underline underline-offset-8">
                        Skills
                    </a>
                    <a href="#contact" className="mr-5 hover:underline underline-offset-8">
                        Contact
                    </a>
                </nav>


                <div
                    className="w-24 h-24 flex-row-reverse md:hidden w-8 inline-flex container mx-auto flex p-5 pl-16 pr-16 flex-col md:flex-row">
                    <button id="mobile-button" className="mobile-button h-16 ">
                        <GiHamburgerMenu></GiHamburgerMenu>

                    </button>
                </div>


                <a
                    href="#contact"
                    className="hidden sm:mr-14 md:block inline-flex items-center bg-sky-800 text-white border-2  py-3 px-5 focus:outline-none hover:bg-sky-700 rounded-lg text-base mt-4 md:mt-0">
                    Contact Me
                </a>

                <div id="mobile-menu" className="mobile-menu hidden ">
                    <a href="#projects" className="block py-2 px-4 text-sm hover:bg-sky-500 rounded-lg">Projects</a>
                    <a href="#skills" className="block py-2 px-4 text-sm hover:bg-sky-500 rounded-lg">Skills</a>
                    <a href="#contact" className="block py-2 px-4 text-sm hover:bg-sky-500 rounded-lg">Contact</a>
                </div>
            </div>


        </header>
    );
}
