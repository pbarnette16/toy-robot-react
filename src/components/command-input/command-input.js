// Command-Input
// Responsible for recieving commands for the robot


function CommandInput () {
    return(
        <div className="command-input">
          <label for="name">Robot Command

          <input type="text" id="name" name="name" minlength="4" maxlength="8" size="10" placeholder="What is your command" />
          </label>
          <button>Execute</button>

          </div>
    )

} 

export default CommandInput;