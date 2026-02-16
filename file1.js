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



// const login=()=>{
//     return Promise.resolve("Login Succsessful")
// };
// const getUser=()=>{
//     return Promise.resolve("User Data");
// }
// const getUserName=()=>{
//     return Promise.resolve("User Name");
// }
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


// login()
//     .then(getUser)
//     .then(getUserName)
//     .then(console.log("All operations completed"))
//     .catch((err)=> console.error("Error",err));


// Promise.resolve(10)
//     .then((x)=>x+5)
//     .then((x)=>x+20)
//     .then(console.log())


// const sample=async()=>{
//     console.log("Sample content");
     
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response)=> response.json())
//     .then((json)=> console.log(json));
//     console.log('~ sample "Ended":',"Ended");
// };

// console.log('~sample ~ "Started":',"STarted--------1");
// sample();
// console.log('~sample ~"Started":',"Started--------2");


const sample=async()=>{
    const func1 =fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        // .then((json)=> console.log(json));

    const func2 =fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        // .then((json)=> console.log(json));
    const a =await func1;
    const b=await func2;
    console.log("~sample ~b",b);
    console.log("~sample ~a",a);
};
sample();
    


//URL 
// https:// -> Protocols
// www.amazon.in -> Domain
// /s -> Path parameter
// ?k=motorola+phone+5g&rh=p_36%3A2000000-%2Cp_123%3A146762%257C253649%2Cp_90%3A20912642031%2Cp_n_g-1003492455111%3A81332996031%2Cp_n_g-1002085472111%3A27355812031%2Cp_n_g-1003469290111%3A33962382031&dc&crid=HBEILRPC8FXF&qid=1771221844&rnid=33962288031&sprefix=mo%2Caps%2C367&ref=sr_nr_p_n_g-1003469290111_1&ds=v1%3A5mgXoSP81eltjwivPyOh2yRtDbPDEH4zXOVlQpRLYqw  ->Query Parameter