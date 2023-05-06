import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { addPost } from '../data/api.js';


const Admin = ({ setShowAdmin }) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [image, setImage] = useState('')
    const [link, setLink] = useState('')

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}, ${current.getHours()}.${current.getMinutes()}`;

    const queryClient = useQueryClient()

    const addPostMutation = useMutation(addPost, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts")
        }
    })

    const handleSubmit = e => {
        e.preventDefault()
        addPostMutation.mutate({ title, message, image, link, date })
          setTitle(''); setMessage(''); setImage(''); setLink('')
    }

    return (
        <div className='admin-content'>
            <button className="btn-close" onClick={() => setShowAdmin(false)}>X</button>

            {!loggedIn && (
                <form className='admin-form'>
                    <h1 className='admin-title'>Admin</h1>
                    <h4 className='admin-subtitle'>Logga in</h4>

                    <div className='input-group'>
                        <label htmlFor="text" className='label'>Användarnamn</label>
                        <input type="text" className='input-field' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password" className='label'>Lösenord</label>
                        <input type="password" className='input-field' />
                    </div>

                    <button className='btn btn-gray' onClick={() => setLoggedIn(true)}>Logga in</button>
                </form>
            )}

            {loggedIn && (
                <>
                    <form onSubmit={handleSubmit} className="admin-form">
                        <h1 className='admin-title'>Skriv nyhet</h1>
                        <h4 className='admin-subtitle'>Skriv ett nytt inlägg</h4>

                        <div className="input-group">
                            <label htmlFor="text" className='label'>Rubrik</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className='input-field' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="text" className='label'>Meddelande</label>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} type="text" rows="5" className='input-field' />
                        </div>
                        <div className='admin-input-wrapper'>
                            <div className="input-group">
                                <label htmlFor="text" className='label'>Bild</label>
                                <input type="file" value={image} onChange={(e) => setImage(e.target.value)} className='input-field' />
                            </div>
                            <div className="input-group">
                                <label htmlFor="text" className='label'>Link</label>
                                <input type="file" value={link} onChange={(e) => setLink(e.target.value)} className='input-field' />
                            </div>
                        </div>

                        <button type='submit' className='btn btn-gray'>Posta</button>
                    </form>
                </>
            )}

        </div>
    )
}

export default Admin