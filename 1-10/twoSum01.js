/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const ans_array = [];
    const leng = nums.length;
    for(let i = 0; i<leng; i++){
            for(let j=i+1; j<leng; j++){
                if(nums[i] + nums[j] === target){
                    ans_array.push(i);
                    ans_array.push(j);
                    return ans_array;
                }
            }
            
    }
    
};