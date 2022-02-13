import React, {useEffect, useState} from "react";
import './navbar.css';
import {GiHamburger, GiHamburgerMenu} from 'react-icons/gi';


export default function Navbar() {



    const btn = document.querySelector(".mobile-button");
    const menu = document.querySelector('.mobile-menu');



    const sectionOne = document.querySelector(".header");
    const sections = document.querySelectorAll("section");

    const options = {
        root: null,
        threshold: 0,
        rootMargin: "-20px"
    };

  /*  const observer = new IntersectionObserver(function
        (entries, observer) {
        entries.forEach(entry => {
            entry.target.classList.toggle('reverse');
            console.log(entry);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
*/

    function reloadPage() {
        const header3 = document.querySelector('.header');
        header3?.classList.add('hidden');
    }

    function handleClick() {
        const menu4 = document.querySelector('.mobile-menu');
        menu4?.classList.toggle('hidden');

    }

    const menu2 = document.querySelector(".mobile-menu");
    const hamburger = document.querySelector(".mobile-button");


  /*  hamburger?.addEventListener('click', () => {
        menu2?.classList.toggle('show');
        console.log('Open.');
    })


*/


    function CloseMenu() {
        const menu5 = document.querySelector('.mobile-menu');
        menu5?.classList.toggle('hidden');


    }


  //  btn?.addEventListener("click", handleClick);


    window.addEventListener('scroll', function () {
        const header2 = document.querySelector('.header');



        if (window.scrollY < 40) {
         header2?.classList.add('hidden');

       } else {
           header2?.classList.remove('hidden');
      }
    }, false);


    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');


        if (window.scrollY > 750) {
            header?.classList.add('nav-scrolled');
            menu?.classList.add('menu-scrolled');
        } else {
            header?.classList.remove('nav-scrolled');
            menu?.classList.remove('menu-scrolled');
        }
    }, false);



    return (

        <section id="header" className="header text-white bg-transparent sticky top-0 z-10">


            <div onLoad={reloadPage}
                className="font-serif container mx-auto flex md:pl-16 pr-16 4k:pl-0 items-center sm:pl-0">
                <a href="#" className=" title-font font-medium md:mb-0 ml-3 text-xl">
                    <img
                        className="logo w-32 p-4"

                        alt="hero"
                        src="./logonew.png"
                    />

                </a>

                <nav
                    className="hidden tracking-wider md:block md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 items-center justify-center">
                    <a href="#projects" className="mr-8 font-serif hover: hover:underline underline-offset-8 ">
                        Projects
                    </a>
                    <a href="#skills" className="mr-8 font-serif hover:underline underline-offset-8">
                        Skills
                    </a>
                    <a href="#aboutperson" className="mr-8 font-serif hover:underline underline-offset-8">
                        Person
                    </a>


                </nav>


                <div
                    className="md:hidden justify-items-center flex flex-wrap p-5 pl-40 md:flex-row">
                    <button onClick={handleClick} id="mobile-button" className="mobile-button focus:outline-none focus:border-0 stroke-black ">
                        <GiHamburgerMenu className="h-6 w-6"></GiHamburgerMenu>
                    </button>
                </div>


                <a
                    href="#contact"
                    className="hidden lg:mr-14 md:block inline-flex items-center text-white border-2  py-2 px-5 focus:outline-none hover:opacity-80 hover:scale-110  rounded-2xl  mt-4 md:mt-0">
                    Contact Me
                </a>
                <div className="hidden xl:flex flex-row gap-6">

                <a href="https://www.linkedin.com/in/breckow/" target="_blank" rel="noopener noreferrer">
                    <img className="opacity-70 w-6 hover:opacity-100 hover:scale-125 shadow-lg hover:shadow-xl"  src="./linkedin-icon-2.svg" alt="nada"/>
                </a>

                <a href="https://www.facebook.com/paul.breckow" target="_blank" rel="noopener noreferrer">
                    <img className="opacity-70 w-6 hover:opacity-100 hover:scale-125 shadow-lg hover:shadow-xl" src="./facebook-4.svg" alt="fb"/>
                </a>

                <a href="https://www.instagram.com/prinzpowpow/" target="_blank" rel="noopener noreferrer">
                    <img className="opacity-70 w-6  hover:opacity-100 hover:scale-125 shadow-lg hover:shadow-xl" src="./instagram-2-1.svg" alt="insta"/>
                </a>
                </div>

            </div>
            <div id="mobile-menu" className="mobile-menu tracking-wide -mt-4 hidden flex flex-col mx-auto bg-slate-200 items-center">
                <a href="#projects" onClick={CloseMenu}
                   className="block py-2 px-4 text-md hover:bg-sky-500 rounded-lg">Projects</a>

                <a href="#skills" onClick={CloseMenu}
                   className="block py-2 px-4 text-md hover:bg-sky-500 rounded-lg">Skills</a>
                <a href="#aboutperson" onClick={CloseMenu}
                   className="block py-2 px-4 text-md hover:bg-sky-500 rounded-lg">
                    Person
                </a>
                <a href="#contact" onClick={CloseMenu}
                   className="block py-2 px-4 text-md hover:bg-sky-500 rounded-lg">Contact</a>
            </div>


        </section>
    );

}
 setInterval(Navbar, 1200);

// setTimeout(Navbar, 1000);


