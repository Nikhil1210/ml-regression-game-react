import {combineReducers} from "redux";

export interface IAppReducer {
    app : IAppState;
}

export const reducers = combineReducers < IAppReducer > ({app});