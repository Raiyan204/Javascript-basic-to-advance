let num  = 100;
function largerThanNumber (arr, num) 
{
    let largerNumbers = [];
    for (let i = 0; i < arr.length; i++)
    {if(arr[i] > num){
        largerNumbers.push(arr[i]);
    }}
    return largerNumbers;
}
const arr = [10, 20, 30, 40, 500, 60, 700, 80, 90, 100];
console.log(largerThanNumber(arr, num));