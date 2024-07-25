// April 8
// https://leetcode.com/problems/group-anagrams/description/
function groupAnagrams(strs: string[]): string[][] {
    const map: Map<string, string[]> = new Map()
    for(let i = 0; i < strs.length; i++){
        const sorted = strs[i].split('').sort().join('')
        if(map.has(sorted)) map.set(sorted, [...map.get(sorted)!, strs[i]])
        else map.set(sorted, [strs[i]])
    }
    const result: string[][] = [];
    for(let key of map.keys()) {
        result.push(map.get(key)!);
    }
    return result;
};