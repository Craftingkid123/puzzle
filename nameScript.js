function printName() {
    var name = document.getElementById("leaderFname").value;

    if (name == ""){
    } else {

    document.getElementById("printName").innerHTML = "Hello " + name + ", your mission is simple, complete all five tasks by working together. Good Luck! To begin your challange press the button below:";

        var nextButton = document.createElement("INPUT");
        nextButton.setAttribute("type", "button");
        nextButton.setAttribute("value", "Start First Challange!");
        nextButton.setAttribute("onclick", "challangeOne()");
        nextButton.setAttribute("class", "nextButton");
        document.body.appendChild(nextButton);
    }
}

function challangeOne() {
    window.location.href = "challangeOne.html"

}