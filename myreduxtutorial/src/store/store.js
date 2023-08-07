import { legacy_createStore } from "redux";
import postReducer from "../reducer/postReducer";

const store = legacy_createStore(postReducer);

export default store;
