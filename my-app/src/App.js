import logo from './logo.svg';
import './App.css';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithPrevState from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="nice to meet you" name="Rob" age="42" /> */}
      {/* <StatefulGreeting greeting="I'm a stateful class component!" age="42" /> */}
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;
