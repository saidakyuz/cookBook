/*

let input = document.querySelector(".calculator-input").values; //calculator is an <input> which it's variable can be changed by user.
let output = document.querySelectorAll(".calculator-output"); //my question is; does this method work after all changes of input or only one time. I got the answer ; eventlistener

input.addEventListener("input.isChanged", () => {
    output.forEach(el => el *= input);
});
/* *= input;
console.log(output); */



const form = document.getElementById("calculator-form");



form.addEventListener("submit", el => {
    el.preventDefault();
    const userInput = el.target[0].value;
    if (userInput) {
        const x = document.querySelectorAll(".x");
        x.forEach(element => {
            element.innerHTML *= userInput;
        })


    }
})