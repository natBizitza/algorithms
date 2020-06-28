function traverseArray(currentArr){
    let newArr = [];
    let leftCell;
    let rightCell;
    console.log(currentArr)

    if(currentArr.length ===0){
       return [];
    }

    if(currentArr.length === 1){
        return 0;
    }
    
    for(let i= 0; i<currentArr.length; i++){
        if(i === 0){
            rightCell = currentArr[i+1];
            console.log(rightCell)
            if(rightCell === 0){
                newArr.push(0);
                console.log(newArr)
            }else{
                newArr.push(1);
                console.log(newArr)
            }
        }else{
            leftCell = currentArr[i-1];

            if(i ===(currentArr.length-1)){
                rightCell= 0;
            }
            else{
                rightCell = currentArr[i+1];
            }

            rightCell === leftCell? newArr.push(0): newArr.push(1);
        }
    }
    
    return newArr;
}
console.log(traverseArray([1,0,0,0,0,1,0,0]))

function cellComplete(states, days){
    let res = states;

    for(var i=0; i < days; i++){
        console.log(res);

       res = traverseArray(res);
    }
    
    return res;
}

console.log(cellComplete([1,1,1,0,1,1,1,1], 2))