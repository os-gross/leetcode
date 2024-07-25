// April 8
// https://leetcode.com/problems/valid-palindrome/description/

function isPalindrome(s: string): boolean {
    s = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, '')
    let left: number = 0;
    let right: number = s.length - 1;
    while(left <= right){
        if(s[left] !== s[right]) return false
        left++;
        right--;
    }
    return true
};