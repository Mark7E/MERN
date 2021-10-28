import './App.css';
import PropIt from './components/PropIt';
import Functional from './components/Functional';
function App() {
  return (
    <div className="App">
      <PropIt firstName ={"Jane"} lastName ={"Doe"} age = {30} hairColor ={"Black"} />
      <PropIt firstName ={"John"} lastName ={"Smoth"} age = {88} hairColor ={"Brown"} />
      <PropIt firstName ={"Fillmore"} lastName ={"Millard"} age = {50} hairColor ={"Brown"} />
      <PropIt firstName ={"Maria"} lastName ={"Smith"} age = {62} hairColor ={"Brown"} />
      <Functional firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 



    </div>
  );
}

export default App;
