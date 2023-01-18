const h1 = React.createElement(
  "h1",
  {
    id: "namaste",
    className: "namaste",
  },
  "Namaste from React"
);

const h11 = React.createElement("h1", {}, "Inside stuff");
const h12 = React.createElement("h1", {}, "Inside stuff2");

const div1 = React.createElement(
  "div",
  {
    id: "inner",
  },
  [h11, h12]
);
const div2 = React.createElement(
  "div",
  {
    id: "outer",
  },
  [div1]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div2);
