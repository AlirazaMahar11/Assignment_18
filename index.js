// Connect fileSystem or http

const fs = require("fs")
const http = require("http")

// Create Folder ASync

// fs.mkdir("NewFolder",() => {
//     console.log("Folder Created");
// });

// Create Folder Sync

// fs.mkdirSync("NewFolder");

// Create file Sync task 

// fs.writeFileSync("NewFolder/Name.txt","Aliraza Mahar")

// Create file Async Task

// fs.writeFile("NewFolder/Name.txt","Aliraza Mahar" , () => {
//     console.log("File Created");
// })

// Update File Value

// fs.writeFileSync("NewFolder/Name.txt", "Update Name Bilal Mahar")

// Update File Value

// fs.writeFile("NewFolder/Name.txt", "Update Name Bilal Mahar", () => {
//     console.log("Update Value");
// })

//  Read Value Sync Task

// const res = fs.readFileSync("NewFolder/Name.txt", "utf-8");
// fs.readFile("NewFolder/Name.txt", "utf-8", (res) => {
//     console.log(res);
// });

// console.log(res);

//  Read Value Async Task

// fs.readFile("NewFolder/Name.txt", "utf-8", (res) => {
//     console.log(res);
// });

// Create Server

const server = http.createServer((response,request) => {
    const url = request.url;
    response.end("Server is Running")
})
server.listen(100)




