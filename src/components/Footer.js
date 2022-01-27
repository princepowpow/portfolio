import React from 'react';
import './footer.css';


function Footer() {
    return (
        <section id="footer" className="footer bg-sky-800 font-serif">
            <hr className="footer-seperator" />
            <section className="footer-social-media text-white">
                <a href="https://www.linkedin.com/in/breckow/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </section>
            <section className="footer-info">
                <section className="footer-info-left">
                    <section className="footer-info__name">
                        Jan Paul Breckow
                    </section>
                </section>
                <section className="footer-info-center">
                    <section className="footer-info__email">
                        paul.breckow@web.de
                    </section>
                    <section className="footer-info__terms">

                    </section>
                </section>
                <section className="footer-info-right">
                    <section className="footer-info__number">

                    </section>
                    <section className="footer-info__contact">


                        <a href="#contact">Contact Us</a>
                    </section>
                </section>
            </section>
            <hr className="footer-seperator" />
        </section>
    )

};


export default Footer;
