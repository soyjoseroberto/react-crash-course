export const ConditionalGreeting = () => {
    // Could also use ternary operator but && is more common
    const isLoggedIn = true;
    return (
        <div>
            <h1>Conditional Rendering</h1>
            <h3>Hello {isLoggedIn && 'Jose'}</h3>
        </div>
    )
}