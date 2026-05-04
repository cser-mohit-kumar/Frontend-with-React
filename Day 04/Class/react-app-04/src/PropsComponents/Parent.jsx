import React from 'react'
import Child from './Child'

const Parent = (props) => {
  return (
    <div>
        <h3>The surname is {props.value.surname}</h3>
        <Child value={props} {...{props}}></Child>
    </div>
  )
}

export default Parent