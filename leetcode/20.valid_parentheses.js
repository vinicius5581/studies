/*
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = s => {
    
  const stack = [];    
  const parentheses = '() {} []';
  
  [...s].forEach((char, idx) => {
      stack.push(char);
      
      const open = stack[stack.length - 2];
      const close = stack[stack.length - 1];
      
      let possibleParentheses = open + close;
      
      if (parentheses.includes(possibleParentheses)) {
          stack.pop()
          stack.pop();
      }
  })
  
  return stack.length === 0;
};