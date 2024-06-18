const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 0
//timeout over here
setTimeout(() => console.log("timer 1 finished"), 0);

//immediate
setImmediate(() => console.log("immediate here"));

//read file
fs.readFile("welcome.txt", () => {
  console.log("I/O finished");
  console.log("-------------");
  
  //timer in the event loop
  setTimeout(() => console.log("timer 3 done here"), 0);
  setImmediate(() => console.log("immediate 2 finished here"));
  
  //process is executed first
  process.nextTick(() => console.log("process.next_tick"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " password is encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " password is encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " password is encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " password is encrypted");
  });
});
