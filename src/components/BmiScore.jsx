import React from 'react'


function BmiScore({ bmi, bmiName , changeWeight }) {
  //console.log(props);
  //const { bmi, bmiName } = props;
  console.log(changeWeight);
  return (
    <div className="text-center shadow rounded p-4" style={{height:292}}>
      <div>Your BMI Score</div>
      <div className="row justify-content-md-center">
        <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">{bmi}</div>
      </div>
      <div className="fs-3 fw-bold text-primary">{bmiName}</div>
      {changeWeight.type === "positive" && (
        <div className="fs-4 text-danger">" You need to lose <span className='fw-bold text-danger'>{changeWeight.weight} kg "</span></div>
      )}
      {changeWeight.type === "negative" && (
        <div className="fs-4 text-danger">" You need to gain <span className='fw-bold text-danger'>{changeWeight.weight} kg "</span></div>
      )}
      {changeWeight.type === "normal" && (
        <div className="fs-4 text-success">" Your weight is normal , Good for you... "</div>
      )}
      
    </div>
    

  )
}

export default BmiScore