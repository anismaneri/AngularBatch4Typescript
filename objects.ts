var emp={
    name:"Anis",
    Graduation:"BE.Mechanical"
}

for(var e in emp)
{
   console.log(e);
   console.log(emp[e]);
}
//array
var courses: any = ["ANgular", "ReactJs", ".Net"];

courses.push("java");
courses.push(10);

for(var i = 0; i < courses.length; i++)
{
    console.log(courses[i]);
}

var std = {
    firstName: "Jack",
    lastName: "Sparrow"
}
// destructuring
var {firstName: userFirstname, lastName: userLastName} = std;

console.log(userFirstname);
console.log(userLastName);

function display (id:number, name:string, role?:string) 
{
    console.log("Id", id);
    console.log("Name", name);
    if(role!= undefined)
    {
        console.log("Role", role);
    }

}

display(1, "Dnyanesh", "Admin");
display(1, "Dnyanesh");