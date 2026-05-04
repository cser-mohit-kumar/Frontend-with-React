import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './Feature/userSlice';

const ComponentRTK1 = () => {
    let data = useSelector(prev => prev)
    console.log(data);
    let dispatch = useDispatch()

  return (
    <div>
      <button onClick={()=>{dispatch(addUser("This is Jaipur"))}}>Add User</button>
    </div>
  )
}

export default ComponentRTK1
