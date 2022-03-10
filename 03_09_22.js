/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    var set = new Set();
    
    
    var islandCounterFunction = function( grid, set, x, y) {
        let coordinateString = `${x}, ${y}`
        if(set.has(coordinateString))
        {
            return;
        }
    }
};