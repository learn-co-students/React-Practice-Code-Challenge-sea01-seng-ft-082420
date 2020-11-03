import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    eatenSushi: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushi => {
      this.setState({sushi})
    })

      // this.setState({
      //   selectedSushi: [this.state.sushi[0], this.state.sushi[1], this.state.sushi[2], this.state.sushi[3]]
      // })
  }


  add(array){
    let sum = 200
    array.forEach(a => {
     sum = sum - a.price
   })
   return sum
  }


  eatSushi(e){
    // let esushi = this.state.eatenSushi.push(sushi)
    if(this.add(this.state.eatenSushi) >(-1 + e.price)) {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, e]
    })
  }
  }



  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushi} eatenSushi={this.state.eatenSushi} handleClick = {(e) => this.eatSushi(e)}/>
        <Table eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;