// March 29
// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/

function countSubarrays(nums: number[], k: number): number {
    const max = Math.max(...nums); 
    let maxFrequency = 0;
    let count = 0;
    let left = 0;
    for(let right = 0; right < nums.length; right++){
        if(nums[right] === max) maxFrequency++; 
        while(maxFrequency == k){
            if(nums[left] === max) maxFrequency--; 
            left++;
        }
        count += left;
    }
    return count;
};
