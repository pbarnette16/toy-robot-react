// Grid
// Responsible for displaying the command given to the robot and its result
import robot from './Robot.svg';

function Grid () {
    // why isnt it displaying the grid?
    return(
        <table className="table-grid">
              <caption>Robot Table Grid</caption>
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
    )

} 


export default Grid;