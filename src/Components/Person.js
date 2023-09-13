import React,{Component} from "react";

class Person extends Component {

    constructor(props){
        super(props);
        this.props = props;

    }

    render(){

        return(
            <div className="Person">
                <h1>Name: {this.props.name}</h1>
                <h1>Age: 19</h1>
            </div>
        );
    }
}

export default Person;