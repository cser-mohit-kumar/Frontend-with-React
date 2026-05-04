import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Counter from "./Component/Counter";

const StoreDummyComponent = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default StoreDummyComponent;