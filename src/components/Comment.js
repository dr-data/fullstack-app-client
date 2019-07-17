import React from 'react'

export default function Comment(props) {
        const {username, text} = props.comment
        return (
            <div className='commentContainer'>
                <hr />
                <p>{text}</p>
                <h4>from <b>{username}</b></h4>
            </div>
        )
    
}
