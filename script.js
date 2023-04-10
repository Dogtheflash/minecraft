setInterval(() => {
    let original = document.querySelector("#q_word").innerText;
    let elementsList = [...document.querySelectorAll(".locWord")];
    let inputBox = document.querySelector("#translateWordAnswer");
    let submitBtn = document.querySelector("#translateWordSubmitBtn");
        
    let result = elementsList.find(element => {
        if (element.getAttribute("word") == original) {
            return element;
        }
    });
    
    submitBtn.disabled = false;
    inputBox.value = result.getAttribute("translation");
    setTimeout(() => {
        submitBtn.click();
    }, 5); // make sure this value is smaller than the one under
    console.clear();
}, 10); // change value in ms to call function in a certain interval

// removing animations that stop our script from getting a streak

document.querySelector("#correct").remove();
document.querySelector("#incorrect").remove();
document.querySelector("#wocaPointsReward").remove();
