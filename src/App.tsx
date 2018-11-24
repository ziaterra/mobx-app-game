import * as React from 'react';

import './App.css';

import logo from './logo.svg';

import { observer } from 'mobx-react';

import { autorun, computed, observable } from 'mobx'; 

@observer
class App extends React.Component {

  @observable private name = 'lil-Z';
  @observable private countNum = 0;

  state = {
    name: 'lil-Z'
  }

  @computed 
  get count () {
    return this.countNum * 2;
  }

  // @ts-ignore
  private reaction = autorun(() => {
    console.log("Name has changed:", this.name);
  })

  private onUpdateName = () => {
    this.countNum++;
    this.name = this.name == "lil-Z" ? "Zia" : "lil-Z";
    this.setState({name: this.state.name == "lil-Z" ? "Zia" : "lil-Z" })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          My Mobx first project. My name is: {this.name} or {this.state.name}
          <button onClick={this.onUpdateName}>Click me</button>
          A count that is slightly wrong: {this.count}
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
