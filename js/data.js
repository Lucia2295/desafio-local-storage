const storedText = localStorage.getItem("formText");
    if (storedText) {
        document.getElementById("data").innerText = storedText;
    } else {
        document.getElementById("data").innerText = "No hay datos disponibles.";
    }