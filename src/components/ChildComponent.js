export const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={() => props.greetHandler('Dominic')}>Greet Parent from Child</button>
        </div>
    )
}