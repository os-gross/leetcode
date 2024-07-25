// 25 July
// https://leetcode.com/problems/sort-an-array/

// merge sort
function sortArray(nums: number[]): number[] {
    if (nums.length === 0 || nums.length === 1) return nums;
    else if (nums.length === 2) {
        if (nums[0] > nums[1]) {
            const temp: number = nums[0]
            nums[0] = nums[1]
            nums[1] = temp
        }
        return nums
    }
    else {
        const middle = Math.floor(nums.length / 2)
        const left: number[] = sortArray(nums.slice(0, middle))
        const right: number[] = sortArray(nums.slice(middle, nums.length))
        const result: number[] = []

        let left_idx: number = 0;
        let right_idx: number = 0;

        while (true) {
            if (left_idx === left.length) {
                while (right_idx !== right.length) {
                    result.push(right[right_idx++])
                }
                return result;
            }
            else if(right_idx === right.length){
                while (left_idx !== left.length) {
                    result.push(left[left_idx++])
                }
                return result;
            }
            else if (left[left_idx] < right[right_idx]) result.push(left[left_idx++])
            else if (left[left_idx] >= right[right_idx]) result.push(right[right_idx++])
        }
    }
};

