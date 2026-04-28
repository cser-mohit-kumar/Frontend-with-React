import { useState } from "react";
function FunctionBased(){
    let [state,setState]=useState(10)
    let a=20;
    return <>
        {a}
        <hr/>
        <button onClick={()=>{
            a+=20;
            setState(state+10)
            // console.log(a);
            console.log(state);
            
            
        }}>Increment</button>
        <h1>{state}</h1>
    </>
}

export default FunctionBased
