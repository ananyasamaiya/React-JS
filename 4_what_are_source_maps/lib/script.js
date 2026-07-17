const div = /*#__PURE__*/React.createElement("div", {
  id: "container"
}, /*#__PURE__*/React.createElement("h3", null, "Form"), /*#__PURE__*/React.createElement("img", {
  src: "/images.jpg",
  style: {
    width: 200
  }
}), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
  className: "input-control"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "username"
}, "UserName:"), /*#__PURE__*/React.createElement("input", {
  id: "username",
  type: "text"
})), /*#__PURE__*/React.createElement("div", {
  className: "input-control"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "password"
}, "Password:"), /*#__PURE__*/React.createElement("input", {
  id: "password",
  type: "password"
})), /*#__PURE__*/React.createElement("input", {
  type: "submit",
  value: "submit"
})));
const root = ReactDOM.createRoot(document.querySelector("#root"));
console.log(div);
root.render(div);
//# sourceMappingURL=script.js.map