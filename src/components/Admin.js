import React, { useState } from 'react'

const Admin = ({ setShowAdmin }) => {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div className='admin-content'>
            <button className="btn-close" onClick={() => setShowAdmin(false)}>X</button>

            {!loggedIn && (
                <form className='admin-form'>
                    <h1 className='admin-title'>Admin</h1>
                    <h4 className='admin-subtitle'>Logga in</h4>

                    <div className='input-group'>
                        <label htmlFor="text" className='admin-label'>Användarnamn</label> <br />
                        <input type="text" className='admin-input-field' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password" className='admin-label'>Lösenord</label> <br />
                        <input type="password" className='admin-input-field' />
                    </div>

                    <button className='btn btn-gray' onClick={() => setLoggedIn(true)}>Logga in</button>
                </form>
            )}

            {loggedIn && (
                <>
                    <form className="admin-form">
                        <h1 className='admin-title'>Skriv nyhet</h1>
                        <h4 className='admin-subtitle'>Skriv ett nytt inlägg</h4>

                        <div className="input-group">
                            <label htmlFor="text" className='admin-label'>Rubrik</label> <br />
                            <input type="text" className='admin-input-field' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="text" className='admin-label'>Meddelande</label> <br />
                            <textarea type="text" rows="5" className='admin-input-field' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="text" className='admin-label'>Bild</label> <br />
                            <input type="file" className='admin-input-field' />
                        </div>
                        
                        <button className='btn btn-gray'>Posta</button>
                    </form>
                </>
            )}

        </div>
    )
}

export default Admin