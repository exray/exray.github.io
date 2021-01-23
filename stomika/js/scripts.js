function displayMenu(event) {
    if (document.getElementById("navbarToggler").classList.contains("show")) {
        document.getElementById("navbarToggler").classList.remove("show")
    }
    else {
        document.getElementById("navbarToggler").classList.add("show")
    }
}