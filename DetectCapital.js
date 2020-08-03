/**
 * https://leetcode.com/problems/detect-capital/
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const length = word.length;
  const allCapsRegex = new RegExp(`[A-Z]{${length}}`);
  const allSmallRegex = new RegExp(`[a-z]{${length}}`);
  const oneCapsRegex = new RegExp("^[A-Z]([a-z])*$");

  if (
    allCapsRegex.test(word) ||
    allSmallRegex.test(word) ||
    oneCapsRegex.test(word)
  ) {
    return true;
  }
  return false;
};

detectCapitalUse("USA");
detectCapitalUse("FlAg");
