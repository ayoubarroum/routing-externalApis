import React from "react";

import { Link } from "react-router-dom";
function Nav() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    display: "inline-block",
  };
  return (
    <>
      <nav
        className="navbar navbar-dark bg-dark"
        style={{ marginBottom: "20px" }}
      >
        <ul
          style={{
            listStyle: "none",
            textDecoration: "none",
            color: "white",
            margin: "auto",
            padding: "0",
          }}
        >
          <Link to="/OhNoNorris" >
            {" "}
            <li style={linkStyle}>Norris Wisdom</li>
          </Link>
          <Link to="/" style={{ ...linkStyle, paddingLeft: "3em" }}>
            {" "}
            <li >Home</li>
          </Link>
          <Link to="/KanyePets" style={{ ...linkStyle, paddingLeft: "3em" }}>
            {" "}
            <li >Kanye's Pets</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
