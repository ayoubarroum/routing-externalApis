import React, { useState, useEffect } from "react";
import axios from "axios";
import Norris from "../components/Norris";
function NorrisAPI() {
  const [quote1, setQuote1] = useState();
  const [quote2, setQuote2] = useState();
  function getQuote1() {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      const randomQuote = res.data.value;
      setQuote1(randomQuote);
    });
  }

  function getQuote2() {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      const randomQuote = res.data.value;
      setQuote2(randomQuote);
    });
  }
  useEffect(() => {
    getQuote1();
    getQuote2();
  }, []);

  return (
    <>
      <Norris quote1={quote1} quote2={quote2} />
    </>
  );
}

export default NorrisAPI;
