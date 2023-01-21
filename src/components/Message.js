import { useState } from 'react';

export const Message = () => {
    const [message, setMessage] = useState('Welcome visitor') // inital string value
    return (
        <div>
            <h1>{ message }</h1>
            <button onClick={() => setMessage('Thank you for visiting our site!')}>Confirm Visit</button>
        </div>
    )
}