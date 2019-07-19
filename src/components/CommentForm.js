import React from 'react'

export default function CommentForm (props) {
    return (
        <div>
            <form id='commentForm' onSubmit={props.onSubmit} onChange={props.onChange}>
                
                <textarea type='text' name='text' placeholder='add your comment' value={props.values.text} onChange={props.onChange} required className='input'/>
                <button type='submit' className='button'>Comment</button>
            </form>
        </div>
    )
}
