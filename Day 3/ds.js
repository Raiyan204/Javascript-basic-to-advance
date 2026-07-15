//Write a function max3(a, b, c) that returns the largest of three numbers without using Math.max
const max = (a,b,c) => 
{
    if (a > b && a> c)
    {
        return a;
    }
    else if (b > a && b > c)
    {
        return b;
    }
    else return c;
}

console.log(max(10, 20, 30));