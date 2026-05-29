const URL = "https://jsonplaceholder.typicode.com";

const getFacts = async()=>{
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
}