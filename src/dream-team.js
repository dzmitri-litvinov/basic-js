import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;

  let result = [];
  for(let name of members)
  {
    if(typeof name === "string")
    {
      result.push(name.trim().toUpperCase()[0]);
    }
  }

  if(result.length === 0) return false;

  let n = "";
  result = result.sort();
  for(let i of result)
  {
    n += i;
  }

  if(n === "") return false;

  return n;
}