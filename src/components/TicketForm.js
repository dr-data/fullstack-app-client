import React from 'react'

export default function TicketForm(props) {
    
    return (
        <div className='createTicketContainer'>
            <form id='createTicket' onSubmit={props.onSubmit} onChange={props.onChange}>
                <label>picture
                <input type='text' name='picture' value={props.values.picture} onChange={props.onChange} className='input' required /></label>
                <label>price
                <input type='number' name='price' value={props.values.price} onChange={props.onChange} className='input' required /></label>
                <label>description
                <input type='text' name='description' value={props.values.description} onChange={props.onChange} className='input' required /></label>
                <button type='submit' className='button'>Add</button>
            </form>
        </div>
    )
}