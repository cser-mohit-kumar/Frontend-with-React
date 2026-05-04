import { createStore } from "redux";
import { reducerFunction } from "../reducer/ReducerProvider";

export let store = createStore(reducerFunction);