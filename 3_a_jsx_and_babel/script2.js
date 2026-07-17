// How to write JavaScript inside JSX?

const root = ReactDOM.createRoot(document.querySelector("#root"))

const user = 'Ananya'
// const h1 = <h1>Hello  user</h1>
// const h1 = <h1>Hello  {user}</h1>
// const h1 = <h1>Hello <i>{user}</i></h1>
const h1 = <h1>Hello {4+6}</h1>

root.render(h1);