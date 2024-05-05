function submitCode() {
    var code = document.getElementById("code").value

    if (code == "") {
        
    } else {
        if (code == "explode") {
            window.location.href = "challangeFour.html"
        } else {
            document.getElementById("errorMessage").innerHTML = "The code, " + code + ", was incorrect. Try another code."
        }
    } 

}


function help() {
    window.location.href = "help.html"
}