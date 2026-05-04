import { useState } from 'react'
import ContextComponent from './ContextComponent/ContextComponent'
import ContextParent from './ContextComponent/ContextParent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContextComponent>
        
        <ContextParent></ContextParent>
      </ContextComponent>
    </>
  )
}

export default App
