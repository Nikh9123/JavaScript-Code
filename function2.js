// let bread1 = prompt(" which bread u want ")
// let saus = prompt("which saus you want ")
// let veggis = prompt("which veggis you want")

// function makeSand(bread , veggis, saus){
//     let sand = bread + " bread " + veggis + " " + saus + " sandwich " ;


//     return sand ;

// }

// let vegSand = makeSand(bread1,veggis, saus);
// console.log(vegSand);

function calculateSum(n)
{
    let fibo = [];
    if (n <= 0)
    return 0;
 
    fibo[0] = 0;
    fibo[1] = 1;
 
    // Initialize result
    let sum = fibo[0] + fibo[1];
 
    // Add remaining terms
    for(let i = 2; i <= n; i++)
    {
        fibo[i] = fibo[i - 1] +
                    fibo[i - 2];
        sum += fibo[i];
    }
 
    return sum;
}
 
    // Driver Code
    let n = 4;
    document.write(`Sum of Fibonacci numbers is :
        ${calculateSum(n)} <br>`);