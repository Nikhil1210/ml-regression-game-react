import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-highcharts';
import 'font-awesome/css/font-awesome.css';
import {reducers, IAppReducer} from "./reducers/index";
import {Provider} from "react-redux";
import {createStore} from "redux";
const store = createStore < IAppReducer > (reducers);
ReactDOM.render(
  <div>
  <Provider store={store}>
    <App/>
  </Provider>
</div>, document.getElementById('root')as HTMLElement);
registerServiceWorker();
