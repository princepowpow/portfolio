import React from 'react';
import './footer.css';


function Footer() {
    return (
        <section id="footer" className="footer bg-slate-700 font-serif">

            <section className="footer-social-media text-white gap-8">

                <a href="https://www.linkedin.com/in/breckow/" target="_blank" rel="noopener noreferrer">
                    <img className="w-8 hover:opacity-70 hover:scale-125 shadow-lg hover:shadow-xl"  src="./linkedin-icon-2.svg" alt="nada"/>
                </a>

                <a href="https://www.facebook.com/paul.breckow" target="_blank" rel="noopener noreferrer">
                    <img className="w-8 hover:opacity-70 hover:scale-125 shadow-lg hover:shadow-xl" src="./facebook-4.svg" alt="fb"/>
                </a>

                <a href="https://www.instagram.com/prinzpowpow/" target="_blank" rel="noopener noreferrer">
                    <img className="w-8  hover:opacity-70 hover:scale-125 shadow-lg hover:shadow-xl" src="./instagram-2-1.svg" alt="insta"/>
                </a>

            </section>

            <section className="footer-info">
                <section className="footer-info-left">

                </section>
                <section className="footer-info-center">
                    <section className="footer-info__email">
                        paul.breckow@web.de
                    </section>

                </section>
                <section className="footer-info-right ">

                </section>
            </section>
            <hr className="footer-seperator" />
        </section>
    )

};


export default Footer;
