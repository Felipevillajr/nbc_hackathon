import "./App.css";
import Header from "./Components/Header/Header";
import Editors from "./Components/Editors/Editors.jsx";
import Projects from "./Components/Projects/Projects";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="AppCont">
        <Editors />
        <Projects />
      </div>
    </div>
  );
}

export default App;
