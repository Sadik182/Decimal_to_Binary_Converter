const submit = document.getElementById('submit');
const result = document.getElementById('result');

function binary(e) {
e.preventDefault();
const num = document.getElementById('number').value;

// Input Validation
if(num === ""){
    alert("please enter a number: ");
} else if(num < 0){
    alert("Please enter a positive number");
}else{
    
}

// Conver decimal to binary
let binary = Number(num).toString(2);
result.innerHTML = binary;
console.log(typeof(num));
}

//Add Eventlister 

submit.addEventListener("click", binary);