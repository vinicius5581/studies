
//  Brute Force
const bestSumBruteForce = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSumBruteForce(remainder, numbers);
    if (remainderCombination !== null) {
      const combination = [ ...remainderCombination, num];
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  return shortestCombination;
};

//  Memoized
const bestSumMemoized = (targetSum, numbers, memo={}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSumMemoized(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [ ...remainderCombination, num];
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.log(bestSumMemoized(7, [5, 3, 4, 7])); // [7]
console.log(bestSumMemoized(7, [2, 3, 5])); // [3, 5]
console.log(bestSumMemoized(8, [1, 4, 5])); // [4, 4]
console.log(bestSumMemoized(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
