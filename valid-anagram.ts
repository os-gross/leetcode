// April 5
// https://leetcode.com/problems/valid-anagram/description/

function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    const map: Map<string, number> = new Map<string, number>();
    for(let i = 0; i < s.length; i++){
        map.set(s[i], (map.get(s[i]) ?? 0) + 1)
    }
    for(let i = 0; i < t.length; i++){
        if(!map.has(t[i])) return false
        else map.set(t[i], map.get(t[i])! - 1)

        if(map.get(t[i]) === 0) map.delete(t[i])
    }
    return true;
};