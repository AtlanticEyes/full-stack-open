const Button = (props) => {
    return <button onClick = {props.handleEvent}>{props.text}</button>
}

export default Button