import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function App() {
  return (
    <div className="App">
      <div className="block"></div>
      <div className="block next">
        <FontAwesomeIcon
          icon={icon({ name: "chevron-right", type: "solid" })}
          size="lg"
          onClick={() => {
            alert("Clicked");
          }}
          className="fade-in-right chevron"
        />
      </div>
      <div className="title block expand">
        <h1> LUDOVICA BAIARDI </h1>
        <h4> Architect </h4>
      </div>
    </div>
  );
}

export default App;
