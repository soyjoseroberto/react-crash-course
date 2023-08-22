import { useState } from 'react';

export const Message = () => {
    const [message, setMessage] = useState('Welcome visitor') // inital string value
    return (
        <div>
            <h2>{ message }</h2>
            <button onClick={() => setMessage('Thank you for visiting our site!')}>Confirm Visit</button>
        </div>
    )
}