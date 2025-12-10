// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNumers.map( (num) => { return num + 10})

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);




let nums = [1,2,3,4,5];

//MAP
// nums.map((val)=>{
//     console.log(val);
// })

//FILTER
// let res = nums.filter((val)=>{
//     return(val%2===0);
// })
// console.log(res);

//REDUCE
const output = nums.reduce((prev,curr)=>{ 
    if(prev>curr){
        return prev;
    }
    else{
        return curr;
    }
})
console.log(output);