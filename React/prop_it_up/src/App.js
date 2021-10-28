import './App.css';
import PropIt from './components/PropIt';
function App() {
  return (
    <div className="App">
      <PropIt firstName ={"Jane"} lastName ={"Doe"} age = {45} hairColor ={"Black"} />
      <PropIt firstName ={"John"} lastName ={"Smoth"} age = {88} hairColor ={"Brown"} />
      <PropIt firstName ={"Fillmore"} lastName ={"Millard"} age = {50} hairColor ={"Brown"} />
      <PropIt firstName ={"Maria"} lastName ={"Smith"} age = {62} hairColor ={"Brown"} />
    </div>
  );
}

export default App;
