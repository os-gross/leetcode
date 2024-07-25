// July 24
// https://leetcode.com/problems/sort-the-jumbled-numbers/description/
function sortJumbled(mapping: number[], nums: number[]): number[] {
    const map: Map<number, number> = new Map<number,number>()
    const compare = (a: number, b: number): number => {
        if(!map.has(a)) map.set(a, parseInt(a.toString().split('').map(item => mapping[Number(item)].toString()).join('')) )
        if(!map.has(b)) map.set(b, parseInt(b.toString().split('').map(item => mapping[Number(item)].toString()).join('')) )

        return map.get(a)! - map.get(b)!;
    }

    return nums.sort(compare)
};
