import React, { useEffect, useState } from "react";
import axios from "axios";
import Kanye from "../components/Kanye";


function KanyeAPI() {
  const [kanQuote, setKanQuote] = useState();
  const [dog, setDog] = useState({ url: "", name: "" });

  function getDog() {
    var getDoggyName = function (url, index) {
      return url.replace(/^https?:\/\//, "").split("/")[index];
    };
    axios.get("https://dog.ceo/api/breeds/image/random").then((resp) => {
      const dogURL = resp.data.message;

      const dogName = getDoggyName(dogURL, 2);
      //console.log(dogName);

      setDog({ url: dogURL, name: dogName });
      //console.log(resp);
    });
  }
  function getQuote() {
    axios.get("https://api.kanye.rest").then((resp) => {
      const quote = resp.data.quote;
      setKanQuote(quote);
    });
  }
  useEffect(() => {
    getDog();
    getQuote();
  }, []);

  return <Kanye quote={kanQuote} dogURL={dog.url} dogName={dog.name} />;
}

export default KanyeAPI;
