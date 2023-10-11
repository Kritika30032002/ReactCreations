export function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <div className = "face"
         style = {styles}
         onClick={props.holdDice}>
        <h2 className="die-num">{props.value}</h2>
        </div>
    )

}