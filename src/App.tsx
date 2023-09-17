import { ContextProvider } from "./TipseeContext";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <div className="main">
      <ContextProvider>
        <Header />
        <Calculator />
      </ContextProvider>
    </div>
  );
}

export default App;
