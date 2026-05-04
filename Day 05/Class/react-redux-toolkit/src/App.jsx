import React from 'react'
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import ComponenetRTK from './RTK/ComponenetRTK';

const App = () => {
  return (
    <div>
      {/* <Provider store={store}>
        <Component2/>
        <Component1/>
      </Provider> */}
      <ComponenetRTK></ComponenetRTK>
    </div>
  )
}
export default App