import React, { Component } from 'react';
import './App.css';
import Group from "./components/Group";
import Emoticon from "./components/Emoticon";
import emoticons from "./utils/data/emoticons";

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      emoticons,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
        </header>
        {
          this.state.emoticons.map(item => this.renderGroup(item.title, item.items))
        }
      </div>
    );
  }


  renderGroup(
    title,
    items
  ) {


    return (
      <Group 
        title={title} 
        key={title}
      >
        { items.map(item => <Emoticon value={item} key={item} onClick={this.handlePickEmoticon} />) }
      </Group>
    )    

  }

  handlePickEmoticon = (event) => {
    console.log(event.target.getAttribute('name'));
  }


}

export default App;

/*

*/