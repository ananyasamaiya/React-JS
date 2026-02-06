const div = <div id="container">
      <h3>Form</h3>
      <img src="/images.jpg" style={{width: 200}} />
      <form>
        <div className="input-control">
          <label htmlFor="username">UserName:</label
          ><input id="username" type="text" />
        </div>
        <div className="input-control">
          <label htmlFor="password">Password:</label
          ><input id="password" type="password" />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>

const root = ReactDOM.createRoot(document.querySelector("#root"))
console.log(div)
root.render(div)