function sumOdd(n){
    let sum=0;
    for (let index = 1; index <= n; index++) {
        if (index % 2 !== 0) {
            sum += index
        }
    }
    return sum
}
console.log(sumOdd(100));