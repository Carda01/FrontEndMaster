import React from "react";
import { render } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Labrador",
    }),
    React.createElement(Pet, {
      name: "Ciccio",
      animal: "Cat",
      breed: "Mixy",
    }),
    React.createElement(Pet, {
      name: "Marble",
      animal: "Turtle",
      breed: "Ground",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
