export const Greet = (props) => {
    return (
        <div>
            <h1>{props.name} a.k.a {props.heroName}</h1>
            <div>{props.children}</div>
        </div>
    )
}

// export default Greet
// Then you can import like: import Greet from 'Greet'; without {}

// props.children returns whatever innerHTML is enclosed between the component tags