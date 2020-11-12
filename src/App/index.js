import React from 'react';
import './App.scss';
import SharkTank from '../components/SharkTank';
import Graveyard from '../components/Graveyard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SharkTank />
        <Graveyard />
      </div>
    );
  }
}

export default App;
