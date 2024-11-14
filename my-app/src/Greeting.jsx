const Greeting = (props) => {
    return (
        <div>
            <h2>Greetings {props.name}, You're {props.age} Years Old</h2>
        </div>
    )
}

Greeting.defaultProps = {
    name: 'Guest',
    age: 'unknown'
}

export default Greeting