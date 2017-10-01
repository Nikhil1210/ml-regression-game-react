import {
    Tooltip,
    Form,
    FormGroup,
    Button,
    OverlayTrigger,
    Label,
    ButtonToolbar,
    ToggleButtonGroup,
    ToggleButton,
    ControlLabel,
    Col,
    Row
} from 'react-bootstrap';
import {ILearnDataOutput, ALGORITHMS, HighchartSeries} from '../../types/index';
import * as React from 'react';
import {LEARN_COL_DEFS} from '../../constants/index';
import AgGrid from '../common/AgGrid';
import Chart from '../common/Chart';

const tooltip = (
    <Tooltip id="tooltip">
        Model algorithm should sync with data distribution</Tooltip>
);
interface ILearnState {
    isModelChoosen : boolean;
}
interface ILearnProps {
    learnData : ILearnDataOutput;
    isModelLearned : boolean;
    userSelAlgorithm : ALGORITHMS;
    onGetLearnData : () => {};
    onLearnModel : (algorithm : ALGORITHMS) => any;
    onIsModelLearnt : (algorithm : ALGORITHMS) => any;
}
class LearnComponent extends React.Component < ILearnProps,
ILearnState > {
    constructor(props : ILearnProps) {
        super(props);
        this.state = {
            isModelChoosen: false
        };
    }

    render() {
        const learnSeries : HighchartSeries[] = [
            {
                name: 'Learn data',
                type: 'scatter',
                data: this.props.learnData !
                    .data
                    .map(x => x.Output)
            }
        ];
        return (
            <div>
                <h1>
                    Data Analysis and Model Creation</h1>
                <hr/>
                <Form inline>
                    <FormGroup>
                        <Button bsStyle="danger" onClick={this.props.onGetLearnData} bsSize='large'>
                            STEP 1: Source data {this.props.learnData.data.length > 0
                                ? <small>
                                        <i className='fa fa-check-circle-o' aria-hidden='true'/>
                                    </small>
                                : null}
                        </Button>
                    </FormGroup>
                    <FormGroup>
                        <Button
                            disabled={this.props.learnData.data.length === 0}
                            bsStyle=
                            {this.props.learnData.data.length === 0? 'default': 'danger'}
                            bsSize='large'
                            onClick={() => this.setState({isModelChoosen: true})}>
                            STEP 2: Choose Model{' '}
                            <OverlayTrigger placement='top' overlay={tooltip}>
                                <small>
                                    <Label bsStyle='info'>Hint</Label>
                                </small>
                            </OverlayTrigger>
                            {this.props.isModelLearned
                                ? <small>
                                        <i className='fa fa-check-circle-o' aria-hidden='true'/>
                                    </small>
                                : null}
                        </Button>
                    </FormGroup>
                    <FormGroup>
                        <Button
                            disabled={this.props.learnData.data.length === 0 || !this.props.isModelLearned}
                            bsStyle={this.props.learnData.data.length === 0 || !this.props.isModelLearned
                            ? ''
                            : 'danger'}
                            onClick={() => this.props.onLearnModel(this.props.userSelAlgorithm)}
                            bsSize='large'>STEP 3: make Model Learn {this.props.userSelAlgorithm !== ALGORITHMS.None
                                ? <small>
                                        <i className='fa fa-check-circle-o' aria-hidden='true'/>
                                    </small>
                                : null}
                        </Button>
                    </FormGroup>
                    <FormGroup>
                        <Button
                            disabled={this.props.userSelAlgorithm === ALGORITHMS.None}
                            bsStyle={this.props.userSelAlgorithm === ALGORITHMS.None
                            ? ''
                            : 'danger'}>
                            STEP 4
                            <i className='fa fa-chevron-circle--right' aria-hidden='true'/>
                        </Button>
                    </FormGroup>
                </Form>
                {this.props.learnData.data.length > 0 && this.state.isModelChoosen
                    ? <div
                            style={{
                            textAlign: 'center'
                        }}
                            className='margin-top'>
                            <Form inline>
                                <FormGroup>
                                    <ButtonToolbar>
                                        <ToggleButtonGroup
                                            type='radio'
                                            name='options'
                                            onChange={(value : any) => this.props.onIsModelLearnt(value)}>
                                            <ToggleButton value={ALGORITHMS.Linear}>Liner</ToggleButton>
                                            <ToggleButton value={ALGORITHMS.Exponential}>Exponential</ToggleButton>
                                            <ToggleButton value={ALGORITHMS.Logaritmic}>Logaritmic</ToggleButton>
                                            <ToggleButton value={ALGORITHMS.Polynomial}>Polynomial</ToggleButton>
                                        </ToggleButtonGroup>
                                    </ButtonToolbar>
                                </FormGroup>
                            </Form>
                            {this.props.userSelAlgorithm !== ALGORITHMS.None
                                ? <ControlLabel
                                        style={{
                                        color: 'yellow',
                                        marginTop: '10pt'
                                    }}>
                                        Nice Job! Your model is ready for use
                                    </ControlLabel>
                                : null}
                        </div>
                    : null}
                {this.props.learnData.data.length > 0
                    ? <Row className='margin-top'>
                            <Col md={4}>
                                <ControlLabel>Raw Data</ControlLabel>
                                <AgGrid data={this.props.learnData.data} headers={LEARN_COL_DEFS}/>
                            </Col>
                            <Col md={7}>
                                <ControlLabel>Data PLot</ControlLabel>
                                <div className='chart-container'>
                                    <Chart
                                        title=''
                                        xAxis={this
                                        .props
                                        .learnData
                                        .data
                                        .map(x => x.Input)}
                                        series={learnSeries}/>
                                </div>
                            </Col>
                        </Row>
                    : null}
            </div>
        );
    }
}
export default LearnComponent;