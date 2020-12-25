import Home from "./routes/Home";
import "./App.css";
import logo from "./logo.png"

function App() {
  return (
    <section className="container">
      <header>
        <img src={logo}></img>
        <h3 className="header__text">Random stupid things said by Donald Trump</h3>
      </header>
      <Home></Home>
    </section>

  )
}

export default App;
