import {Button} from "react-bootstrap";
import * as React from "react";

interface IIntroProps {
    onInitialize : () => {};
}
const hero_img = '';
const Intro : React.SFC < IIntroProps > = props => {
    return (
        <div className='intro-page'>
            <img src={hero_img} alt=""/>
            <div className='intro-container'>
                <span className='three-cogs fa-3x'>
                    <i className="fa fa-cog fa-spin fa-2x fa-fw metal"/>
                    <i className="fa fa-cog fa-spin fa-1x fa-fw metal"/>
                    <i className="fa fa-cog fa-spin fa-1x fa-fw metal"/>
                </span>
                <h1 style={{
                    color: 'yellow'
                }}>MACHINE LEARNING
                    <small>Do it yourself</small>
                </h1>
                <hr/>
                <div>
                    <p>
                        Do you know machine larning involves 4 critical steps
                    </p>
                    <ol>
                        <li>
                            <span className="heading">Data Sourcing</span>: Source and analusis of data
                        </li>
                        <li>
                            <span className="heading">Model Choice</span>: Pik a suitable algorithm based on your data
                        </li>
                        <li>
                            <span className="heading">Model Creation</span>: Create your model
                        </li>
                        <li>
                            <span className="heading">Model Evaluation</span>: Test your model
                        </li>
                    </ol>
                    <p>
                        Are you ready to create your first model?
                    </p>
                    <Button bsStyle="primary" bsSize="large">Let's Get Started</Button>
                </div>
            </div>
        </div>
    );
};
export default Intro;