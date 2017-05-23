'use strict';

function uniquePermutations(str) {
  let newPerms = new Set();

  if(str.length < 2) return newPerms.add(str);

  let firstPart =  str.slice(0, -1);
  let lastLetter = str[str.length - 1];

  let permutations = uniquePermutations(firstPart);

  permutations.forEach(perm => {
    for(let i = 0 ; i <= perm.length ; i++) {
      let permutation = perm.slice(0,i) + lastLetter + perm.slice(i);
      if(!newPerms.has(permutation)) {
        newPerms.add(permutation);
      }
    }
  });

  return newPerms;
}

console.log(uniquePermutations('jessica').size);
module.exports = uniquePermutations;
