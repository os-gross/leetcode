// April 8
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

function twoSum(numbers: number[], target: number): number[] {
    let left: number = 0;
    let right: number = numbers.length - 1;
    while(left < right){
        const res = numbers[left] + numbers[right]
        if(res === target) return [left + 1, right + 1]
        else if(res < target) left++;
        else if(res > target) right--;
    }
    return [-1, -1];
};