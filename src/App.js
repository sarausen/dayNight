import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDay: true
    };
    this.toggleDayNight = this.toggleDayNight.bind(this);
  }

  toggleDayNight() {
    this.setState(prevState => ({
      isDay: !prevState.isDay
    }));
  }

  render() {
    const { isDay } = this.state;

    return (
      <div className={`app ${isDay ? 'day' : 'night'}`}>
        <div className={`planet ${isDay ? 'sun' : 'moon'}`}></div>
        <button onClick={this.toggleDayNight}>{isDay ? 'Включить Ночь' : 'Включить День'}</button>
      </div>
    );
  }
}

export default App;

