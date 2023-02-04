import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <Card />
    </div>
  );
}

export default App;
