

function Icontitlep (props) {
    return(
        <>
        <img src={props.src} alt={props.alt}/>
        <h3>{props.title}</h3>
        <p>{props.p}</p>
        </>
    )         
}

export default Icontitlep;