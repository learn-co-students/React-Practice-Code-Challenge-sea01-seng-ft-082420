import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  function add(array){
    let sum = 200
    array.forEach(a => {
     sum = sum - a.price
   })
   return sum
  }

  // function moneyLeft(money){
  //   return money -= props.eatenSushi.reduce
  // }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${add(props.eatenSushi)} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eatenSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table