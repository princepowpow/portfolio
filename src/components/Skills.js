import { BadgeCheckIcon} from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import './footer.css';

export default function Skills() {
    return (
        <section className="bg-slate-700 transition" id="skills">
            <svg className="curved rotate-180" height="60px" width="100%" viewBox="0 0 500 80" preserveAspectRatio="none">
                <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" fill="#334155" />
            </svg>
            <div className="container px-5 py-10 mx-auto">
                <div className="mb-10">

                </div>
                <div className="text-center mb-8">
                    <h2 className="sm:text-4xl text-3xl font-medium title-font font-heading text-white ">
                        Skills &amp; Software
                    </h2>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">

                    </p>
                    <br/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-2  sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 lg:p-4 sm:w-1/2 w-full try2">
                            <div className="bg-gradient-to-r from-teal-800 to-teal-400 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-white ">
                  {skill}
                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <svg className="curved" width="100%" height="50px" viewBox="0 0 500 80" preserveAspectRatio="none">
                <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" fill="#334155" />
            </svg>
        </section>
    );
}
