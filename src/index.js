import React from 'react';

import { render } from 'react-dom';
import { history } from './helpers';
import { Router, Route, Link } from 'react-router-dom';

import { Page } from './containers';
import { Signin } from './containers';
import './style.css';


import { Provider } from 'react-redux';
import { store } from './helpers';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

import { connect } from 'react-redux';

class App extends React.Component {


  render() {

    const { alert } = this.props;
    console.log(alert, "App");
    if (alert) {
      MySwal.fire({
        ...alert});
    }

    return (


      <Router history={history}>
        <div>
          <Route exact path="/" render={() => <Page name="topyshopy" />} />
          <Route path="/signin" render={() => <Signin/>} />
          <Route path="/signup" render={() => <Signin/>} />
        </div>
      </Router>


    );
  }
}
const ConnectedApp = connect(({ alert }) => { return { alert } })(App);
export { ConnectedApp as App };

render(<Provider store={store}><ConnectedApp /></Provider>, document.getElementById('root'));
