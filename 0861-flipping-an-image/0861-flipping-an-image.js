/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image.map(item=>{
        return item.reverse().map(j=>{
            return j===0?1:0;
        })
    })
};