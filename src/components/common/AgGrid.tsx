import {ILearnData, ITestData, IGridColumns} from "../../types/index";
import {GridOptions} from 'ag-grid/main';
import {AgGridReact} from 'ag-grid-react';
import * as React from 'react';
interface IAggridProps {
    data : ILearnData[] | ITestData[];
    headers : IGridColumns[];
}

class AgGrid extends React.Component < IAggridProps, {} > {
    public state: GridOptions;
    constructor(props : IAggridProps) {
        super(props);
        this.state = {
            columnDefs: this.props.headers,
            headerHeight: 39,
            rowHeight: 39
        };
    }
    render() {
        const containerStyle = {
            height: 680,
            width: this.props.headers.length * 210,
            margin: 'auto',
            color: 'black'
        };
        this.state.rowData = this.props.data;
        return (
            <div style={containerStyle}>
                <AgGridReact {...this.state}/>
            </div>
        );
    }
}
export default AgGrid;