// class User {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("this is data")
//     }
// }

// let student1 = new User("Preet","preet123@gamil.com");
// let student2 = new User("Ok","ok123@gamil.com");


//Practice-2

class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        let data = console.log("this is data")
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
       let data = console.log("new updated data");
    }
}

let student1 = new User("Preet","preet123@gamil.com");
let student2 = new User("Ok","ok123@gamil.com");

let admin1 = new Admin("ADMIN","admin123@gmail.com");