document.getElementById("buttonText").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    localStorage.setItem("formText", inputText);
    window.location.href = "data.html";
});