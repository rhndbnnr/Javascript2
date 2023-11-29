import Counter from "./components/Counter";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import FavoriteColor from "./components/FavoriteColor";
import FunctionClick from "./components/FunctionClick";
import { Greet, Greet2, Greet3 } from "./components/Greet";
import { Welcome, Welcome2 } from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet firstname="Rhonda" lastname="Bonner">
          <button>Visit</button>
          <p>Hello World!</p>
        </Greet>
        <Greet2 firstname="Rhonda" lastname="Bonner" />
        <Greet3 firstname="Chenoa" lastname="DeMott" />
        <Welcome />
        <Welcome2 />
        <FunctionClick />
        <ClassClick />
        <EventBind />
        <FavoriteColor />
        <Counter />
      </header>
    </div>
  );
}

export default App;
