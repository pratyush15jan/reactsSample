import React from 'react';
const getProgressBar=(showDefault,target) =>{
return Math.floor((showDefault/target)*100)+'%';
}
const getProgressBarWidth = (width) => {
    return {width};
}

export const TripsCount = ({showDefault, tropic, trek, club,target=10}) => (
<div className="trips-count">
  <div className="content">
  <div className="total"><h1> {showDefault} </h1> Trips </div>
  <div className="goal"><div className="progress" style={getProgressBarWidth(getProgressBar(showDefault,target))}></div> {getProgressBar(showDefault, target)}</div>

    </div>
    </div>



)
export default TripsCount;