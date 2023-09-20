
import { useState } from "react";
import "./Button.css"
function Button({children, onPlay, onPaused}){

    let [state,setState] = useState(false);

    function clickHandler(e){
        e.stopPropagation();
        // overriding the  onPlay function

        function onPlay(){
            console.log("its working");
        }

        //----------------------------//
        if(state) onPaused();

        else onPlay()

        setState(!state)


    }


    return(
        <button className="btn" onClick={clickHandler}>{state?"Pause":children}</button>
    );

}

export default Button;