const rootDiv = document.getElementById("form");
const sbmtbutton = document.getElementById("confirmbtn");

sbmtbutton.addEventListener("click", () => {
   rootDiv.classList.remove("form-input");
   rootDiv.classList.add();
})

document.getElementById("cnum").oninput = () =>{
    document.getElementById("placeholdernum").innerText = document.getElementById("cnum").value
 } 


 document.querySelector("#cname").oninput = () =>{
    document.querySelector("#cimgname").innerText = document.querySelector("#cname").value
 } 

 document.querySelector("#cMM").oninput = () =>{
    document.querySelector("#cimgMM").innerText = document.querySelector("#cMM").value
 } 
 
 document.querySelector("#cYY").oninput = () =>{
    document.querySelector("#cimgYY").innerText = document.querySelector("#cYY").value
 } 

 document.querySelector("#cCVC").oninput = () =>{
    document.querySelector("#cimgcvc").innerText = document.querySelector("#cCVC").value
 } 

