/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
const map = new Map([
  ['b', 1],
  ['a', 1],
  ['l', 2],
  ['o', 2],
  ['n', 1]
]);
  const textMap=new Map();
  for(let i of text){
      if(textMap.has(i)) {
          let count=textMap.get(i)
          textMap.set(i,++count)
      }else if(map.has(i)) textMap.set(i,1)
  }
  let minValue=[];
  map.forEach((value,key)=>{
      let neededCount=textMap.get(key) || 0;
      minValue.push(Math.floor(neededCount/value));
  })
  return minValue.sort((a,b)=>a-b)[0];
}