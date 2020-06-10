import React from "react";

function Home() {
  const refactorCode =
    "https://medium.com/@elinahovakimyan/code-refactoring-tips-for-react-projects-f7240156e403";
  const hooksRules = "https://reactjs.org/docs/hooks-rules.html";
  const routerTuto = "https://www.youtube.com/watch?v=Law7wfdg_ls";
  const axiosVsFetch =
    "https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5#:~:text=Axios%20is%20a%20Javascript%20library,automatic%20transforms%20of%20JSON%20data.";
  const urlSegment =
    "https://stackoverflow.com/questions/11703673/get-specific-part-of-url-of-a-link";
  const anchorStyle = { color: "black" };
  return (
    <>
      <h1>
        <b>THIS IS A BLANK PAGE.</b>{" "}
      </h1>
      <div>
        <h3>
          But let me tell you what I've <i>learned/practiced</i> building this:
        </h3>
        <ul
          style={{
            textAlign: "left",
            width: "fit-content",
            margin: "auto",
            padding: "50px 20px 20px 100px",
            lineHeight: "2em",
            listStyle: "none",
          }}
        >
          <li>
            Use of{" "}
            <b>
              <a style={anchorStyle} target="blank" href={routerTuto}>
                React-router.
              </a>
            </b>
          </li>
          <li>
            Using{" "}
            <b>
              <a style={anchorStyle} target="blank" href={axiosVsFetch}>
                axios
              </a>
            </b>{" "}
            to consume an API.
          </li>
          <li>
            <b>Consum</b>ing different <b>APIs.</b>
          </li>
          <li>
            <b>
              <a target="blank" href={refactorCode} style={anchorStyle}>
                Refactor
              </a>
            </b>
            ing code &{" "}
            <b>
              <a target="blank" href={refactorCode} style={anchorStyle}>
                structur
              </a>
            </b>
            ing React project.
          </li>
          <li>
            <b>
              <a style={anchorStyle} target="blank" href={hooksRules}>
                Rules
              </a>
            </b>{" "}
            for using{" "}
            <b>
              <a style={anchorStyle} target="blank" href={hooksRules}>
                Hooks
              </a>
            </b>
            . (which are 2).
          </li>
          <li>
            Use{" "}
            <b>
              <a style={anchorStyle} target="blank" href={urlSegment}>
                Regex
              </a>
            </b>{" "}
            to tap into a specific part in a url (for dog img title).
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
