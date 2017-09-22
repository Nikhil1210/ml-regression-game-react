import {combineReducers} from 'redux';
import {IAppState, app} from './AppReducer';

export interface IAppReducer {
    app : IAppState;
}

export const reducers = combineReducers < IAppReducer > ({app});