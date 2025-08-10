// const tinderUser = new Object();        Singleton Object


const tinderUser ={}         // NonSingleton Object

tinderUser.id = "123ab";
tinderUser.name = "Okayy";
tinderUser.isLoggedin = false;
 
const regularUser = {
    email : "nothing@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Preet",
            lastname : "Padaliya"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj = Object.assign({},obj1,obj2,obj3);   //Basic trick to assign the objects
// const obj = {...obj1 , ...obj2 , ...obj3}          //Spread trick to asssign the objects (We use this)
// console.log(obj);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin'));
console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hiteshhhhh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
