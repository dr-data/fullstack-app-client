import React from 'react'

export default function CommentForm (props) {
    return (
        <div>
            <form id='selectModels' onSubmit={props.onSubmit} onChange={props.onChange}>
                <label>text
                <textarea type='text' name='text' value={props.values.text} onChange={props.onChange} required className='input'/></label>
                <button type='submit' className='button'>Comment</button>
            </form>
        </div>
    )
}
