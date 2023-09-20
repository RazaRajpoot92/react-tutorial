import "./Button.css"
function Button(){

    return(
        <button className="btn" onClick={()=> alert("Playing!!!")}>Play</button>
    );

}

export default Button;