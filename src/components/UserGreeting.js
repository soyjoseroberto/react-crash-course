export const UserGreeting = () => {
    const isLoggedIn = true;
    return <div>Welcome: {isLoggedIn && 'J.R. Rodriguez' }</div>
}