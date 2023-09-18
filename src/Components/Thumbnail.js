import "./Thumbnail.css"



function Thumbnail({title, views, channel, time}){

    

    return(

        <div className="container">

            <div className="content">

            <img className="img" src="https://picsum.photos/300/200" />

            <div className="title">{title}</div>
            <div className="channel">{channel}</div>
            <di className="views">{views} view <span className="dot">.</span> {time}</di>

            </div>
        </div>
    );
}

export default Thumbnail;