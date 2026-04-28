import { Component } from "react";

class ClassBased extends Component {

    constructor(){
        super();
        console.log(this);
        

    }
    render(){
        return <h2>This the heading from the class bases component</h2>
    }

}

export default ClassBased