import React, { useState } from 'react';
import { loginAuth } from "../Services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function LoginPage( { onSuccessCallback } ) {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    
    return (
        <div>
            <input
                placeholder={'Username'}
                onChange={( e ) => setUsername(e.target.value)}
            />
            
            <input
                placeholder={'Password'}
                onChange={( e ) => setPassword(e.target.value)}
            />
            
            <button
                onClick={() => loginAuth({ username, password })
                    .then(res => {
                        onSuccessCallback(res)
                    })
                }
            >
                <FontAwesomeIcon icon={'exclamation'} />
                Log in
            </button>
        </div>
    );
}

