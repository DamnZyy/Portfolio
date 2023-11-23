var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


document.getElementById('reload').addEventListener('click', function() {
    window.location.href = "#home";
    var delayInMilliseconds = 1000; // 1 second

            setTimeout(function() {
                // Reload the page
                location.reload();
            }, delayInMilliseconds);
});