import "./App.css";
import { Greet, Greet2, Greet3 } from "./components/Greet";
import { Welcome, Welcome2 } from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet firstname="Rhonda" lastname="Bonner" />
        <Greet2 firstname="Rhonda" lastname="Bonner" />
        <Greet3 firstname="Chenoa" lastname="DeMott" />
        <Welcome />
        <Welcome2 />
      </header>
    </div>
  );
}

export default App;
