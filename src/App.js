import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" ageCard="45" hairColor="Black"/>
      <PersonCard firstName="John" lastName="Smith" ageCard="88" hairColor="Borwn"/>
      <PersonCard firstName="Millard" lastName="Fillmore" ageCard="50" hairColor="Brown"/>
      <PersonCard firstName="Maria" lastName="Smith" ageCard="62" hairColor="Bown"/>
    </div>
  );
}

export default App;
