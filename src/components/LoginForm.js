import React from 'react'

export default function LoginForm (props){
        return (
            <div >
                <form onSubmit={props.onSubmit} className='forms login'>
                    <input 
                        type='text' 
                        name='username'
                        placeholder='Enter your username'
                        onChange={props.onChange}
                        value={props.values.username}
                        className='input'
                    />
                    <input
                        type='password' 
                        name='password'
                        placeholder='Enter your password'
                        onChange={props.onChange}
                        value={props.values.password}
                        className='input'
                    />
                    <button className='button'>Login</button>
                </form>
            </div>
        ) 
}
