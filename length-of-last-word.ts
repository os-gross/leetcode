// April 1
// https://leetcode.com/problems/length-of-last-word/description/
function lengthOfLastWord(s: string): number {
    return s.trim().split(/\s+/).at(-1).length
};