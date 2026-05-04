import React, { createContext, useState } from 'react'

export let contextAPI=createContext();

const ContextComponent = (props) => {
    let [state,setState]=useState({count:0});
    // setState(prev=>({...prev,count:state.count+1}))
    function updateState(obj){
        setState(prev=>({...prev,...obj}))
    }
    console.log(props);
    
    // console.log(contextAPI);
    let {Provider}=contextAPI;
    
  return (
    <div>
        <Provider value={{name:'JECRC',state,updateState}}>
            {props.children}
        </Provider>
    </div>
  )
}

export default ContextComponent