import "./App.css"
import Thumbnail from "./Components/Thumbnail";

function App(){

    let thumData = [{
        title:"Learn React JS in One Video",
        channel:"Code Dost",
        views:"100K",
        time:"a month ago",
    },
    {
        title:"Learn Vue JS in One Video",
        channel:"Code Dost",
        views:"10K",
        time:"few days ago",
    },
    {
        title:"Learn Mongo DB in One Video",
        channel:"Code Dost",
        views:"200K",
        time:"a month ago",
    },
    {
        title:"Learn Node JS in One Video",
        channel:"Code Dost",
        views:"1M",
        time:"year ago",
    },
]

    return(

        <div className="App">

            {thumData.map((user)=> (
                <Thumbnail
                title={user.title}
                channel={user.channel}
                views={user.views}
                time={user.time} />
            ) )}




        </div>
    );

}
export default App;