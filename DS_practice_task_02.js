function generalizedGCD (num, arr){
    const min = Math.min(...arr);
    if(num===0){
        return 0;
    }

    for(let i =0; i<arr.length; i++){
        if(arr[i]%min!==0){
            return 1;
        }
    }

    return min;
};

console.log(generalizedGCD(5, [3,21,9,6]));