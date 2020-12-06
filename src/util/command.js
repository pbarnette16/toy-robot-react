// This is the command structure for the robots commands
// The command input will be checked against the commands listed
// applying the validations if necessary
// the action will control what the robot does next
// the vector is the structure wich will control how the robot moves


const commands = [
{
    command: 'PLACE',
    validation: ['isPlacementOnGrid','isFacingValid'],
    action: 'storeLocation'
},
{
    command: 'MOVE',
    validation: ['canMove'],
    moveVector: moveOrientation,
    action: 'moveObj'
},
{
    command: 'LEFT',
    rotateVector: moveOrientation.map(obj => {
        return {
            facing: obj.facing
        }
    }),
    action: 'rotateLeft'
}, {
    command: 'RIGHT',
    rotateVector: moveOrientation.map(obj => {
        return {
            facing: obj.facing
        }
    }),
    action: 'rotateRight'
}, {
    command: 'REPORT',
    action: 'returnCurrentLocation'
}]

