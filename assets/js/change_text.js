// change text

function myFunction() {
    x = document.getElementsByClassName("tag");  // Find the elements
    for (var i = 0; i < x.length; i++) {
        x[i].innerText = "Claim an account";    // Change the content
    }

}

function changed_promo() {
    x = document.getElementsByClassName("promo");  // Find the elements
    for (var i = 0; i < x.length; i++) {
        x[i].innerText = "Slot23";    // Change the content
    }

}

function changed_freeplay() {
    x = document.getElementsByClassName("freeplay");  // Find the elements
    for (var i = 0; i < x.length; i++) {
        x[i].innerText = "Free Play $15";    // Change the content
    }

}


myFunction();

changed_promo();

changed_freeplay();