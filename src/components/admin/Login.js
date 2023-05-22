import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setShowAdmin }) => {
    const navigate = useNavigate()
    const [errorLogin, setErrorLogin] = useState(false)
    const [admin, setAdmin] = useState({
        user: '',
        password: ''
    })

    const handleLogingChangeInput = (e) => {
        setAdmin({
            ...admin,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        if (admin.user === 'a' && admin.password === 'a') {
            setShowAdmin(false)
            navigate('/post/skapa')
        } else {
            setErrorLogin(true)
        }
    }

    return (
        <div className="admin-content">
            <button className="btn-close" onClick={() => setShowAdmin(false)}>X</button>

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

                {errorLogin && <p style={{ color: 'red' }}>Fel användarnamn eller lösenord.</p>}

                <button onClick={handleLogin} style={{ alignSelf: 'center', marginTop: '1rem' }} className='btn btn-gray'>Logga in</button>
            </div>
        </div>
    )
}

export default Login