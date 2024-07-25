// March 30
// https://leetcode.com/problems/subarrays-with-k-different-integers/description/

function subarraysWithKDistinct(nums: number[], k: number): number {
    return atMost(nums, k) - atMost(nums, k - 1)
};

function atMost(nums: number[], k : number) : number{
    let count : number = 0;
    let left : number = 0;
    const frequency: Map<number, number> = new Map<number, number>();

    for(let right = 0; right < nums.length; right++){
        frequency.set(nums[right], (frequency.get(nums[right]) ?? 0) + 1)

        while(frequency.size > k){
            frequency.set(nums[left], frequency.get(nums[left])! - 1);
            if(frequency.get(nums[left]) === 0) frequency.delete(nums[left]);
            left++;
        }
        count += right - left + 1;
    }
    return count;
}