import React from 'react'

export default function LoginForm (props){
        return (
            <div >
            Already have an account?
                <form onSubmit={props.onSubmit} className='forms login'>
                    <input 
                        type='text' 
                        name='username'
                        placeholder='Enter your username'
                        onChange={props.onChange}
                        value={props.values.username}
                    />
                    <input
                        type='password' 
                        name='password'
                        placeholder='Enter your password'
                        onChange={props.onChange}
                        value={props.values.password}
                    />
                    <button className='button'>Login</button>
                </form>
            </div>
        ) 
}
