//  initialize the PrefixSum object
class PrefixSum {
  constructor(nums) {
    this.prefix = [];
    this.totalDistance = 0;

    for (let i = 0; i < nums.length; i++) {
      this.totalDistance += nums[i];
      this.prefix.push(this.totalDistance);
    }
  }

  // calculate the sum of distances within a specified range
  RangeSum(left, right) {
    let prefixRight = this.prefix[right];
    let prefixLeft = left > 0 ? this.prefix[left - 1] : 0;
    return prefixRight - prefixLeft;
  }
}
