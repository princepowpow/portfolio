import React from "react";
import './navbar.css';
import {BsArrowRight} from 'react-icons/bs';


export default function About() {


    window.addEventListener('scroll', function () {

        const herotex = document.querySelector('.herotext');
        const herotext = document.querySelector('.herotext2');


        if (window.scrollY > 150) {
            herotex?.classList.add('herofade');
            herotext?.classList.add('herofade');
        }
    }, false);


    window.addEventListener('scroll', function () {
        const herobild = document.querySelector('.heropic');

        if (window.scrollY > 230) {
            herobild.classList.add('herofade');

        }
    }, false);


    return (
        <section id="about" className="about">
            <div >

            </div>

            <div className="mx-auto 2xl:pt-64 xl:pt-32 pt-14 bg-emerald-900 mx-auto flex px-10 pb-8 md:flex-row flex-col items-center">
                <div className="hero herotext mx-auto font-serif lg:pr-24 md:pr-16 flex flex-col md:text-left mb-26 items-center text-center md:pl-14 2xl:pb-64 2xl:pl-64">
                    <h1 className="text-white 2xl:text-8xl md:mr-auto text-5xl mb-8 font-bold">

                        <br className=" lg:inline-block sm:inline-block" />I'm Jan Paul <span className="text-blue-600 hover:blur-sm ">Breckow</span>
                    </h1>
                    <br/>
                    <p className="tracking-wide xl:text-xl text-xl italic md:mr-auto mb-20 items-center text-white animate-pulse z-0">
                        I think, I communicate, I create.
                    </p>
                    <div className="hidden md:block md:mr-auto flex justify-center pl-2">
                        <br/>
                        <br/>
                        <a
                            href="#projects"
                            className="text-sm lg:mr-14 md:block tracking-wider items-center text-white border-2 py-2 px-4 focus:outline-none hover:opacity-80 hover:scale-110  rounded-xl  mt-4 md:mt-0">
                            EXPLORE MY WORK &nbsp; <svg className="w-5 h-6 mt-1 inline-flex"><BsArrowRight></BsArrowRight></svg>
                        </a>

                    </div>
                </div>
                <div className=" md:w-1/2 w-5/6 fadeInDown 2xl:pr-64">
                    <img loading="lazy"
                        className=" object-cover object-center hero heropic mx-auto"

                        alt="hero"
                        src="./Person.png"
                    />

                </div>

            </div>

            <svg height="70px" width="100%" className="curved" viewBox="0 0 500 80" preserveAspectRatio="none">
                <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" fill="#064e3b" />
            </svg>
        </section>
    );
}
