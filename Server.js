const http= require("http");

const server = http.createServer((request,response) => {
    const requestUrl =request.url;
    const requestMethod=request.method;


    if(requestUrl==="/home"){
        response.end("Home Page");
    }
    if(requestUrl==="/users"){
        response.end("List of Users");
    }
    if(requestUrl==="/systemConfig"){
        const freeMemory =`Free Ram:${os.freemem()/1024/1024/1024}`;
        response.end(freeMemory);
    }

});
server.listen(3000);