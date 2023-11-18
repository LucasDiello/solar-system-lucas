import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Mission from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Mission />
      </>
    );
  }
}

export default App;
