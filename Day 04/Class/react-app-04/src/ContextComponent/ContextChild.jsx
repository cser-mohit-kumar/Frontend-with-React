import React from 'react'
import { contextAPI } from './ContextComponent'
import { useContext } from 'react'
import { postProduct } from '../ApiServiceLayer/ApiRequests'

const ContextChild = () => {
    let {Consumer}=contextAPI
    let data=useContext(contextAPI)
  return (
    <div>
        
            {data.name}
            <h2>{data.state.count}</h2>
            <button onClick={()=>{data.updateState({count:data.state.count+1})}}>+</button>
            <button onClick={()=>{data.updateState({count:data.state.count-1})}}>-</button>
            <button onClick={()=>{postProduct}}></button>
        
        {/* <Consumer>
            {(value)=>{
                console.log(value);
                
            }}
        </Consumer> */}
    </div>
  )
}

export default ContextChild