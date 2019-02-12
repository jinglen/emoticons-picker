import React, { Component } from 'react';
import './App.css';
import Group from "./components/Group";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
        </header>
        {
        }
      </div>
    );
  }


  renderGroup({
    title,
    emoticons,
  }) {
    return (
      <Group title={title}>
        <p>lala</p>
      </Group>
    )    

  }

}

export default App;

/*
          <p>
            A 岛颜文字拾取器
          </p>

*/