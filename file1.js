// const fetchData = new Promise((resolve, reject) => {
//     const success = true;
//     if(success){
//         resolve("Data fetched");
//         console.log("Data fetched successfully");
//     } else {
//         console.log("Failed to fetch data");
//         reject("Error fetching data");
//     }
// });

// const sample = () => {
//     console.log("Sample function");
// }

// fetchData.then((data) => {
//     console.log(data);
//     sample();
// }).catch((error) => {
//     console.error(error);
// });



const login=()=>{
    return Promise.resolve("Login Succsessful")
};
const getUser=()=>{
    return Promise.resolve("User Data");
}
const getUserName=()=>{
    return Promise.resolve("User Name");
}
// login().then((err,response) => {
//     if(response){
//         console.log("Login failed");
//         return;
//     }
//     getUser().then(()=>{
//         getUserName().then(()=>{
//             console.log("all operations completed");
//         });

//     })
// });


login()
    .then(getUser)
    .then(getUserName)
    .then(console.log("All operations completed"))
    .catch((err)=> console.error("Error",err));


Promise.resolve(10)
    .then((x)=>x+5)
    .then((x)=>x+20)
    .then(console.log())


const sample=async()=>{
    console.log("Sample content");
     
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response)=> response.join())
    .then((json)=> console.log(json));
    console.log('~ sample "Ended":',"Ended");
};

console.log('~sample ~ "Started":',"STarted--------1");
sample();
console.log('~sample ~"Started":',"Started--------2");
    

