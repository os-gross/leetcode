// March 28
// https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/description/

function maxSubarrayLength(nums: number[], k: number): number {
    let left : number = 0;
    let longest: number = 0;
    const frequency: Record<number, number> = {};
    for(let right = 0; right < nums.length; right++){
        if(frequency[nums[right]] !== undefined) frequency[nums[right]]++
        else frequency[nums[right]] = 0;

        while(frequency[nums[right]] >= k){
            frequency[nums[left]]--;
            left++;
        }
        if(longest < (right - left + 1)) longest = right-left + 1;
    }
    return longest;
};