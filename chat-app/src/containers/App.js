import React, { Component, Fragment } from 'react';
import './App.scss';
import Navigation from './navigation/navigation';
import MainScreen from './mainScreen/MainScreen';
import NumbersSection from './numbersSection/NumbersSection';
import DetailsSection from './detailsSection/DetailsSection';

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
        <main className="white-space">
          <MainScreen />
          <NumbersSection />
          <DetailsSection />
        </main>
      </Fragment>
    );
  }
}

export default App;
