import React from 'react'

export default function TicketForm(props) {
    
    return (
        <div>
            <form id='selectModels' onSubmit={props.onSubmit} onChange={props.onChange}>
                <label>picture
                <input type='text' name='picture' value={props.values.picture} onChange={props.onChange} required /></label>
                <label>price
                <input type='number' name='price' value={props.values.price} onChange={props.onChange} required /></label>
                <label>description
                <input type='text' name='description' value={props.values.description} onChange={props.onChange} required /></label>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}