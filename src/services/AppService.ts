import {ALGORITHMS, ILearnData, ILearnDataOutput} from "../types/index";

const regression = require('regression');

export function GetLearnData() : ILearnDataOutput {
    const randomIndex: number = Math.floor(Math.random() * 4) + 1;
    const selAlgorithm: string = ALGORITHMS[randomIndex];
    const learnData: ILearnData[] = new Array();
    for (let index = 0; index < 21; index++) {
        learnData.push({Input: index, Output: App})
    }
}

ApplyCustomEquation(input : number, algorithm : ALGORITHMS) : number {
    switch(key) {
        case value:

            break;

        default:
            break;
    }
}