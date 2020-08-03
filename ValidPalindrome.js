/**
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const mainStr = s.split(/[\W]/).join("").toLowerCase();
  const reversed = mainStr.split("").reverse().join("").toLowerCase();
  return mainStr === reversed;
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
