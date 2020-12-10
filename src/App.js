import logo from './logo.svg';
import robot from './Robot.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Would you like to play a game?</h1>
      </header>
      <section>
        <article>
          <div className="command-input">
          <p>The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are no other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.</p>
          <label for="name">Robot Command

          <input type="text" id="name" name="name" minlength="4" maxlength="8" size="10" placeholder="What is your command" />
          </label>
          <button>Execute</button>

          </div>
          <div className="command-list">
            <p>A list of the past commands and actions taken by the robot:</p>
            <ol>
              <li><span className="action-given">Place 0,2,SOUTH</span><span className="action-response">Robot has been placed at 0,2 and is facing South</span></li>
              <li><span className="action-given">Move</span><span className="action-response">Robot: Moved one square</span></li>
              <li><span className="action-given">Left</span><span className="action-response">Robot: Turned to the left</span></li>
              <li><span className="action-given">Right</span><span className="action-response">Robot: Turned to the right</span></li>
              <li><span className="action-given">Report</span><span className="action-response">Robot: My current location is X,Y and I am facing, West</span></li>
            </ol>

          </div>
        </article>
        <aside>
            <table>
              <captain>Robot Table Grid</captain>
              <tbody>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">0</th>
                  <th scope="col">1</th>
                  <th scope="col">2</th>
                  <th scope="col">3</th>
                  <th scope="col">4</th>
                </tr>

                 <tr>
                   <th scope="row">0</th>
                   <td className="odd"></td>
                   <td className="even"></td>
                   <td className="odd"></td>
                   <td className="even"></td>
                   <td className="odd"></td>
                 </tr>
                 <tr>
                   <th scope="row">1</th>
                   <td className="even"></td>
                   <td className="odd"></td>
                   <td className="even"></td>
                   <td className="odd"></td>
                   <td className="even"></td>
                 </tr>
                 <tr>
                   <th scope="row">2</th>
                   <td className="odd"></td>
                   <td className="even"></td>
                   <td className="odd"></td>
                   <td className="even"></td>
                   <td className="odd"></td>
                 </tr>
                 <tr>
                   <th scope="row">3</th>
                   <td className="even"></td>
                   <td className="odd"></td>
                   <td className="even">
                     <img src={robot} height="30" alt="robot" />
                   </td>
                   <td className="odd"></td>
                   <td className="even"></td>
                 </tr>
                 <tr>
                   <th scope="row">4</th>
                   <td className="odd"></td>
                   <td className="even"></td>
                   <td className="odd"></td>
                   <td className="even"></td>
                   <td className="odd"></td>
                 </tr> 

              </tbody>
            </table>
        </aside>
      </section>
    </div>
  );
}

export default App;
