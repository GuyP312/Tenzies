export default function Die(props){
    function bgcolor(){
        return (props.isHeld ? "#59E391" : "#FFFFFF")
    }
    return(
        <>
            <button onClick = {()=> props.hold(props.id)} style = {{backgroundColor: bgcolor()}}>{props.value}</button>
        </>
    )
}