document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var amount = document.getElementById("amount").value;
    if (name !== "" && email !== "" && amount !== "") {
        CPABuildLock();
    } else {
        alert("Please fill out all required fields.");
    }
});
