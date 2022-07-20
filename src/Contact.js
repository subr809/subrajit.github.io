import React from "react";
import { useForm } from '@formcarry/react';
import './stylesheets/Contact.css';
import {motion} from "framer-motion/dist/framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact(props) {
    AOS.init();
    const {state, submit} = useForm({
        id: 'IzKhcPZ7-HG'
    });
 
    // Success message
    if (state.submitted) {
        return <div>Thank you! We received your submission.</div>;
    }
    
    return (
        <motion.div className="contact" 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
        <div className="ContactPage"> 
            <h2 data-aos="slide-right" data-aos-delay="300" data-aos-duration="1000"> Contact Me</h2>
            <div class="card" id="contact-card" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <form onSubmit={submit} class="form-contact">
                    <div class="row" id="row-contact"> 
                        <label htmlFor="email">Your Email</label>
                        <input id="email" type="text" />
                    </div>
                    &nbsp;&nbsp;
                    <div class="row" id="row-contact"> 
                        <label htmlFor="message">Message</label>
                        <textarea rows="10" cols="50" id="message" />
                    </div>
                    &nbsp;&nbsp;
                    <div class="row" id="row-contact"> 
                        <button id="contact-button" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
        </motion.div>
    );
}