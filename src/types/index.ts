export interface IAppProps {
    app : {
        learnData: IlearnDataOutput,
        testData: ITestData[],
        userSelAlgorithm: ALGORITHMS,
        model?: any,
        isModelLearned: boolean
    };
}
export interface IAppDispatch {
    onGetLearnData : () => any;
    onLearnModel : (algorithm : ALGORITHMS) => any;
    onGetTestData : () => any;
    onInitializeData : () => any;
    onIsModelLearnt : (algorithim : ALGORITHMS) => any;
}
export interface IGridColumns {
    headerName : string;
    field : string;
}
export interface ILearnData {
    Input : number;
    Output : number;
}
export interface ITestData {
    Input : number;
    Actual : number;
    Prediction : number;
}
export enum ALGORITHMS {
    None = 0,
    Linear,
    Polynomial,
    Exponential,
    Logaritmic
}
export interface ILearnDataOutput {
    data : ILearnData[];
    algorithim : ALGORITHMS;
}

export interface HighchartSeries {
    name : string;
    type : string;
    data : number[];
}
