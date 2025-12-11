// With creating id inside <h2> tag , Use append to access and modify the text inside h2 tag
// let heading = document.querySelector('#heading').append(' from Apna College students');
// console.log(heading);

//Without creating id inside <h2> tag , Use innerText to access and modify the text inside h2 tag
let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna College studnets";