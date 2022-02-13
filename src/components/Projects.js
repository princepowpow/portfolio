import React from "react";
import './aboutperson.css';
import ReactPlayer from "react-player";


export default function Projects() {


    return (
        <section id="projects" className=" bg-slate-100 text-black body-font">

            <div className="font-serif container px-5 pt-10 mx-auto text-center">
                <div className="mb-20"></div>
                <div className="flex flex-col mb-20">
                    <h2 className="font-bold text-5xl mb-4 text-black ">
                        Projects I've done!
                    </h2>
                    <p className="lg:w-2/3 text-lg mx-auto font-serif leading-relaxed ">
                        Here you can find a few of my projects I did in the past years. You can visit Websites that
                        I created. There a few Videos on YouTube, you can watch. Besides that, you can find some of my
                        Design-Works and
                        download the PDF-File.
                    </p>
                    <br/>
                </div>
                <div className="newprojects ">

                    <div className="webdev">
                        <div>
                            <h3 className="font-bold font-heading text-4xl text-black mb-4 underline underline-offset-8">Web
                                Development</h3>
                            <br/>
                            <p className="lg:pb-14 text-lg">HTML / CSS / JS / Angular / React / SQL / WordPress /
                                Joomla </p>
                        </div>
                        <br/>

                        <div className="flex flex-col lg:flex-row gap-8 text-white tracking-wide">

                            <div
                                className="drop-shadow-xl hover:animate-none border-2 lg:-skew-y-3 shadow-2xl p-8 p-8 rounded-2xl border-gray-800 bg-gray-800 xl:hover:opacity-80 xl:hover:scale-110 ">
                                <a href="https://www.liebig-museum.de/">
                                    <img loading="lazy"
                                         className="rounded-lg w-full pic object-scale-down hover:animate-pulse"
                                         src="./liebig.png" alt="Liebig"/>
                                </a>
                                <br/>
                                <p className="italic ">Liebig-Museum Gießen</p>


                            </div>

                            <div
                                className="drop-shadow-xl hover:animate-none border-2 p-8 lg:-skew-y-3 shadow-2xl rounded-2xl border-gray-800 bg-gray-800 xl:hover:opacity-80 xl:hover:scale-110 ">
                                <a href="https://thornsend.de/">
                                    <img loading="lazy" className="rounded-lg pic object-scale-down hover:animate-pulse"
                                         src="./thorn-.png" alt="Thorn"/>
                                </a>
                                <br/>
                                <p className="italic">thornsend Production</p>
                            </div>
                            <div
                                className="drop-shadow-xl hover:animate-none border-2 p-8 lg:-skew-y-3 shadow-2xl rounded-2xl border-gray-800 bg-gray-800 xl:hover:opacity-80 xl:hover:scale-110 ">
                                <a href="http://skitsmag.de/">
                                    <img loading="lazy"
                                         className="rounded-lg w-full pic object-scale-down hover:animate-pulse"
                                         src="./skits.png" alt="Skits"/>
                                </a>
                                <br/>
                                <p className="italic">skits - Musikmagazin</p>
                            </div>

                            <div
                                className="drop-shadow-xl hover:animate-none border-2 p-8 lg:-skew-y-3 shadow-2xl rounded-2xl border-gray-800 bg-gray-800 xl:hover:opacity-80 xl:hover:scale-110 ">
                                <a href="https://www.manelan.de">
                                    <img loading="lazy"
                                         className="rounded-lg w-full pic object-scale-down hover:animate-pulse"
                                         src="./Ilmenau2.jpg" alt="Ilmenau"/>
                                </a>
                                <br/>
                                <p className="italic">Ilmenau - Immobilien</p>
                            </div>

                        </div>
                        <br/>
                        <br/>

                    </div>

                    <div className="videos">
                        <div>
                            <br/>
                            <h3 className="font-bold font-heading text-4xl text-black mb-4 underline underline-offset-8">Videography</h3>
                            <br/>
                            <p className="lg:pb-14 text-lg">Animals & Nature / Droneshots / Timelapse / Interviews </p>
                        </div>
                        <br/>

                        <div className="videoscrolldiv flex gap-8 text-white items-center tracking-wide">

                            <div
                                className="videoscroll border-2 p-12 mb-4 border-gray-800 bg-gray-800 w-full rounded-2xl ">

                                <ReactPlayer loading="lazy "controls url='https://youtu.be/7GfuKofpVZI'className="vid"></ReactPlayer>

                                <br/>
                                <br/>
                                <p className="italic">Andean Condor</p>
                            </div>

                            <div
                                className="videoscroll border-2 p-12 mb-4 border-gray-800 bg-gray-800 w-full rounded-2xl">

                                <ReactPlayer controls url='https://www.youtube.com/embed/I67EJ4WyAZg'className="vid"></ReactPlayer>


                                <br/>
                                <br/>
                                <p className="italic">Drone Shots</p>
                            </div>
                            <div
                                className="videoscroll border-2 p-12 mb-4 border-gray-800 bg-gray-800 w-full rounded-2xl">

                                <ReactPlayer controls url='https://www.youtube.com/embed/F-D69GbGph0'className="vid"></ReactPlayer>

                                <br/>
                                <br/>
                                <p className="italic">Animals</p>
                            </div>

                            <div
                                className="videoscroll border-2 p-12 mb-4 border-gray-800 bg-gray-800 w-full rounded-2xl">

                                <ReactPlayer controls preload="none" url='https://www.youtube.com/embed/BjOhnt2Yp3g'className="vid"></ReactPlayer>

                                <br/>
                                <br/>
                                <p className="italic">Timelapse</p>
                            </div>
                            <div
                                className="videoscroll border-2 p-12 mb-4 border-gray-800 bg-gray-800 w-full rounded-2xl">

                                <ReactPlayer controls preload="none" url='https://www.youtube.com/embed/l6HvwelrXUA'className="vid"></ReactPlayer>

                                <br/>
                                <br/>
                                <p className="italic">Mobile Videos</p>

                            </div>

                        </div>
                        <br/>

                    </div>

                    <div className="design">
                        <div>
                            <br/>
                            <br/>
                            <h3 className="font-bold font-heading text-4xl text-black mb-4 underline underline-offset-8">Design
                                & Projects</h3>
                            <br/>
                            <p className="lg:pb-14 text-lg">Adobe Illustrator / InDesign / PremierePro / AfterEffects /
                                Photoshop / <br/>Social-Media-Marketing</p>
                        </div>
                        <br className="falls scroll nicht mehr erwünscht: flex-col lg:flex-row"/>

                        <div className=" flex flex-col lg:flex-row gap-8 text-white tracking-wide">

                            <div
                                className=" hover:animate-none border-2 lg:skew-y-3 p-8 shadow-2xl rounded-2xl border-gray-800 bg-gray-800 xl:hover:opacity-80 xl:hover:scale-110 ">
                                <a href='./PacoyaStyleguideNewFinal.pdf' download>
                                    <img loading="lazy" alt="pacoya"
                                         className=" rounded-lg w-full pic object-scale-down hover:animate-pulse"
                                         src="./pacoy.png"/>
                                    <br/>
                                    <p className=" italic">Brand Development <br/>(Download PDF) </p>
                                </a>

                            </div>

                            <div
                                className=" hover:animate-none border-2 lg:skew-y-3 p-8 shadow-2xl rounded-2xl border-gray-800 bg-gray-800 xl:hover:opacity-80 xl:hover:scale-110 ">

                                <img loading="lazy" className="rounded-lg pic object-scale-down hover:animate-pulse"
                                     src="./Moodboard_1.jpg" alt="Moodboard"/>


                                <br/>
                                <p className="italic">Moodboards</p>
                            </div>
                            <div
                                className=" hover:animate-none border-2 lg:skew-y-3 p-8 shadow-2xl border-gray-800 rounded-2xl bg-gray-800 xl:hover:opacity-80 xl:hover:scale-110 ">

                                <img loading="lazy"
                                     className="rounded-lg w-full pic object-scale-down hover:animate-pulse"
                                     src="./Icons_1.png" alt="Icons"/>

                                <br/>
                                <p className="italic">Icons / Illustrations </p>
                            </div>

                            <div
                                className=" hover:animate-none border-2 lg:skew-y-3 p-8 shadow-2xl border-gray-800 rounded-2xl bg-gray-800 xl:hover:opacity-80 xl:hover:scale-110 ">

                                <img loading="lazy"
                                     className="rounded-lg w-full pic object-scale-down hover:animate-pulse"
                                     src="./Plakat.png" alt="Plakat"/>

                                <br/>
                                <p className="italic">Posters</p>
                            </div>
                            <br/>

                        </div>
                        <br/>
                        <br/>
                        <div className="xl:pt-20">

                        </div>

                    </div>


                </div>


            </div>
        </section>

    );
}
