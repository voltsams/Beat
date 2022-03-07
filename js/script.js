// NAV

document.querySelector("#hamburger").addEventListener("click", function() {
    document.querySelector(".nav").classList.add("visible");
})

document.querySelector(".close-nav").addEventListener("click", function() {
    document.querySelector(".nav").classList.remove("visible");
})

// POPUP 

document.querySelector("#btn").addEventListener("click", function() {
    // Alternative à javascript:void();
    // On annule l'évènement par default
    // Penser a mettre : function(event)
    //event.preventDefault();
    document.querySelector(".popup").classList.add("visible");
})

document.querySelector(".close-pp").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("visible");
})

// DBLCLICK

document.querySelector("#logo").addEventListener("dblclick", function() {
    document.querySelector(".content").classList.add("hidden");
    document.querySelector(".video").style.display = "block";
})

document.querySelector("#bringback").addEventListener("click", function() {
    document.querySelector(".content").classList.remove("hidden");
    document.querySelector(".video").style.display = "none";
})