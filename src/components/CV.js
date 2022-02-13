import React from 'react';
import './cv.css';
import {Chrono} from "react-chrono";
import {BsFillArrowDownCircleFill} from 'react-icons/bs';

function Cv() {



    return (
        <section className="bg-slate-100 text-center pt-10 sm:pt-0 pb-10 xl:mx-72">
            <div className="formWord container cv-box grid grid-cols-2 sm:px-20 sm:pb-10 px-5 mx-auto">
                <div className="">
<img alt="welt" loading="lazy" src="./welt3.png" className="back rotatefull rounded-2xl hidden 3xl:flex  hover:sepia "/>
                </div>
            <div className="left p-2 flex-row sm:text-right text-center person-info ">
                <br/>
<div className="text-center object-center inline-flex ">

                <h3 className="font-heading sm:text-4xl text-3xl font-medium title-font text-black mb-4 underline underline-offset-8">Road of Life</h3>
    <br/>
    <br/>
</div>



                <div className="text-center object-center text-lg">

                    <p className="p-2 pb-4"><span className="italic ">Graduation 2012</span> - Theo Koch Schule</p>

       <BsFillArrowDownCircleFill className="w-6 h-6 inline-flex animate-bounce"></BsFillArrowDownCircleFill>

                    <p className="p-2 pb-6"><span className="italic ">Voluntary social year</span> in a workshop
                        for people with disabilities</p>
                    <BsFillArrowDownCircleFill className="w-6 h-6 inline-flex animate-bounce "></BsFillArrowDownCircleFill>
                    <p className="p-2  pb-6">Work and Travel - <span className="italic ">South America</span> </p>

                    <BsFillArrowDownCircleFill className="w-6 h-6 inline-flex animate-bounce"></BsFillArrowDownCircleFill>
                    <p className="p-2  pb-6">Worked as a <span className="italic ">Picker, Deliverer, Waiter, Videograph</span></p>

                    <BsFillArrowDownCircleFill className="w-6 h-6 inline-flex animate-bounce"></BsFillArrowDownCircleFill>
                    <p className="p-2  pb-6"><span className="italic ">Stockfootage</span> of Animals & Nature</p>

                    <BsFillArrowDownCircleFill className="w-6 h-6 inline-flex animate-bounce"></BsFillArrowDownCircleFill>

                    <p className="p-2  pb-6"><span className="italic ">Deploying Websites</span> with Wordpress and Joomla</p>

                    <BsFillArrowDownCircleFill className="w-6 h-6 inline-flex animate-bounce"></BsFillArrowDownCircleFill>
                    <p className="p-2  pb-6"><span className="italic ">Community-Manager</span> in E-Commerce</p>

                    <BsFillArrowDownCircleFill className="w-6 h-6 inline-flex animate-bounce"></BsFillArrowDownCircleFill>
                    <p className="p-2  pb-6"><span className="italic ">Bachelor Degree:</span> Social Media Systems</p>
                <br/>
                    <div className="lg:flex flex-col lg:flex-row">
<button className="btn m-2 rounded-lg transition ease-in-out delay-150 bg-gradient-to-r from-teal-800 to-teal-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                    <a href='/CV_Breckow_English.pdf' download>Download CV (English)</a>
</button>
                    <button className="btn m-2 rounded-lg transition ease-in-out delay-150 bg-gradient-to-r from-teal-500 to-teal-800 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                        <a href='/Lebenslauf_Breckow.pdf' download>Download CV (German)</a>
                    </button>

                <br/>
                    </div>
                </div>
                <br/>
            </div>
            </div>

        </section>



    );
}

export default Cv;
