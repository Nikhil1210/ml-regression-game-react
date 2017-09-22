import {ALGORITHMS} from '../types/index';

export type AppAction = {
    type: '@@APP/GET_LEARN_DATA'
} | {
    type: '@@APP/GET_TEST_DATA'
} | {
    type: '@@APP/LEARN_MODEL',
    algorithm: ALGORITHMS
} | {
    type: '@@APP/ON_INITIALIZE'
} | {
    type: '@@APP/IS_MODEL_LEARNED',
    algorithm: ALGORITHMS
};

export const GET_LEARN_DATA = '@@APP/GET_LEARN_DATA';
export const GET_TEST_DATA = '@@APP/GET_TEST_DATA';
export const LEARN_MODEL = '@@APP/LEARN_MODEL';
export const IS_MODEL_LEARNED = '@@APP/IS_MODEL_LEARNED';
export const ON_INITIALIZE = '@@APP/GET_LEARN_DATA';

export const LearnData = () : AppAction => ({type: GET_LEARN_DATA});
export const TestData = () : AppAction => ({type: GET_TEST_DATA});
export const InitializeGame = () : AppAction => ({type: ON_INITIALIZE});
export const LearnModel = (algorithm : ALGORITHMS) : AppAction => ({type: LEARN_MODEL, algorithm});
export const IsModelLearned = (algorithm : ALGORITHMS) : AppAction => ({type: IS_MODEL_LEARNED, algorithm});
