import "./App.css";

import ClickCounter from "./components/clickCounter";
import HoverCounter from "./components/hoverCounter";
import TextInput from "./components/textInput";

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <hr />
      <HoverCounter />
      <hr />
      <TextInput />
    </div>
  );
}

export default App;
