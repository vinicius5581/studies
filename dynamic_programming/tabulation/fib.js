/**
 * 
 * @param {*} n 
 * @returns 
 * 
 * Space: O(n)
 * Time: O(n)
 * 
 * @notes
 * - The table should have the length of n + 1 considerin
 * - The resulting table
 */


const fib = n => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;
  console.log(table)
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  console.log(table)
  return table[n];
}


console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));