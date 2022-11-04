import React, { useState } from "react";

function Form({getData}) {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [alert, setalert] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault();
    if(isNaN(weight) || isNaN(height)){
        setalert(true);
    }else{
        getData(weight,height);
        setalert(false);
        setweight("");
        setheight("");       
    }
    
  };

  return (
    
      <div className="col=sm-4 shadow rounded px-5 w-50 py-2" >
        <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <div className="my-3">
                <label className="form-label">Weight(kg) :</label>
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setweight(e.target.value)}
                  className="form-control"
                  required
                  
                />
              </div>
            </div>
            <div className="col col-sm-6">
              <div className="my-3">
                <label htmlFor="" className="form-label">
                  Height(m) :
                </label>
                <input
                  type="text"
                  value={height}
                  onChange={(e) => setheight(e.target.value)}
                  className="form-control"
                  required
                  
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary my-3"
            value="Get BMI"
          />
        </form>
        { alert && <div className="alert alert-danger shadow" role="alert">Please enter valid data!</div> }
      </div>
    
  );
}

export default Form;
