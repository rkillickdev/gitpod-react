import React from 'react'

function EventsFunctional() {
  function clickHandler(){
    console.log("clicked the functional button");
  }  
  return (
    <div>EventsFunctional
        <button onClick={clickHandler}>click me - functional component</button>
    </div>
  )
}

export default EventsFunctional