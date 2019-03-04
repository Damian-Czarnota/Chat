import React, { Component, Fragment } from 'react';
import './App.scss';


class App extends Component {

  componentDidMount(){
    const spinner = document.querySelector('.loading');
    if (spinner && !spinner.hasAttribute('hidden')) {
      spinner.setAttribute('hidden', 'true');
    }
  }

  render() {
    return (
      <Fragment>

      </Fragment>
    );
  }
}

export default App;
