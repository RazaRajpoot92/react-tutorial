import "./App.css"
import Button from "./Components/Button";
import Thumbnail from "./Components/Thumbnail";
import videoData from "./data/videoData"

function App(){

    return(

        <div className="App">

            <div className="container">

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