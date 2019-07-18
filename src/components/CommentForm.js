import React from 'react'

export default function CommentForm (props) {
    return (
        <div>
            <form id='selectModels' onSubmit={props.onSubmit} onChange={props.onChange}>
                <label>text
                <textarea type='text' name='text' value={props.values.text} onChange={props.onChange} required /></label>
                <button type='submit'>Comment</button>
            </form>
        </div>
    )
}
