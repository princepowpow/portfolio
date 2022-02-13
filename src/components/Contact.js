import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';


export const Contact = () => {
  //  var imdiv = document.getElementById("Message");
    var newspan = document.createElement('span');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3n5kvf9', 'template_1fxze6n', e.target, 'user_8hQQyGRnfa1GAe917gsmb')
            .then((result) => {
                console.log(result.text);

                newspan.innerText="Your Message was send succesfully!";

                document.getElementById("Message").appendChild(newspan);

              //  imdiv?.appendChild(newspan);

                document.getElementById("formular").reset();

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contact" className="transition bg-slate-700 ">
            <svg className="curved rotate-180" height="100px" width="100%" viewBox="0 0 500 80" preserveAspectRatio="none">
                <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" fill="#334155" />
            </svg>
        <form id="formular" action="" onSubmit={sendEmail}>
            <div className="sans-serif container sm:px-20 grid sm:py-10 px-5 mx-auto ">
                <br/>
                <br/>
            <div className="formWord contact-box ">
                <div className="left p-4  flex-row">
                    <img loading="lazy" className="rounded-lg" src="./_1350408.jpg" alt="back"/>
                </div>
                <div className="right text-lg">

                <h2 className="text-center sm:text-4xl text-3xl font-medium font-heading title-font text-black mb-4 underline underline-offset-8">Let's connect!</h2>
                    <br/>
                <span className="">Your Name*</span>
                <br/>
                <input className="input100 field" type="text" placeholder="Name" name="fullName" required/>
                <br/>
                <span>Phone Number</span>
                <br/>
                <input className="input100 field" type="text" placeholder="Phone" name="phone"/>
                <br/>
                <span>Email*</span>
                <br/>
                <input className="input100 field" placeholder="Email" type="text" name="email" required/>
                <br/>
                <span>Message*</span>
                <br/>
                <textarea className="input100 field" placeholder="Message" type="text" name="message" maxLength="1000" required/>
                <br/>
                <button className="btn rounded-lg transition ease-in-out delay-150 bg-gradient-to-r from-teal-500 to-teal-800 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Send</button>
                    <br/>
                    <div id="Message" className="imdiv p-2 font-medium text-green-700">

                    </div>
            </div>

            </div>


            </div>

        </form>
            <br/>
            <br/>

        </section>

    );
};

export default Contact;
