// March 30
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

function removeDuplicates(nums: number[]): number {
    let start = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i - 1] !== nums[i]){
            nums[start++] = nums[i]
        }
    }
    return start;
};