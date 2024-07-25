// April 10
// https://leetcode.com/problems/top-k-frequent-elements/description/

function topKFrequent(nums: number[], k: number): number[] {
    const map: Map<number, number> = new Map<number, number>();
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1)
    }
    const res: number[] = [];
    while(k !== 0){
        let maxValue: number = 0;
        let maxKey: number = -1;
        map.forEach((value: number, key: number) =>{
            if(value >= maxValue){
                maxKey = key 
                maxValue = value
            }
        })
        res.push(maxKey)
        map.delete(maxKey)
        k--;
    }
    return res;
};

console.log(topKFrequent([1,1,1,2,2,3], 2))