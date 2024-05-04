/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let ans_bool = true;
    if(x < 0){
        ans_bool = false;
        return ans_bool;
    }
    for(let i = 0; i<(String(x).length + 1)/2; i++){
        if(String(x)[i] != String(x)[(String(x).length-1)  - i]){
            ans_bool = false;
        }
    }
    return ans_bool;
};