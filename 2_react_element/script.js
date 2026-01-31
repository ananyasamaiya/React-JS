//let h2 = React.createElement("h2",{className: "subheading", id: 'sub'}, "Heloooo from H2");

let div = React.createElement(
  "div",
  { className: "container", id: "container" },
  [
    React.createElement("section", {key: 1}, [
      React.createElement("p", {key: 1}, "Hello How you doing"),
      React.createElement("p", {key: 2}, "Hello How you doing"),
      React.createElement("img",{key: 3, src:'images.jpg', style:{width: 200}})
    ]),
  ],
);
const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(h2);
root.render(div);
