const form = document.getElementById("explore-form");



form.addEventListener("submit", event => {
    console.log(event);
    event.preventDefault();
    const userInputRadio1 = event.target[0].value;
    console.log(userInputRadio1);
    const userInputRadio2 = event.target[1].value;
    console.log(userInputRadio2);
    const userInputGroupBtn1 = event.target[2].value;
    const userInputGroupBtn2 = event.target[3].value;
    const userInputGroupBtn3 = event.target[4].value;
    const userInputCheckBox = event.target[5].value;
    console.log(userInputCheckBox);
    if (userInputRadio1 == "on") {
        console.log("sdas");





    } else {
        window.location.href = "index.html";
        replace

    }
})