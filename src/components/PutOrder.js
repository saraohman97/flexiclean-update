import React from 'react'

const PutOrder = ({ setOrderModalOpen }) => {
    return (
        <div className='order-content'>
            <button className="btn-close" onClick={() => setOrderModalOpen(false)}>X</button>

            <form className="order-form">
                <div className="order-form-left">
                    <h1 className='order-title'>Beställning</h1>
                    <div>
                        <label htmlFor="text" className='order-label'>Fullständigt namn</label> <br />
                        <input type="text" className='order-input-field' />
                    </div>
                    <div>
                        <label htmlFor="text" className='order-label'>Email adress</label> <br />
                        <input type="email" className='order-input-field' />
                    </div>
                    <div>
                        <label htmlFor="text" className='order-label'>Mobil nummer</label> <br />
                        <input type="text" className='order-input-field' />
                    </div>
                    <div className="order-size-inputs">
                        <div className='order-size'>
                            <label htmlFor="text" className='order-label'>B</label>
                            <input type="number" min={0} className='order-input-field' />
                        </div>
                        <div className='order-size'>
                            <label htmlFor="text" className='order-label'>H</label>
                            <input type="number" min={0} className='order-input-field' />
                        </div>
                    </div>
                </div>
                <div className="order-form-right">
                    <div>
                        <label htmlFor="text" className='order-label'>Kassett eller filter typ</label> <br />
                        <select className='order-input-field'>
                            <option value="default">Välj</option>
                            <option value="kassett 1">Kassett 1</option>
                            <option value="kassett 2">Kassett 2</option>
                            <option value="kassett 1">Filter 1</option>
                            <option value="kassett 2">Filter 2</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="text" className='order-label'>Meddelande</label> <br />
                        <textarea className='order-input-field' cols="30" rows="10"></textarea>
                    </div>

                    <button className='btn btn-blue'>Nästa</button>
                </div>
            </form>
        </div>
    )
}

export default PutOrder