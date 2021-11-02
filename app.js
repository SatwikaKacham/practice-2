var btn = document.querySelectorAll(".btn");
var enterBtn = document.querySelector(".enter");
var inputData = document.querySelector(".data");
var outPut = document.querySelector(".output");

console.log(enterBtn);
function inputTaker(){
    console.log( inputData.value);
    var msg=inputData.value;
    outPut.innerText="Please fill the require Data 🥺";

}
function fontSmaller()
{
    
}






enterBtn.addEventListener('click',inputTaker);
btn[1].addEventListener('click',fontSmaller);
btn[0].addEventListener('click',fontBigger);