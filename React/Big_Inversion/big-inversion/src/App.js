import './App.css';
import Fuctional from "./components/Functional"

function App() {
  return (
    <div className="App">
      <Fuctional firstName ={"Jane"} lastName ={"Doe"} age = {30} hairColor ={"Black"} />
      <Fuctional firstName ={"John"} lastName ={"Smoth"} age = {88} hairColor ={"Brown"} />
      <Fuctional firstName ={"Fillmore"} lastName ={"Millard"} age = {50} hairColor ={"Brown"} />
      <Fuctional firstName ={"Maria"} lastName ={"Smith"} age = {62} hairColor ={"Brown"} />
    </div>
  );
}

export default App;
