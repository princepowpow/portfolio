import React from "react";


export default function About() {
    return (
        <section id="about" className="about">
            <div className=" bg-gradient-to-r from-sky-800 to-indigo-500 mx-auto flex px-10 py-8 md:flex-row flex-col items-center">
                <div className="font-serif md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-26 items-center text-center pl-14">
                    <h1 className="md:mr-auto title-font sm:text-4xl text-3xl mb-8 font-medium  ">

                        <br className="hidden lg:inline-block sm:inline-block" />I'm Jan Paul Breckow.
                    </h1>
                    <p className="md:mr-auto mb-20 items-center text-white animate-pulse">
                        I think, I create, I publish.
                    </p>
                    <div className="hidden md:block md:mr-auto flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-slate-200 bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded-lg text-lg">
                            Want to work with me ?
                        </a>

                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 fadeInDown">
                    <img
                        className="object-cover object-center rounded pt-8"

                        alt="hero"
                        src="./Person.png"
                    />
                </div>
            </div>
        </section>
    );
}
