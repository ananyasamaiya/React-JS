const root = ReactDOM.createRoot(document.querySelector("#root"));

let div = React.createElement("div", { id: "container", key:9 }, [
  React.createElement("h3", { key: 1 }, "Form"),
  React.createElement("form", {key:2}, [
    React.createElement("div", { className: "input-control", key:1}, [
      React.createElement("label",{ key: 3, htmlFor: "username" },"UserName:"),
      React.createElement("input", { key: 4, id: "username", type: "text"}),
    ]),
    React.createElement("div", { className: "input-control", key:2}, [
      React.createElement("label",{ key: 5, htmlFor: "password" },"Password:"),
      React.createElement("input", { key: 6, id: "password", type: "password" }),
    ]),
    React.createElement('input',{type:"submit", value:"submit", key:7})
  ]),
]);

root.render(div);
