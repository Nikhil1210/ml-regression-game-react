import * as React from 'react';
import * as Redux from 'redux';
import {connect} from 'react-redux';
import {Carousel, ControlLabel} from 'react-bootstrap';
import './App.css';
import {IAppProps, IAppDispatch, ALGORITHMS} from '../../types/index';
import {IAppReducer} from '../../reducers/index';
import {LearnData, LearnModel, TestData, InitializeGame, IsModelLearned} from '../../actions/index';

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
    return (
      <div >
        <Carousel allowFullScreen={true} pauseOnHover={true} height={900}>
          <Carousel.Item style={containerStyle}>
            hello
            <Carousel className="Caption">
              <ControlLabel>
                inside caption
              </ControlLabel>
            </Carousel>
          </Carousel.Item>
          <Carousel.Item style={containerStyle}>
            hello2
          </Carousel.Item>
          <Carousel.Item style={containerStyle}>
            hello3
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export const App : React.ComponentClass < {} > = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
