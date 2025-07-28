const mySym = Symbol("key-1")

const JsUser = {
    name : "Preet",
    fullname : "Preet D Padaliya",
    [mySym] : "mykey1",                // IMP SYNTAX FOR SYMBOL DATATYPE
    age : 19,
    location : "Junagadh",
    email : "preet28@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]

}

// console.log(JsUser.email); // Wrong Way but we mostly use this method
// console.log(JsUser["email"]); // Right Way
// console.log(JsUser["fullname"]);
// console.log(JsUser[mySym]); // Correct syntax for printing symbol

// JsUser.email = "preet@chatgpt.com";
// Object.freeze(JsUser);

// JsUser.email = "preet@yahoo.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user ");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name} `);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




