function submitCode() {
    var code = document.getElementById("code").value

    if (code == "") {
        
    } else {
        if (code == "uniform") {
            window.location.href = "challangeFive.html"
        } else {
            document.getElementById("errorMessage").innerHTML = "The code, " + code + ", was incorrect. Try another code."
        }
    } 

}


function help() {
    window.location.href = "help.html"
}