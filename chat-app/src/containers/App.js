import React, { Component, Fragment } from 'react';
import './App.scss';
import Navigation from '../components/navigation/navigation';

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
        <Navigation />
      </Fragment>
    );
  }
}

export default App;
