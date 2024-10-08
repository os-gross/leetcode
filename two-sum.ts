// April 6
// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map();
    for(let i = 0; i < nums.length;i++){
        const diff = target - nums[i]
        
        if(map.has(diff)) return [map.get(diff)!, i]
        map.set(nums[i], i)
    }
    return [];
};