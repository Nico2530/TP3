import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './PageEmail.css'

function PageEmail() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_bccx78q', 'template_79kn84o', form.current, {
                publicKey: 'CzkeZ3rwKj1sT9uTy',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Correo enviado exitosamente');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Error al enviar el correo. Inténtalo de nuevo más tarde.');
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default PageEmail