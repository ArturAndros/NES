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

function openLevel(evt,lvlName,lvlTab) {
    // Declare all variables
    var i, tabcontent, tablinks, lvlIll;

    //Get all elements with class="lvlIll" and hide them
    lvlIll = document.getElementsByClassName("menu-illustration")
    for(i=0;i<lvlIll.length;i++){
        lvlIll[i].style.display = "none";
    }

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("join-us-info");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("join-us-menu-choose-lvl-element");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-btn-lvl", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    // document.getElementById(lvlName).style.display = "block";
    document.getElementById(lvlName).style.display="block";
    document.getElementById(lvlTab).style.display="flex";
    evt.currentTarget.className += " active-btn-lvl";


    //клик на мелкую хуйню
    if(lvlTab==='beginner') {
        document.getElementById("defaultOpenBeginner").click();
    }else if(lvlTab==='advance'){
        document.getElementById("defaultOpenAdvance").click();
    }else{
        document.getElementById("defaultOpenMiddle").click();
    }
}
function openTab(evt, id){
    let courseDescription = document.getElementsByClassName('course-description');
    for(let i=0;i<courseDescription.length;i++){
        courseDescription[i].style.display="none";
    }
    let tablinks = document.getElementsByClassName('join-us-icon-el');
    for(let i=0;i<tablinks.length;i++){
        tablinks[i].className = tablinks[i].className.replace("active-icon","")
    }
    document.getElementById(id).style.display='block';
    evt.currentTarget.className += " active-icon";

}
document.getElementById("defaultOpen").click();
