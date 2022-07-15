
function isPrime(num){
    if(num < 2){
        return false;
    }
    for(let i = 2; i < num; i++){
        if (num % 1 == 0){
            return false;
        }
    }
    return true;
}
function countPrimeNumbers(){
    let count = 0;
    for (let i = 2; i <= 100; i++ ){
        if (isPrime(i)){
            count++;
        }
    }
    return count;

}
let start = performance.now();
countPrimeNumbers();
let finish = performance.now();
let result = finish - start;
console.log("Execution time of printing countPrimeNumbers was " + result + " milliseconds.");