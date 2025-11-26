/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
   const result=[];
   for(let i of arr2){
       const filtered=arr1.filter(item=>i===item);
       result.push(...filtered);
   }
  let notIncluded = arr1.filter(item => !arr2.includes(item));
  return [...result,...notIncluded.sort((a,b)=>a-b)];
};