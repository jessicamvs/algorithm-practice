'use strict';

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

module.exports = function(names) {
  let i = 0;
  let str = '';

  if(!names.length) return str;
  if(names.length === 1) return names[0].name;

  while( i !== names.length - 2 ) {
    str = str + names[i].name + ', ';
    i++;
  }

  str = str + names[i].name + ' & ' + names[i+1].name;

  return str;
};
