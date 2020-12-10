import logo from './logo.svg';

import './App.css';
import CommandInput from './components/command-input/command-input'
import CommandList from './components/command-list/command-list'
import Grid from './components/grid/grid'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Would you like to play a game?</h1>
      </header>
      <section>
        <article>
        <p>The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are no other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.</p>
          <CommandInput />
          <CommandList />
        </article>
        <aside>
            <Grid />
        </aside>
      </section>
    </div>
  );
}

export default App;
