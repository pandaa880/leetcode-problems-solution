/**
 * https://leetcode.com/problems/design-hashset/
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.set = {};
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  this.set[key] = key;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  delete this.set[key];
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.set.hasOwnProperty(key) ? true : false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
var obj = new MyHashSet();
obj.add(2);
// obj.remove(2)
var param_3 = obj.contains(2);
console.log(param_3);
