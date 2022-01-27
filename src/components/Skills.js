import { BadgeCheckIcon} from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
        <section className="bg-slate-100 " id="skills">
            <div className="px-20 container px-5 py-10 mx-auto">
                <div className="mb-20">

                </div>
                <div className="text-center mb-20">
                    <h2 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
                        Skills &amp; Softwares
                    </h2>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Vielen Dank für deine Anfrage! Ich werde mich zeitnah melden.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gradient-to-r from-sky-800 to-indigo-500 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4 animate-pulse" />
                                <span className="title-font font-medium text-white">
                  {skill}
                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mb-20" ></div>
            </div>
        </section>
    );
}
