import React, { Component } from 'react';
import './App.css';

import Group from "./components/Group";
import Emoticon from "./components/Emoticon";
import Toast from "./components/Toast";

import emoticons from "./utils/data/emoticons";
import Duplicator from "./utils/Duplicator";
import EmoticonHistory from "./utils/EmoticonHistory";




class App extends Component {
  constructor (props) {
    super(props)

    this.duplicator = new Duplicator()
    this.emoticonHistory = new EmoticonHistory()
    const frequetlyUsed = this.emoticonHistory.getFrequetlyUsedItems()
    emoticons[0].items = frequetlyUsed

    this.state = {
      emoticons,
      isShowToast: false,
    }

    
  }

  render() {
    return (
      <div className="app">
        <Toast isShow={this.state.isShowToast} content="复制成功" />

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
    const value = event.target.getAttribute('name')
    this.duplicator.copy(value)
    this.emoticonHistory.record(value)
    this.showToast()
  }

  showToast (duration = 1800) {
    this.setState({
      isShowToast: true,
    })
    clearTimeout(this.toastTimer)
    this.toastTimer = setTimeout(() => {
      this.setState({
        isShowToast: false,
      })  
    }, duration);
  }

}

export default App;

/*

*/