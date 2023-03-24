// change text

function myFunction() {
    x = document.getElementsByClassName("tag");  // Find the elements
    for (var i = 0; i < x.length; i++) {
        x[i].innerText = "Deposit";    // Change the content
    }

}
function deposit01() {
    x = document.getElementsByClassName("place-bid-btn");  // Find the elements
    for (var i = 0; i < x.length; i++) {
        x[i].innerText = "Deposit Now";    // Change the content
    }

}

function changed_promo() {
    x = document.getElementsByClassName("promo");  // Find the elements
    for (var i = 0; i < x.length; i++) {
        x[i].innerText = "Slots10";    // Change the content
    }

}


// function changed_freeplay() {
//     x = document.getElementsByClassName("freeplay"); 
//     for (var i = 0; i < x.length; i++) {
//         x[i].innerText = "";    
//     }

// }


myFunction();
deposit01()
changed_promo();

