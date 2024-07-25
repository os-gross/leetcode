// March 31
// https://leetcode.com/problems/count-subarrays-with-fixed-bounds/description/

function countSubarrays(nums: number[], minK: number, maxK: number): number {
    let count: number = 0;
    let start : number = 0;
    let maxI: number = -1;
    let minI : number = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < minK || nums[i] > maxK){
            minI = maxI = -1;
            start = i + 1;
        }
        if(nums[i] === minK) minI = i;
        if(nums[i] === maxK) maxI = i;
        console.log(i, count, start, maxI, minI, Math.min(minI, maxI) - start + 1)

        count += Math.max(0, Math.min(minI, maxI) - start + 1);
    }
    return count;
};
