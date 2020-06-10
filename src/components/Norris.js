import React from "react";

function Norris(props) {
  return (
    <>
      <h1>
        <b>*Norris ft. Norris*</b>
      </h1>
      <br />
      <div style={{border:"2px solid gray", width:"80%",margin:"auto"}}>
      <h3 style={{textAlign:"left",padding:"20px"}}>
        <i>{props.quote1}</i>
      </h3>
      <hr />
      <h3 style={{textAlign:"right",padding:"20px"}}>
        <i>{props.quote2}</i>
      </h3>
      </div>
    </>
  );
}

export default Norris;
