import React, { Fragment } from 'react'

const Sushi = ({sushi, handleClick, eatenSushi}) => {




  return (

    
    <div className="sushi">
      <div className="plate"
       onClick={() => handleClick(sushi)}>
        {!!(eatenSushi.find(s => s.id === sushi.id))=== false  ? <img src={sushi.img_url}></img>:
        <p></p>
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>  
  )
}



export default Sushi

// {
//   "id": 2,
//   "name": "Tsundere Ebi",
//   "img_url": "./sushi/ebi.png",
//   "price": 15,
//   "created_at": "2018-07-27T18:53:16.244Z"
// },