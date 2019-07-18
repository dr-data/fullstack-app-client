import React from 'react'

export default function EventForm (props) {
  return (
    <div>
         <form id='selectModels' onSubmit={props.onSubmit} onChange={props.onChange}>
                <label>Title
                <input type='text' name='title' value={props.values.title} onChange={props.onChange} required/></label>
                <label>description
                <input type='text' name='description' value={props.values.description} onChange={props.onChange} required /></label>
                <label>featured image
                <input type='text' name='picture' value={props.values.picture} onChange={props.onChange} required /></label>
                <label>event starts
                <input type='date' name='startDate' value={props.values.startDate} onChange={props.onChange} required /></label>
                <label>event ends
                <input type='date' name='endDate' value={props.values.endDate} onChange={props.onChange} required /></label>
            <button type='submit'>Add</button>
          </form> 
    </div>
  )
}