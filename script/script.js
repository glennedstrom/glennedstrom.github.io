// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    console.log(header)
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

$(function(){
    $('#age').text("Age: " + Math.floor( (Date.now() - 1033516800000)/31540000000 ));
})
