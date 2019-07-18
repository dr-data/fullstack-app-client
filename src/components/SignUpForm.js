import React from 'react'

export default function SignUpForm(props) {
    return (
        <div>
            <div id='signUpForm'>
            No account? Sign up please!
                <form onSubmit={props.onSubmit} className='submitForm'>
                    <input 
                        type='text' 
                        name='username'
                        placeholder='Enter your username'
                        onChange={props.onChange}
                        value={props.values.username}
                        className='input'
                        required
                        
                    />
                    <input
                        type='password' 
                        name='password'
                        placeholder='Enter your password'
                        onChange={props.onChange}
                        value={props.values.password}
                        className='input'
                        required
                    />
                    <input
                        type='password'
                        name='password_confirmation'
                        placeholder='Confirm you password'
                        onChange={props.onChange}
                        value={props.values.password_confirmation}
                        className='input'
                        required
                    />
                    <button className='button'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}
