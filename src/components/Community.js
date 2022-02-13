import React from 'react';
import './community.css';

function Community() {
    return (
        <section id="communities" className="mx-auto container pt-8">



            <div className="flex bg-slate-100 grid grid-cols-3 pt-10 gap-6">

        <div className="left1  hover:animate-none lg:skew-y-3 p-8 shadow-2xl border-gray-800 rounded-2xl bg-gray-600 xl:hover:opacity-80 xl:hover:scale-110">
            <h2 className="font-bold font-heading text-2xl text-white"> Community Manager / <br/> Social Media Manager</h2>
            <br/>
            <p className="text-xl italic ">What is key, to perfom a good community??</p>
            <br/>

            <img className="rounded-lg w-full pic object-scale-down hover:animate-pulse" src="./colibri.png" alt="colibri">

            </img>
        </div>

                <div className="middle1 hover:animate-none lg:skew-y-3 p-8 shadow-2xl border-gray-800 rounded-2xl bg-gray-600 xl:hover:opacity-80 xl:hover:scale-110">
                    <h2 className="font-bold font-heading text-2xl text-white"> Web Developer / <br/>Web Designer</h2>
                    <br/>
                    <p className="text-xl italic">How to build up a full responsive Website?</p>
                    <br/>

                    <img className="rounded-lg w-full pic object-scale-down hover:animate-pulse" src="./_1380633.jpg"/>

                </div>


            <div className="right1 hover:animate-none lg:skew-y-3 p-8 shadow-2xl border-gray-800 rounded-2xl bg-gray-600 xl:hover:opacity-80 xl:hover:scale-110">

                <h2 className="font-bold font-heading text-2xl text-white">Content Creator / <br/> Social Media</h2>
                <br/>
                <p className="text-xl italic">How to build up a full responsive Website?</p>
                <br/>

                <img className="rounded-lg w-full pic object-scale-down hover:animate-pulse" src="./qoute3.png"/>

            </div>
            </div>
        </section>

    )
}

export default Community;
