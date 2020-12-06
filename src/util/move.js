// These are the vectors that the robot currently handles. 
// It follows the following structure so it can be updated or swapped out in the future
// { facing: 'D', move: [X,Y]}

const moveVector = [
    {
        facing: 'NORTH',
        move: [0,1]
    }, {
        facing: 'EAST',
        move: [1,0]
    },{
        facing: 'SOUTH',
        move: [0,-1]
    },{
        facing: 'WEST',
        move: [-1,0]
    }
]