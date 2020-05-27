/**
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const str = x.toString().split("");
  let m = 1;
  if (str[0] === "-") {
    m = -1;
    str.shift();
  }

  str.reverse();
  // console.log(str);

  let i = 0;
  while (str[i] === "0") {
    str.shift();
  }

  const num = Number(str.join("")) * m;

  if (num > 2 ** 31 - 1 || num < -(2 ** 31)) {
    return 0;
  }

  console.log(num);
  return num;
};

reverse(123);
reverse(-123);
reverse(120);
reverse(-65090);
