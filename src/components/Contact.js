import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';


export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3n5kvf9', 'template_1fxze6n', e.target, 'user_8hQQyGRnfa1GAe917gsmb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contact" className="bg-slate-100">
        <form action="" onSubmit={sendEmail}>
            <div className="px-20 container grid px-5 py-10 mx-auto ">
            <div className="formWord contact-box">
                <div className="left p-4">
                    <img src="./background.jpg" alt="back"/>
                </div>
                <div className="right">
                    <br/>
                    <br/>
                <h2 className="text-center sm:text-4xl text-3xl font-medium title-font text-black mb-4">Contact Me!</h2>
                <span>Full Name</span>
                <br/>
                <input className="input100 field" type="text" placeholder="Name" name="fullName" required/>
                <br/>
                <span>Phone Number</span>
                <br/>
                <input className="input100 field" type="text" placeholder="Phone" name="phone" required/>
                <br/>
                <span>Email</span>
                <br/>
                <input className="input100 field" placeholder="Email" type="text" name="email" required/>
                <br/>
                <span>Message</span>
                <br/>
                <textarea className="input100 field" placeholder="Message" type="text" name="message" required/>
                <br/>
                <button className="btn">Submit</button>
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
