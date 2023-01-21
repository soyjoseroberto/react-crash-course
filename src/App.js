import './App.css';
// for named export in Greet.js you need to object destructure
import { Greet } from './components/Greet'

function App() {
  // A component should always return 1 element (after return statement, have one wrapper element)
  return (
    <div className="App">
      <h1>Hello Jose</h1>
      <Greet name='Bruce' heroName='Batman' />
    </div>
  );
}

export default App;
