let array = Prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
 
function Prime(array){
    var primes = [];
    for(let i = 1; i < array.length; i++){
        if(array[i] /= 1 || array[i] / 1 == array[i]){
            primes.push([i]);
        }
    }
    return primes;
};
