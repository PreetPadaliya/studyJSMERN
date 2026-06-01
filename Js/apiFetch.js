const URL = "https://jsonplaceholder.typicode.com/posts";
const postPara = document.querySelector("#post");


const getFacts = async()=>{
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0]);
    postPara.innerText = data[0].text;
}