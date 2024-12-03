import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Ali from "./test.jsx";

function MyApp() {
  return (
    <>
      <h1>Custom App!</h1>
      <p>My custome Apps</p>
    </>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

const anotherUser = "ali aur hassan";

const reactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "Click me to visit google",
  anotherUser
);

const AnotherElement = (
  <a href="https://www.google.com" target="_blank">
    Visit Google
  </a>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <MyApp />
    <Ali />
    {AnotherElement}
    <br />
    {reactElement}
  </StrictMode>
);

// dev-aown.netlify.app
