import * as React from 'react';
import * as Redux from 'redux';
import {connect} from 'react-redux';
import {Carousel, ControlLabel} from 'react-bootstrap';
import './App.css';
import {IAppProps, IAppDispatch, ALGORITHMS} from '../../types/index';
import {IAppReducer} from '../../reducers/index';
import {LearnData, LearnModel, TestData, InitializeGame, IsModelLearned} from '../../actions/index';
import Intro from '../Intro/Intro';
import Learn from '../Learn/Learn';
import Validate from '../Validate/Validate';
const mapStateToProps = (state : IAppReducer, ownProps : {}) : IAppProps => ({app: state.app});
const containerStyle = {
  height: '100vh',
  backgroundColor: 'rbg(41,55,68)'
};
const mapDispatchToProps = (dispatch : Redux.Dispatch < IAppReducer >) : IAppDispatch => ({
  onGetLearnData: () => dispatch(LearnData()),
  onLearnModel: (algorithm : ALGORITHMS) => dispatch(LearnModel(algorithm)),
  onGetTestData: () => dispatch(TestData()),
  onInitializeData: () => dispatch(InitializeGame()),
  onIsModelLearnt: (algorithm : ALGORITHMS) => dispatch(IsModelLearned(algorithm))
});

class AppComponent extends React.Component < IAppProps & IAppDispatch & {}, {} > {
  constructor() {
    super();
  }

  render() {
    const {
      app,
      onGetLearnData,
      onGetTestData,
      onLearnModel,
      onIsModelLearnt,
      onInitializeData
    } = this.props;
    return (
      <div >
        <Carousel allowFullScreen={true} pauseOnHover={true}>
          <Carousel.Item style={containerStyle}>
            <Intro onInitialize={onInitializeData}/>
            <Carousel.Caption className="Caption">
              <ControlLabel style={{
                color: 'yellow'
              }}>
                Your task is to create a model with high accuracy
              </ControlLabel>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={containerStyle}>
            <Learn
              onGetLearnData={onGetLearnData}
              learnData={app.learnData}
              isModelLearned={app.isModelLearned}
              userSelAlgorithm={app.userSelAlgorithm}
              onLearnModel={onLearnModel}
              onIsModelLearnt={onIsModelLearnt}/>
          </Carousel.Item>
          <Carousel.Item style={containerStyle}>
            <Validate
              userAlgorithm={app.userSelAlgorithm}
              testData={app.testData}
              onGetTestData={onGetTestData}
              dataAlgorithms={app.learnData.algorithim}
              model={app.model}/>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export const App : React.ComponentClass < {} > = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
