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
console.log(max(max(10, 20, 30), max(5, 15, 25), max(1, 2, 3)));