import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { addPost } from '../data/api.js';



const Contact = () => {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  // const [error, setError] = useState(false)


  const queryClient = useQueryClient()

  const addPostMutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts")
    }
  })

  const handleSubmit = e => {
    e.preventDefault()
    addPostMutation.mutate({ name, mobile, subject, body })
    setName(''); setMobile(''); setSubject(''); setBody('')
  }

  return (
    <section className='section contact'>
      <form onSubmit={handleSubmit} className='contact-form'>
        <h1 className='contact-title'>Kontakta oss</h1>
        <div className='input-group'>
          <label htmlFor="name" className='label'>Fullständigt namn</label> 
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className='input-field'
          />
        </div>

        <div className='input-group'>
          <label htmlFor="text" className='label'>Mobil eller email</label>
          <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="text" className='input-field' />
        </div>

        <div className='input-group'>
          <label htmlFor="subject" className='label'>Ärende</label> 
          <input value={subject} onChange={(e) => setSubject(e.target.value)} type="subject" className='input-field' />
        </div>

        <div className='input-group'>
          <label htmlFor="body" className='label'>Meddelande</label> 
          <textarea value={body} onChange={(e) => setBody(e.target.value)} name="body" cols="30" rows="10" className='input-field' />
        </div>
        <button type='submit' className='btn btn-gray'>Skicka meddelande</button>
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