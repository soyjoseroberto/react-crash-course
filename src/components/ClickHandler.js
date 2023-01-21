export const ClickHandler = () => {
    const clickHandler = (event, count = 1) => {
        console.log('Button was clicked', count, event);
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            {/* <p>test</p> */}
            <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
        </div>
    )
}