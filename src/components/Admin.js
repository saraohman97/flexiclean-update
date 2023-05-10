import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { addPost } from '../data/api.js';
import { useNavigate } from 'react-router-dom';

const Admin = ({ setShowAdmin }) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [errorAdmin, setErrorAdmin] = useState(false)
    const navigate = useNavigate()
    const current = new Date();
    const [post, setPost] = useState({
        title: '',
        message: '',
        image: '',
        link: '',
        date: `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}, ${current.getHours()}.${current.getMinutes()}`
    })
    const [admin, setAdmin] = useState({
        user: '',
        password: ''
    })

    const handleLogin = (e) => {
        e.preventDefault()
        if (admin.user === 'a' && admin.password === 'a') {
            setLoggedIn(true)
        } else {
            setErrorAdmin(true)
        }
    }
    const handleLogingChangeInput = (e) => {
        setAdmin({
            ...admin,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeInput = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const queryClient = useQueryClient()

    const addPostMutation = useMutation(addPost, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts")
        }
    })

    const handleSubmit = e => {
        e.preventDefault()
        addPostMutation.mutate({
            ...post
        });
        setShowAdmin(false)
        navigate('/')
    }

    return (
        <div className='admin-content'>
            <button className="btn-close" onClick={() => setShowAdmin(false)}>X</button>

            {!loggedIn && (
                <div className='admin-form'>
                    <h1 className='admin-title'>Admin</h1>
                    <h4 className='admin-subtitle'>Logga in</h4>

                    <div className='input-group'>
                        <label htmlFor="text" className='label'>Användarnamn</label>
                        <input onChange={handleLogingChangeInput} name='user' value={admin['user']} type="text" className='input-field' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password" className='label'>Lösenord</label>
                        <input onChange={handleLogingChangeInput} name='password' value={admin['password']} type="password" className='input-field' />
                    </div>

                    {errorAdmin && <p style={{ color: 'red' }}>Fel användarnamn eller lösenord.</p>}

                    <button onClick={handleLogin} className='btn btn-gray'>Logga in</button>
                </div>
            )}

            {loggedIn && (
                <>
                    <form onSubmit={handleSubmit} className="admin-form">
                        <h1 className='admin-title'>Skriv nyhet</h1>
                        <h4 className='admin-subtitle'>Skriv ett nytt inlägg</h4>

                        <div className="input-group">
                            <label htmlFor="text" className='label'>Rubrik</label>
                            <input name='title' value={post['title']} onChange={handleChangeInput} type="text" className='input-field' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="text" className='label'>Meddelande</label>
                            <textarea name='message' value={post['message']} onChange={handleChangeInput} type="text" rows="5" className='input-field' />
                        </div>
                        <div className='admin-input-wrapper'>
                            <div className="input-group">
                                <label htmlFor="text" className='label'>Bild</label>
                                <input type="file" name='image' value={post['image']} onChange={handleChangeInput} className='input-field' />
                            </div>
                            <div className="input-group">
                                <label htmlFor="text" className='label'>Link</label>
                                <input type="file" name='link' value={post['link']} onChange={handleChangeInput} className='input-field' />
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