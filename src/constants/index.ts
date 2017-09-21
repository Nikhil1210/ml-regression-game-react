import {ILearnDataOutput, ALGORITHMS, IGridColumns} from "../types/index";

export const LEARN_COL_DEFS : IGridColumns[] = [
    {
        headerName: 'Input',
        field: 'Input'
    }, {
        headerName: 'Output',
        field: 'Output'
    }
];
export const INITIAL_LEARN_STATE : ILearnDataOutput = {
    algorithim: ALGORITHMS.None,
    data: []
};
export const TEST_COL_DEFS : IGridColumns[] = [
    {
        headerName: 'Input',
        field: 'Input'
    }, {
        headerName: 'Prediction',
        field: 'Prediction'
    }, {
        headerName: 'Actual',
        field: 'Actual'
    }
];
