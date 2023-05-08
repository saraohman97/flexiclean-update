import React, { useState } from 'react'
import logo from '../assets/logo.png'

const PutOrder = ({ setOrderModalOpen }) => {
    const [nextView, setNextView] = useState(false)

    return (
        <form>
            <div className='order-content'>
                <div className="order-header">
                    <div>
                        <img className='nav-logo' src={logo} alt="logotype flexiclean blue gray grey logo" />
                    </div>
                    <button className="btn-close" onClick={() => setOrderModalOpen(false)}>X</button>
                </div>

                <div className="order-form">
                    {!nextView && (
                        <>
                            <div className="order-form-left">
                                <h1 className='order-title'>Beställning</h1>
                                <p className='order-subtitle'>Går bara att beställa inom Sverige. Kontakta oss för samarbeten utanför Sverige. </p>
                                <div className='input-group'>
                                    <label htmlFor="text" className='label'>För- och efternamn</label>
                                    <input type="text" className='input-field' />
                                </div>
                                <div className='input-group'>
                                    <label htmlFor="text" className='label'>Epost adress</label>
                                    <input type="email" className='input-field' />
                                </div>
                                <div className='input-group'>
                                    <label htmlFor="text" className='label'>Telefon nummer</label>
                                    <input type="text" className='input-field' />
                                </div>
                                <div className="order-size-inputs">
                                    <div className='order-size input-group'>
                                        <label htmlFor="text" className='label'>Bredd</label>
                                        <input type="number" min={0} className='input-field' />
                                    </div>
                                    <div className='order-size input-group'>
                                        <label htmlFor="text" className='label'>Längd</label>
                                        <input type="number" min={0} className='input-field' />
                                    </div>
                                </div>
                            </div>
                            <div className="order-form-right">
                                <div className='input-group'>
                                    <label htmlFor="text" className='label'>Kassett eller filter typ</label>
                                    <select className='input-field'>
                                        <option value="default">Välj</option>
                                        <option value="kassett 1">Kassett 1</option>
                                        <option value="kassett 2">Kassett 2</option>
                                        <option value="kassett 1">Filter 1</option>
                                        <option value="kassett 2">Filter 2</option>
                                    </select>
                                </div>
                                <div className='input-group'>
                                    <label htmlFor="text" className='label'>Meddelande</label>
                                    <textarea className='input-field' cols="30" rows="10"></textarea>
                                </div>
                                <button className='btn btn-gray' onClick={() => setNextView(true)}>Nästa</button>
                            </div>
                        </>
                    )}

                    {nextView && (
                        <>
                            <div className="order-form-left">
                                <h1 className='order-title'>Leverans- <br /> och faktureringsadress</h1>
                                <div className='input-group'>
                                    <label htmlFor="text" className='label'>Faktura email</label>
                                    <input type="text" className='input-field' />
                                </div>
                                <div className='input-group'>
                                    <label htmlFor="text" className='label'>Företagsnamn</label>
                                    <input type="email" className='input-field' />
                                </div>
                                <div className='input-group'>
                                    <label htmlFor="text" className='label'>För- och efternamn</label>
                                    <input type="text" className='input-field' />
                                </div>
                            </div>
                            <div className="order-form-right">
                                <div className='input-group'>
                                    <label htmlFor="text" className='label'>Postnummer</label>
                                    <input type="text" className='input-field' />
                                </div>
                                <div className='input-group'>
                                    <label htmlFor="text" className='label'>Ort</label>
                                    <input type="email" className='input-field' />
                                </div>
                                <div className='input-group'>
                                    <label htmlFor="text" className='label'>Kommun</label>
                                    <input type="text" className='input-field' />
                                </div>
                                <div className="order-btn-wrapper">
                                    <button className='btn btn-gray' onClick={() => setNextView(false)}>Tillbaka</button>
                                    <button className='btn btn-blue' type='submit'>Lägg beställning</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </form>
    )
}

export default PutOrder