import { useState } from "react";
import "./App.css"
import Button from "./Components/Button";
import Thumbnail from "./Components/Thumbnail";
import videoData from "./data/videoData"

function App(){
    const [video, setVideo] = useState(videoData)
    return(

        <div className="App">

            <div className="container">

                <button className="btn" onClick={()=>{
                    setVideo([...videoData,{
                        id:videoData.length+1,
                        title:"Learn Vue JS in One Video",
                        channel:"Code Dost",
                        views:"10K",
                        time:"few days ago",
                        verified:true,
                    }])

                }}>Add Video</button>

                {videoData.map((user)=> (
                    <div className="con">
                    <Thumbnail

                        key={user.id}
                        title={user.title}
                        channel={user.channel}
                        views={user.views}
                        time={user.time}
                        verified={user.verified}
                        id={user.id}

                    />
                    <Button onPlay={()=>console.log("Playing..")} onPaused={()=>console.log("Paused..")}>Play</Button>
                    </div>
                ) )}


            </div>

        </div>
    );

}
export default App;