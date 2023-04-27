import React from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Contact = () => {
  return (
    <section className='section contact'>
      <form className='contact-form'>
        <h1 className='contact-title'>Kontakta oss</h1>
        <div>
          <label htmlFor="name" className='contact-label'>Fullständigt namn</label> <br />
          <input type="text" className='contact-input-field' />
        </div>

        <div>
          <label htmlFor="text" className='contact-label'>Mobil eller email</label> <br />
          <input type="text" className='contact-input-field' />
        </div>

        <div>
          <label htmlFor="subject" className='contact-label'>Ärende</label> <br />
          <input type="subject" className='contact-input-field' />
        </div>

        <div>
          <label htmlFor="subject" className='contact-label'>Meddelande</label> <br />
          <textarea name="message" cols="30" rows="10" className='contact-input-field' />
        </div>
        <button className='btn btn-gray'>Skicka meddelande</button>
      </form>

      <div className="contact-img">
        <div className="contact-social">
          <a href="https://twitter.com/FlexiClean"><AiOutlineTwitter size='2rem' color='#205065' /></a>
          <a href="https://www.linkedin.com/in/peder-eneroth-6543a366/"><AiFillLinkedin size='2rem' color='#205065' /></a>
          <a href="https://www.youtube.com/@FlexiClean"><AiFillYoutube size='2rem' color='#205065' /></a>
        </div>
        <div className="contact-info">
          <div className='contact-info-title'>Kontaktuppgifter</div>
          <div>Nummer: 05 75 839 33</div>
          <div>Email: info@flexiclean.eu</div>
          <div>Kontor: <div>Brandthovdagatan 16 <br /> 721 35 Västerås</div></div>
          <div>Öppettider:<div>må–fr: 07.00–16.00 <br />lö: stängt <br />sö: stängt</div></div>
        </div>
      </div>
    </section>
  )
}

export default Contact