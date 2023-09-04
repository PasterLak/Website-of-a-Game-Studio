const localStorageId = "cookieBannerDisplayed";
const container = document.querySelector(".cookie-container");
const button = document.querySelector(".cookie-button");

// OnClick funktionalität hinzufügen
button.addEventListener("click", 
() => {
    container.classList.remove("active");
    localStorage.setItem(localStorageId, true);
});


setTimeout( () => {
    // Wenn keine Cookies akzeptiert waren, dann das Cookie Fenster zeigen
    if(!localStorage.getItem(localStorageId))
    {
        container.classList.add("active");
    }
    
}, 2000);



function resetStorage()
{
    localStorage.removeItem(localStorageId);
}