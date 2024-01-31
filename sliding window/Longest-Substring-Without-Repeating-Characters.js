/***
 * 
 * Given a string s, find the length of the longest substring without repeating characters.

    Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

    Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

    Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
    // 👉 all unique character
    function lengthOfLongestSubstring(s) {
    
};
    

// 🎲 👑 ------ slidig window and set -------
function longestSubstringWithoutRepeating(str) {
   let i = 0;
   let j = 0;
   let ans = 0;
   let set = new Set();

   while (j < str.length) {
       // If the character is not in the set, add it and expand the window
      if (!set.has(str[j])) {
         set.add(str[j]);
         ans = Math.max(ans, j - i + 1);
         j++;
      } else {
         // If the character is in the set, remove the first character and shrink the window
         set.delete(str[i])
         i++;
      }
   }
   return ans;
}
const inputString = "abcabcbb";
console.log(longestSubstringWithoutRepeating(inputString));



