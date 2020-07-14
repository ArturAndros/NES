function openBurger() {
    document.getElementById("burger").classList.toggle("open");

    let menu = document.getElementById("burger-menu");
    let headerContent = document.querySelector('.header-content');
    if(menu.style.display ==="none"){
        menu.style.display = "flex";
        headerContent.style.display="none"
    }
    else{
        menu.style.display = "none";
        headerContent.style.display="flex"
    }
};