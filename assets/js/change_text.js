// change text

function myFunction() {
    x = document.getElementsByClassName("tag");  // Find the elements
    for (var i = 0; i < x.length; i++) {
        x[i].innerText = "Create an account";    // Change the content
    }

}

function changed_promo() {
    x = document.getElementsByClassName("promo");  // Find the elements
    for (var i = 0; i < x.length; i++) {
        x[i].innerText = "Jackpot";    // Change the content
    }

}

function changed_color() {
    x = document.getElementsByClassName("promo");  // Find the elements
    for (var i = 0; i < x.length; i++) {
        x[i].innerText.style.color = '#8FC93A';    // Change the content
    }

}

function changed_freeplay() {
    x = document.getElementsByClassName("freeplay");  // Find the elements
    for (var i = 0; i < x.length; i++) {
        x[i].innerText = "";    // Change the content
    }

}


myFunction();

changed_promo();

changed_freeplay();

changed_color();