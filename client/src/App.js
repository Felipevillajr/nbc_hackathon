import "./App.css";
import Header from "./Components/Header/Header";
import Editors from "./Components/Editors/Editors";
import Projects from "./Components/Projects/Projects";
function App() {
  return (
    <div className="App">
      <Header />
      <Editors />
      <Projects />
    </div>
  );
}

export default App;
