import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
  
  state = {
    num: 0
  }

  increment= (e) => {
    console.log(e)
    this.setState({
      num: this.state.num + 4
    })

  }



  
  render() {
  return (

    <Fragment>
      <div className="belt">
        {
          this.props.sushis.slice((this.state.num),(this.state.num+4)).map((sushi,idx) => <Sushi key={idx} sushi={sushi} eatenSushi={this.props.eatenSushi} handleClick={() => this.props.handleClick(sushi)}/>)
        }
        <MoreButton onClick={(e) => this.increment(e)}/>
      </div>
    </Fragment>
  )
      }
}



export default SushiContainer