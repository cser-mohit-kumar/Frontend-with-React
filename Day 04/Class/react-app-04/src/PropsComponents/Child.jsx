import React from 'react'

const Child = (childProp) => {
    console.log(childProp);
    
  return (
    <div>
        <h3>This is the surname in the child component</h3>
        <hr></hr>
        {childProp.value.value.surname}
    </div>
  )
}

export default Child