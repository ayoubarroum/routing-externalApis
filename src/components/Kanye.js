import React from "react";

function Kanye(props) {
  return (
   <>
      <h1>
        <b>*Kanye ft. Dog API*</b>
      </h1>
      <h3>
        <i>{props.quote}</i>
      </h3>
      <img
        src={props.dogURL}
        alt={props.dogName}
        title={props.dogName}
        style={{
          maxWidth: "calc(100% - 20px)",
          maxHeight: "400px",
          border: "3px solid black",
        }}
      ></img>
    </>
  );
}

export default Kanye;
