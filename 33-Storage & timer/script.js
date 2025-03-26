// Timers

// setTimeout
// setInterval


const timeoutId = window.setTimeout(function () {
    console.log("Timeout...");                  // it shows the text after the given time
  }, 5000);

const interval = window.setInterval(function () {
    console.log("Interval...");
  }, 2000);


  const clearTimeOut=document.getElementById("timeout");
  const clearInterval=document.getElementById("interval");


  clearTimeOut.addEventListener("click",function(){
    window.clearTimeout(timeoutId);
  }) 

  clearInterval.addEventListener("click",function(){
    window.clearInterval(interval);
  }) 


  // Storage


  //LOCAL STORAGE//
// console.log(window);
console.log(window.localStorage);


///add in storage
localStorage.setItem("username", "Arbish");
localStorage.setItem("email", "Arbish@gmail.com");


//remove from storage
localStorage.removeItem("Arbish");


//gets the value for us
localStorage.getItem("email");
//clears the storage completely
localStorage.clear();

//SESSION STORAGE//
console.log(window.sessionStorage);
sessionStorage.setItem("username", "Arbish");
sessionStorage.setItem("email", "Arbish@gmail.com");

console.log(window.cookies);
document.cookie = "username=John Doe";
// document.cookie = "username=;";





