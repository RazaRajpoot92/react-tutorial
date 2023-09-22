import "./AddVideo.css"
function AddVideo(){

    return(
        <div className="form-main-container">
    <form className="">
        <input className="form-input" type="text" placeholder="Enter Title" />
        <input className="form-input" type="text" placeholder="Views" />

        <button className="btn1">
            Add Video
        </button>
    </form>
    </div>
    )
}

export default AddVideo;