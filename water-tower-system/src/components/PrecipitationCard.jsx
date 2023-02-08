import React from 'react';

const PrecipitationCard= (props) => {
  let icon;
  let precipitation;
  let degree = "  14 °C";
  if (props.condition === 'rain') {
    icon = <i className="fa-solid fa-cloud-showers-heavy fa-10x"></i>
    precipitation = <h1>Lluvioso</h1>;
  } else if (props.condition === 'sunny') {
    icon = <i class="fa-solid fa-sun fa-10x"></i>;
    precipitation = <h1>Suny</h1>;
  } else if (props.condition === 'snow'){
    icon = <i class="fa-sharp fa-solid fa-snowflake fa-10x"></i>;
    precipitation = <h1>Snowing</h1>;
  }

  return (

    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop: '2.5rem',paddingTop:'4.1rem'}}>
        <div>{icon}</div>
        <div ><h1 style={{fontSize:"3.5rem",marginLeft:"20px"}}>{degree}</h1></div>
      </div>
      <div style={{fontSize:"2rem"}}>{precipitation}</div>
    </>

    
  );
}

export default PrecipitationCard;