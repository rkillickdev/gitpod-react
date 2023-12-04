import logo from './logo.svg';
import './App.css';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithPrevState from './components/StatefulGreeting';
// import EventsFunctional from './components/EventsFunctional';
// import EventsClass from './components/EventsClass';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="nice to meet you" name="Rob" age="42" /> */}
      {/* <StatefulGreeting greeting="I'm a stateful class component!" age="42" /> */}
      {/* <StatefulGreetingWithPrevState /> */}
      {/* <EventsFunctional /> */}
      {/* <EventsClass /> */}
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={false} />
    </div>
  );
}

export default App;
