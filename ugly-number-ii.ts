// August 18
// https://leetcode.com/problems/ugly-number-ii/description/



function nthUglyNumber(n: number): number {
    const nums: Set<number> = new Set<number>([1])
    let current: number = 1;
    for(let i = 0; i < n; i++){
        current = Math.min(...nums)
        nums.delete(current)
        nums.add(current * 2)
        nums.add(current * 3)
        nums.add(current * 5)
    }

    return current;
};