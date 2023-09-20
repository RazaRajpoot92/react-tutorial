import "./Thumbnail.css"



function Thumbnail({title, views, channel, time, verified,id}){

    return(

        <div className="content">

            <img className="img" src={`https://picsum.photos/id/${id}/300/200`} />

            <div className="title">{title}</div>

            <div className="channel">{channel} {verified? '✔️':null}</div>

            <div className="views">{views} view <span className="dot">.</span> {time}</div>

        </div>

    );
}

export default Thumbnail;