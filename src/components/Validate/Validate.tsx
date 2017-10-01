import * as React from 'react';
import {ALGORITHMS, ITestData} from "../../types/index";
import AgGrid from '../common/AgGrid';
import Chart from '../common/Chart';
import {
    Button,
    Row,
    Col,
    ControlLabel,
    Form,
    FormGroup
} from "react-bootstrap";
import {TEST_COL_DEFS} from "../../constants/index";
interface IValidateProps {
    userAlgorithm : ALGORITHMS;
    dataAlgorithms : ALGORITHMS;
    testData : ITestData[];
    model : any;
    onGetTestData : () => {};
}

const NO_DATA_IMG = '';
const SUCCESS_GIPHY = '';
const FAIL_GIPHY = '';

class ValidateComponent extends React.Component < IValidateProps, {} > {
    constructor(props : IValidateProps) {
        super(props);
    }
    render() {
        const testSeries : HighChartSeries[] = [
            {
                name: 'Predictions',
                type: 'line',
                data: this
                    .props
                    .testData
                    .map(x => x.Prediction)
            }, {
                name: 'Actuals',
                type: 'scatter',
                data: this
                    .props
                    .testData
                    .map(x => x.Actual)
            }
        ];

        return (
            <div>
                {this.props.userAlgorithm === ALGORITHMS.None}
                ?
                <div className='img-container'>
                    <img
                        src={NO_DATA_IMG}
                        alt="i Havn't learned any mode yet!"
                        style={{
                        height: '100vh',
                        width: '100vw'
                    }}/>
                    <div className='no-model-messgae'>
                        <h1>I don't have any model to validate. please make a model at previous screen</h1>
                    </div>
                </div>
                :<div>
                    <Button bsStyle='danger' bsSize='large' onClick={this.props.onGetTestData}>
                        STEP 4: Predict using your Model
                    </Button>
                    <hr/> {this.props.testData.length > 0
                        ? <div>
                            <Row>
                                <Col md={6}>
                                    <ControlLabel>Predictions Vs Actual</ControlLabel>
                                    <AgGrid data={this.props.testData} headers={TEST_COL_DEFS}/>
                                </Col>
                                <Col md={5}>
                                    <ControlLabel>Data Plot</ControlLabel>
                                    <Row className="chart-container">
                                        <Chart
                                            title=""
                                            xAxis={this
                                            .props
                                            .testData
                                            .map(x => x.Input)}
                                            series={testSeries}/>
                                    </Row>
                                    <Row className='margin-top'>
                                        <Col md={6}>
                                            <div className='response-img'>
                                                <img
                                                    src={this.props.userAlgorithm === this.props.dataAlgorithms
                                                    ? SUCCESS_GIPHY
                                                    : FAIL_GIPHY}
                                                    alt="img"/>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <Form horizontal>
                                                <FormGroup>
                                                    <Col componentClass={ControlLabel} sm={6}>Data Pattern:
                                                    </Col>
                                                    <Col sm={6}>
                                                        <ControlLabel>{ALGORITHMS[this.props.dataAlgorithms]}
                                                        </ControlLabel>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Col componentClass={ControlLabel} sm={6}>Model Choosen:</Col>
                                                    <Col sm={6}>
                                                        <ControlLabel>{ALGORITHMS[this.props.userAlgorithm]}
                                                        </ControlLabel>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Col componentClass={ControlLabel} sm={6}>Accuracy:</Col>
                                                    <Col sm={6}>
                                                        <ControlLabel>
                                                            {+ (this.props.model.r2 * 100).toFixed(0) === 100
                                                                ? 99
                                                                : (this.props.model.r2 * 100).toFixed(0)}
                                                            %
                                                        </ControlLabel>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup>
                                                    {this.props.userAlgorithm === this.props.dataAlgorithms
                                                        ? <label
                                                                style={{
                                                                color: "#f0ad4e",
                                                                fontSize: '70px'
                                                            }}>
                                                                <i className="fa fa-thumbs-up" aria-hidden="true"/>
                                                            </label>
                                                        : <label
                                                            style={{
                                                            color: "#d9534f",
                                                            fontSize: '70px'
                                                        }}>
                                                            <i className="fa fa-thumbs-down" aria-hidden="true"/>
                                                        </label>}</FormGroup>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>: null}
                </div>}
                </div>
        );
    }}
export default ValidateComponent;