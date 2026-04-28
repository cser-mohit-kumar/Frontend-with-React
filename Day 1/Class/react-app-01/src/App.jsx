import { useState } from 'react'
import Demo from './assets/Demo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {Demo()}
      <hr></hr>
      <Demo/>
    </div>
  )
}

export default App

// !We should close each and every tag
// Every JSX should have one parent tag(// ! Every omponent should return only one tag)
//Html should always be written in the lowercase
// Custom tags should always be written in the pascal case
// We should not use the JS Ke


//diff framework and library
//diff bw single and multi page application
//current version of react
//usecase of the folders
//diff bw create react application and vite application
//reconiliation and vdom
//rules of jsx
//revise js
