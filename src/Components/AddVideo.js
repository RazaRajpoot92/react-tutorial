import { useState } from "react"
import "./AddVideo.css"

function AddVideo(){
        
        function changeHandler(e)
        {
            e.stopPropagation()
            console.log(e.target.name)
            console.log(e.target.value)

        }

        function sumbitHandler(e)
        {
            e.preventDefault()
        }

    return(
        <div className="form-main-container">
    <form className="">
        <input className="form-input" name="title" onChange={changeHandler} type="text" placeholder="Enter Title" />
        <input className="form-input" name="views" onChange={changeHandler} type="text" placeholder="Views" />

        <button onClick={sumbitHandler} className="btn1">
            Add Video
        </button>
    </form>
    </div>
    )
}

export default AddVideo;