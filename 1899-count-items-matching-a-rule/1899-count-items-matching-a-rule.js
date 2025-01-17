/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let key;
  if(ruleKey==='color')
  key=1;
  else if(ruleKey==='type')
  key=0;
  else if(ruleKey==='name')
  key=2;
  const finded=items.filter(item=>item[key]===ruleValue)
  return finded.length;
};