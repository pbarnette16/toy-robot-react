// Command-List
// Responsible for displaying the command given to the robot and its result


function CommandList () {
    return(
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
    )

} 


export default CommandList;