// const promiseOne = new Promise(function(resolve , reject){
//     setTimeout(()=>
//     {
//         console.log("Promise One")
//         resolve();
//     },1000)
    
// })

// promiseOne.then(function(){
//     console.log("Promise One Resolved");
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"Preet" , email:"preet@example.com"});
//     },1000)
// })

// promiseTwo.then(function(user){
//     console.log(user);
// })


// const promiseThree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = false; 
//         if(!error){
//             resolve("Promise Three Resolved");
//         }
//         else{
//             reject("Error !");
//         }
//     },1000);
// })

// promiseThree.then(function(pro){
//     console.log(pro);
// }).catch(function(err){
//     console.log(err);
// });


// const promiseFour = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = false;

//         if(!error){
//             resolve("Promise Four resolved");
//         }
//         else{
//             reject("Error !")
//         }
//     },1000)
// });

// async function consumepromiseFour(){
//     try {
//         const response = await promiseFour
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumepromiseFour();


// async function getAlluser(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);  

//     } catch (error) {
//         console.log(error)
//     }
// }
// getAlluser()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

Promise.all