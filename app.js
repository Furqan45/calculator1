var display = document.getElementById("display");

function getValue(num ){
display.value += num;
}
function calculatevalue(){
var cal = eval (display.value);
display.value = cal;

}
function clean(){

display.value ="";

}