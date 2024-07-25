// March 27
// https://leetcode.com/problems/subarray-product-less-than-k/description/

function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if(k <= 1) return 0;
    let count: number = 0;
    let left: number = 0;
    let product: number = 1;
    for(let right = 0; right < nums.length; right++){
        product *= nums[right]
        while(product >= k){
            product /= nums[left]
            left++
        }
        count += right - left + 1;
    }
    return count
};