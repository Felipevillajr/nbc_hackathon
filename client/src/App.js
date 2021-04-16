import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Editors from "./Components/Editors/Editors.jsx";
import EditorDetails from "./Components/Editors/pages/EditorsDetails.jsx";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <Router>
      <Editors />
      <Projects />
      <Switch>
        <Route path="/details" exact component={EditorDetails} />
      </Switch>
    </Router>
  );
}

export default App;
