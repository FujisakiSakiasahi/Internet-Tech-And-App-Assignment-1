var onresize = function(e) {
    //note i need to pass the event as an argument to the function
    width = e.target.outerWidth;
    height = e.target.outerHeight;
}
window.addEventListener("resize", onresize);