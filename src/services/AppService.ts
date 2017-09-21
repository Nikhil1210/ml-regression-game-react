import {ALGORITHMS, ILearnData, ILearnDataOutput, ITestData} from "../types/index";

const regression = require('regression');

export function GetLearnData() : ILearnDataOutput {
    const randomIndex: number = Math.floor(Math.random() * 4) + 1;
    const selAlgorithm: string = ALGORITHMS[randomIndex];
    const learnData: ILearnData[] = new Array();
    for (let index = 0; index < 21; index++) {
        learnData.push({
            Input: index,
            Output: ApplyCustomEquation(index, ALGORITHMS[selAlgorithm])
        });
    }
    return {data: learnData, algorithim: ALGORITHMS[selAlgorithm]};
}

function GetInputForModel(algorithim : ALGORITHMS) : number[][]{
    const data: number[][] = new Array();
    for (let index = 1; index < 21; index++) {
        data.push([
            index,
            ApplyCustomEquation(index, algorithim)
        ]);
    }
    return data;
}

export function GetModel(learnDataAlgorithm : ALGORITHMS, userSelectedAlgorithm : ALGORITHMS) : any {
    const input = GetInputForModel(learnDataAlgorithm);
    switch (userSelectedAlgorithm) {
        case ALGORITHMS.Linear:
            return regression.linear(input);
        case ALGORITHMS.Exponential:
            return regression.exponential(input);
        case ALGORITHMS.Logaritmic:
            return regression.logarithmic(input);
        case ALGORITHMS.Polynomial:
            return regression.polynomial(input, {order: 2});
        default:
            return null;
    }
}
export function GetTestData(learnDataAlgorithm : ALGORITHMS, model : any) : ITestData[] {
    const testData : ITestData[] = new Array();
    for (let index = 1; index < 21; index++) {
        testData.push({
            Input: index,
            Actual: ApplyCustomEquation(index, learnDataAlgorithm),
            Prediction: model.predict(index)[1]
        });
    }
}
function ApplyCustomEquation(input : number, algorithm : ALGORITHMS) : number {
    switch(algorithm) {
        case ALGORITHMS.Linear:
            return + (input * (Math.random() + 1)).toFixed(2);
        case ALGORITHMS.Exponential:
            return + (Math.exp(input + (Math.floor(Math.random() * 4) + 1) * 0.1)).toFixed(2);
        case ALGORITHMS.Linear:
            return + (2 + 1 * Math.log(input * (Math.random() + 1) * 100)).toFixed(2);
        case ALGORITHMS.Polynomial:
            return + (input * input * (Math.random() + 1) + input * (Math.random() + 1)).toFixed(2);
        default:
            return 0;
    }
}