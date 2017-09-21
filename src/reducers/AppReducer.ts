import {ILearnDataOutput, ITestData, ALGORITHMS} from "../types/index";
import {INITIAL_LEARN_STATE} from "../constants/index";
import {
    AppAction,
    ON_INITIALIZE,
    IS_MODEL_LEARNED,
    GET_TEST_DATA,
    GET_LEARN_DATA,
    LEARN_MODEL
} from "../actions/index";

export interface IAppState {
    learnData : ILearnDataOutput;
    testData : ITestData[];
    userSelAlgorithm : ALGORITHMS;
    isModelLearned : boolean;
    userSelection : ALGORITHMS;
    model?: any;
}
const initializeState : IAppState = {
    learnData: INITIAL_LEARN_STATE,
    testData: [],
    userSelAlgorithm: ALGORITHMS.None,
    userSelection: ALGORITHMS.None,
    isModelLearned: false
}

export function app(state : IAppState = initializeState, action : AppAction) : IAppState {
    switch(action.type) {
        case ON_INITIALIZE:
            return {
                ...initializeState
            };
        case GET_LEARN_DATA:
            return {
                ...state,
                learnData: GetLearnData(),
                userSelAlgorithm: ALGORITHMS.None,
                isModelLearned: false
            };
        case GET_TEST_DATA:
            return {
                ...state,
                testData: GetTestData(state.learnData.algorithim, state.model)
            };
        case IS_MODEL_LEARNED:
            return {
                ...state,
                isModelLearned: true,
                userSelection: action.algorithm,
                userSelAlgorithm: ALGORITHMS.None
            };
        case LEARN_MODEL:
            return {
                ...state,
                userSelAlgorithm: state.userSelection,
                model: GetModel(state.learnData.algorithim, state.userSelection),
                testData: []
            };
        default:
            return state;
    }
}