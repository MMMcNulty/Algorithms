/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    var recursiveFloodFill = function(image, sr, sc, newColor) {
        console.log("SR is: "+ sr + " SC is: "+ sc);
        console.log("image is: " + image);
        let targetColor = image[sr][sc];
        if(targetColor != newColor)
        {
            image[sr][sc] = newColor;
        }
        if(sc-1 >= 0 && image[sr][sc-1] == targetColor)
        {
            recursiveFloodFill(image, sr, sc-1, newColor);
        }
        if(sc+1 < image[sr].length && image[sr][sc+1] == targetColor)
        {
            recursiveFloodFill(image, sr, sc+1, newColor);
        }
        if( sr-1 >= 0 && image[sr-1][sc] == targetColor)
        {
            recursiveFloodFill(image, sr-1, sc, newColor);
        }
        if(sr+1 < image.length && image[sr+1][sc] == targetColor)
        {
            recursiveFloodFill(image, sr+1, sc, newColor);
        }
    }
    if(image[sr][sc] == newColor)
    {
        return image;
    }
    recursiveFloodFill(image, sr, sc, newColor);
    return image;
};

console.log(floodFill([[0,0,0],[0,0,1]],
    1,
    0,
    2));
console.log(floodFill([[0,0,0],[0,1,1]],
    1,
    1,
    1));