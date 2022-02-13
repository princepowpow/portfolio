import React, {useRef} from 'react';
import './aboutperson.css';
import {BsFillArrowDownCircleFill, BsFillArrowDownRightCircleFill} from 'react-icons/bs'


export const AboutPerson = () => {

    return (
        <section id="aboutperson" className=" bg-slate-100 text-center xl:mx-72">
            <br/>
            <br/>
            <div className="sans-serif container pt-10 mx-auto">



                <div className="formWord container person-box sm:px-20 sm:py-10 px-5">
                    <div className="left p-2 text-lg flex-row sm:text-right text-center person-info">
                        <br/>
                        <p className="font-heading sm:text-4xl text-3xl font-medium title-font text-black mb-4 underline underline-offset-8">Jan
                            Paul Breckow</p>

                        <p className="p-2  "><span className="italic ">Social Media Systems</span> (B.Sc.)</p>

                        <p className="p-2  ">29 Years / <span className="italic ">Gießen</span></p>

                        <p className="p-2  ">Working Experience <span className="italic ">„Community Management“</span>
                        </p>
                        <p className="p-2  ">Freelancer <span className="italic ">Web-Development</span></p>

                        <p className="p-2  ">Love to explore new <span className="italic ">countries</span> and new
                            cultures</p>
                        <br/>

                        <img loading="lazy" className="rounded-lg mx-auto" src="./SelfieaufMauer.jpg" alt="back"/>
                        <br/>

                    </div>

                    <div className="">

                    </div>

                </div>

            </div>



        </section>

    );
};

export default AboutPerson;
