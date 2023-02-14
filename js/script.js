// console.log("connected");

// document.getElementById("inputText");


// const userInput = document.getElementById("inputText");
// const displayInput = document.getElementById("outputText");
// const displayInput2 = document.getElementById("outputText2");

// document.getElementById('btnSubmit').addEventListener("click",()=>{
//     console.log(userInput.value);
//     const inputText1 = userInput.value;
//     const inputText2 = userInput.value;
//     console.log(inputText1,inputText2);
//     displayInput.textContent = inputText1;
//     displayInput2.textContent = inputText1;

//     // console.log(displayInput.textContent+"hi");
//     // document.getElementById("outputText1").value = inputText1;
// });



const userInput = document.getElementById("inputText");

const displayUserInput = document.getElementById("outputUserText");

document.getElementById('btnSubmit').addEventListener("click",()=>{
    console.log(userInput.value);
    const inputText = userInput.value;
    displayUserInput.textContent = inputText;

    // console.log(displayInput.textContent+"hi");
    // document.getElementById("outputText1").value = inputText1;
});



// function textTranfer(){
//     var x = document.getElementById("inputText");
    
//     // var y = x.value;
//     document.getElementById("outputText").value = "Fifth Avenue, New York City";;

// }

// document.getElementById('btnSub').addEventListener('click', function(){
//     var x = document.getElementById("inputText");

//     document.getElementById("outputText").value = x ; 
// })



// document.getElementById("submit-btn").addEventListener("click", () => {
//   const inputText = userInput.value;
//   displayInput.textContent = inputText;
// });