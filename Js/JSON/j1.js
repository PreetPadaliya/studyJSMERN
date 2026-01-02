// var a ={
//     "name" : "Preet",
//     "age" : 20,
//     "ispass" : true,
//     "address" : {
//         "city":"Junagadh",
//         "pincode":362001
//     },
//     "subjects":["Maths","Computer"],
//     "year":null
// }

// console.log(a);
// console.log(a.age);
// console.log(a['address']);
// console.log(a['address']['city']);


//Parse
let obj =JSON.parse(`{
    "var1":"KSV",
    "var2":"University"
}`);
console.log(obj);
console.log(obj.var1+" "+obj.var2);

//Stringify
