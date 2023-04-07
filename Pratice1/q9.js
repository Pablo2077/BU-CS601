function removeDuplicates(array){
    var uniqueArray = [];
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}
var arr=removeDuplicates([23,45,76,1,98,102,23,45,30,99,7,18,6,1]);
console.log(arr);