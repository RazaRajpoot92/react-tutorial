import React,{Component} from "react";


class Animal extends Component{
    constructor(props){
        super(props);
        this.props = props;

        this.state = {
            name: "Lion",
            age: 29,
        };

    }

    nameChange(){
        this.setState({name:"Cheetah",age:12})
    }

   render(){

    return(

        <div className="App">
            <h1>Name = {this.state.name}</h1>
            <h1>Age = {this.state.age}</h1>
            <button onClick={()=> this.nameChange()}>Change Name</button>
        </div>
    )
   }
}

export default Animal;