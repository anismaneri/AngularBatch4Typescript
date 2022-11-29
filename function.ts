function doubleMe(x:number); //function deceleration
function doubleMe(x:string); // deceleration
function doubleMe(arr:string[]) 

function doubleMe(x:any) { // function implementation
    // checking input parameter as number or not
    if (x && typeof x === "number")
     {
        console.log(x*2);
        
    }
    // checking input para as string or not
    else if (x && typeof x === "string")
     {
        console.log(x + " "+ x);    
    }
 else if (Array.isArray(x))
 {
    return x.map(name => console.log(name));
    
}
}
doubleMe(2); // calling function
doubleMe("John")
doubleMe(["codemind","tet"]);

var product = function (...num)
{
var result = 1;
for (var i = 0; i < num.length; i++) 
{
    console.log(num[i]);
    result *= num[i];
    
}
return result;
}
console.log(product(2,3,4,5));

var hello = (name:string):string=> {
    return "Hello" + name;
};

console.log(hello("AngularBatch4"));

var multiply = (num1:number, num2:number): number=> {
    return num1 * num2;
 } 
 console.log(multiply(2,7));
 

