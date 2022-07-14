import logo from './logo.svg';
import './App.css';
//import FuncGreeting from './components/pure/funcGreeting.jsx';
import TaskListComponent from './components/containers/task_list';
//import Greeting from './components/pure/greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/*<FuncGreeting nombre= "Hassane"> </FuncGreeting>*/}
     {/*} <Greeting nombre= "Sara"></Greeting> */}
     <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;