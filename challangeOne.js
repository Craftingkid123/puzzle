function submitCode() {
    var code = document.getElementById("code").value;
    
    if (code==""){

    }
    else {
        if (code=="wrist") {
            window.location.href = "challangeTwo.html"
        } else {
            document.getElementById("errorMessage").innerHTML = "The code, " + code + ", was incorrect. Try another code."
        }
    }
}

document.getElementById("secretText").addEventListener("click", "displayCodes")

function displayCode() {
    alert("wrist");
}

function help() {
    window.location.href = "help.html"
}