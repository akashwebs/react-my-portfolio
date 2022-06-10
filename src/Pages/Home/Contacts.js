import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
const Contacts = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        

        emailjs.sendForm('service_yy4tvqk', 'template_81pa0r8', form.current, 'mPLAQ1HYHf7NuKyvp')
        .then((result) => {
          
                toast.success('Deliverd your Email')
          
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };



   
    

    return (

        <div style={{margin:'0 0 30px 0'}} class="contact" id="contact">
            <h1 class="heading"><span>contact</span> me</h1>

            <form ref={form} onSubmit={sendEmail}>
                <input required type="text" name="user_name" placeholder="your name" class="box" />

                <input required type="email" name="user_email" placeholder="your email" class="box" />
                <input type="text" name="subject" placeholder="subject" class="box" />
                <textarea required name="message" class="box" placeholder="your message" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="send Message" class="btn" />
            </form>

        </div>

    );
};

export default Contacts;