import { Component } from "react";

class ClassBased1 extends Component {

    constructor(){
        super();
        console.log(this);
        

    }
    render(){
        return <h2>This is class 1</h2>
    }

}

export default ClassBased1