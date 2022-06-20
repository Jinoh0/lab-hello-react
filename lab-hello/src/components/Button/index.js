


function Button (props){
    return (
        <button className={props.class} id={props.id}>
            {props.children}
        </button>
    )
}

export default Button;