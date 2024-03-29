import './App.css';
// for named export in Greet.js you need to object destructure
import { Greet } from './components/Greet';
import { Message } from './components/Message'
import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';
import { ConditionalGreeting } from './components/ConditionalGreeting';
import { UserGreeting } from './components/UserGreeting';

function App() {
  // A component should always return 1 element (after return statement, have one wrapper element)
  return (
    <div className="App">
      <h1>Hello Jose</h1>
      <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman' />
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is a children prop for Diana comp</p>
      </Greet>
      <Message />
      {/* ClickHandler to show a event handling */}
      <ClickHandler />
      <ParentComponent />
      <ConditionalGreeting />
      <br/>
      <p>Showing short-circuit with AND operator</p>
      <UserGreeting />
      <br />
      <p>To-Do: List Rendering (Display a list of items)</p>
    </div>
  );
}

export default App;
