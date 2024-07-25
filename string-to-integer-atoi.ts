// March 28
// https://leetcode.com/problems/string-to-integer-atoi/description/

function myAtoi(s: string): number {
    const MIN = -Math.pow(2, 31);
    const MAX = -MIN - 1;
    let i : number = 0;
    let res : number = 0;
    let char: string = s[i]
    while(char === ' ' || char === '_'){
        i++;
        char = s[i]
    }
    const sign: string = (char === '-' || char === '+') ? char : '';
    if(sign) i++;
    for(; i < s.length; i++){
        char = s[i];
        if(char === '0') res = res * 10;
        else if(char === '1') res = res * 10 + 1
        else if(char === '2') res = res * 10 + 2
        else if(char === '3') res = res * 10 + 3
        else if(char === '4') res = res * 10 + 4
        else if(char === '5') res = res * 10 + 5
        else if(char === '6') res = res * 10 + 6
        else if(char === '7') res = res * 10 + 7
        else if(char === '8') res = res * 10 + 8
        else if(char === '9') res = res * 10 + 9
        else break;
    }
    res = (sign ==='-') ? res * (-1) : res;
    if(res > MAX) res = MAX;
    if(res < MIN) res = MIN;
    return res;
};