var Status;
(function (Status) {
    Status[Status["pending"] = 0] = "pending";
    Status[Status["Active"] = 1] = "Active";
})(Status || (Status = {}));
console.log("Example No==Status==>1");
console.log(Status.pending);
console.log(Status.Active);
console.log(Status[1]);
console.log(Status[0]);
var Speed;
(function (Speed) {
    Speed[Speed["Slow"] = 30] = "Slow";
    Speed[Speed["FAst"] = 100] = "FAst";
    Speed[Speed["Medium"] = 50] = "Medium";
})(Speed || (Speed = {}));
console.log("Example No===Speed=>2");
console.log(Speed[30]);
console.log(Speed[100]);
console.log(Speed[50]);
var Snacks;
(function (Snacks) {
    Snacks[Snacks["Chips"] = 1] = "Chips";
    Snacks[Snacks["Popcorns"] = 2] = "Popcorns";
    Snacks[Snacks["Potatochips"] = 3] = "Potatochips";
})(Snacks || (Snacks = {}));
console.log("Example No===Snaks==>3");
console.log(Snacks[1]);
console.log(Snacks[2]);
console.log(Snacks[3]);
