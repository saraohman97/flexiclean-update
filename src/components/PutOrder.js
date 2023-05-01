import React, { useState } from 'react'

const PutOrder = ({ setOrderModalOpen }) => {
    const [nextView, setNextView] = useState(false)

    return (
        <form>
            <div className='order-content'>
                <button className="btn-close" onClick={() => setOrderModalOpen(false)}>X</button>

                <div className="order-form">
                    {!nextView && (
                        <>
                            <div className="order-form-left">
                                <h1 className='order-title'>Beställning</h1>
                                <div className='input-group'>
                                    <label htmlFor="text" className='order-label'>Fullständigt namn</label> <br />
                                    <input type="text" className='order-input-field' />
                                </div>
                                <div className='input-group'>
                                    <label htmlFor="text" className='order-label'>Email adress</label> <br />
                                    <input type="email" className='order-input-field' />
                                </div>
                                <div className='input-group'>
                                    <label htmlFor="text" className='order-label'>Mobil nummer</label> <br />
                                    <input type="text" className='order-input-field' />
                                </div>
                                <div className="order-size-inputs">
                                    <div className='order-size input-group'>
                                        <label htmlFor="text" className='order-label'>B</label>
                                        <input type="number" min={0} className='order-input-field' />
                                    </div>
                                    <div className='order-size input-group'>
                                        <label htmlFor="text" className='order-label'>H</label>
                                        <input type="number" min={0} className='order-input-field' />
                                    </div>
                                </div>
                            </div>
                            <div className="order-form-right">
                                <div>
                                    <label htmlFor="text" className='order-label'>Kassett eller filter typ</label> <br />
                                    <select className='order-input-field input-group'>
                                        <option value="default">Välj</option>
                                        <option value="kassett 1">Kassett 1</option>
                                        <option value="kassett 2">Kassett 2</option>
                                        <option value="kassett 1">Filter 1</option>
                                        <option value="kassett 2">Filter 2</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="text" className='order-label'>Meddelande</label> <br />
                                    <textarea className='order-input-field input-group' cols="30" rows="5"></textarea>
                                </div>
                                <button className='btn btn-blue' onClick={() => setNextView(true)}>Nästa</button>
                            </div>
                        </>
                    )}

                    {nextView && (
                        <>
                            <div className="order-form-left">
                                <h1 className='order-title'>Beställning</h1>
                                <div className='input-group'>
                                    <label htmlFor="text" className='order-label'>Fullständigt namn</label> <br />
                                    <input type="text" className='order-input-field' />
                                </div>
                                <div className='input-group'>
                                    <label htmlFor="text" className='order-label'>Email adress</label> <br />
                                    <input type="email" className='order-input-field' />
                                </div>
                                <div className='input-group'>
                                    <label htmlFor="text" className='order-label'>Mobil nummer</label> <br />
                                    <input type="text" className='order-input-field' />
                                </div>
                                <button className='btn btn-gray' onClick={() => setNextView(false)}>Tillbaka</button>
                            </div>
                            <div className="order-form-right">
                                <div className='input-group'>
                                    <label htmlFor="text" className='order-label'>Fullständigt namn</label> <br />
                                    <input type="text" className='order-input-field' />
                                </div>
                                <div className='input-group'>
                                    <label htmlFor="text" className='order-label'>Email adress</label> <br />
                                    <input type="email" className='order-input-field' />
                                </div>
                                <div className='input-group'>
                                    <label htmlFor="text" className='order-label'>Mobil nummer</label> <br />
                                    <input type="text" className='order-input-field' />
                                </div>
                                <button className='btn btn-blue' type='submit'>Lägg beställning</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </form>
    )
}

export default PutOrder