//P-1

// function countVowels(str){
//     let count = 0;
//     for(let char of str)
//         {
//         if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u' ||
//            char=='A' || char=='E' || char=='I' || char=='O' || char=='U'){
//             count++;
//         }
//     }
//      console.log(count);
// }
// countVowels("ApnaCollege");

//P-2

// const countVowels= (str)=>{
//         let count = 0;
//         for(let char of str)
//             {
//             if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u' ||
//                char=='A' || char=='E' || char=='I' || char=='O' || char=='U'){
//                 count++;
//             }
//         }
//         console.log(count);
// }

// countVowels("ApnaCollege");

//P-3
//.forEach() is used for (value , index , array) this is used for traversing the array

// let arr = [1,2,3,4,5];

// arr.forEach(element => {
//     element = element**2;
//     console.log(element);
// })

// console.log(arr); //original array will remain same

//P-4

// let marks = [87 , 93 , 64 , 99 , 86 ]

// const result = marks.filter((marks)=>{
//     return marks>=90;
// })
// console.log(result);

//P-5

let n = prompt("Enter a number : ");

let arr = [];

for(let i = 1 ; i<=n ; i++){
    arr.push(i);
}
console.log(arr);

const sum = arr.reduce((prev, curr)=>{
    return prev + curr;
})
console.log(sum);

const mul = arr.reduce((prev, curr)=>{
    return prev * curr;
})
console.log(mul);   