import React, { Component } from 'react';
import './App.css';
import Group from "./components/Group";
import emoticons from "./utils/data/emoticons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
        </header>
        {
          emoticons.map(item => this.renderGroup(item.title, item.items))
        }
      </div>
    );
  }


  renderGroup(
    title,
    emoticons
  ) {
    return (
      <Group 
        title={title} 
        key={title}
      >
        <p>lala</p>
      </Group>
    )    

  }

}

export default App;

/*

*/