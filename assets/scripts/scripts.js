function openBurger() {
    document.getElementById("burger").classList.toggle("open");

    let menu = document.getElementById("burger-menu");
    let headerContent = document.querySelector('.header-content');
    if(menu.style.display ==="none"){
        menu.style.display = "flex";
        headerContent.style.display="none"
        document.body.classList.add('my-body-noscroll-class');
    }
    else{
        menu.style.display = "none";
        headerContent.style.display="flex"
        document.body.classList.remove('my-body-noscroll-class');
    }
};
function closeBurger() {
    document.getElementById("burger").classList.toggle("open");
    let menu = document.getElementById("burger-menu");
    let headerContent = document.querySelector('.header-content');
    menu.style.display = "none";
    headerContent.style.display="flex"
    document.body.classList.remove('my-body-noscroll-class');
}
// function changeVideo() {
//     if (window.matchMedia("(min-width: 1080px)").matches) {
//         /* the viewport is at least 400 pixels wide */
//         document.getElementById('video').classList.add('vertical');
//         document.getElementById('video').classList.remove('horizontal');
//     } else {
//         /* the viewport is less than 400 pixels wide */
//         document.getElementById('video').classList.remove('vertical');
//         document.getElementById('video').classList.add('horizontal');
//     }
// }
// changeVideo();
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
function chooseLevel(evt,id){
    let tablinks = document.getElementsByClassName("check-lvl-element");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-btn-lvl", "");
    }
    evt.currentTarget.className += " active-btn-lvl";
    let click = document.getElementById(id);
    click.click();
}
document.getElementById("defaultOpenCheck").click();

function openPopUp(id) {
    if (window.matchMedia("(min-width: 960px)").matches) {
        /* the viewport is at least 400 pixels wide */
        document.getElementById(id).style.display='flex';
        document.body.classList.add('my-body-noscroll-class');
    } else {
        /* the viewport is less than 400 pixels wide */
        document.getElementById(id).style.display='block';
        document.body.classList.add('my-body-noscroll-class');
    }
}
function closeGame(id) {
    document.getElementById(id).style.display="none";
    document.body.classList.remove('my-body-noscroll-class');
    document.getElementById("pop-up-send-bg").style.display='none';
    document.body.classList.remove('my-body-noscroll-class');


}
function openPrice(id) {
    document.getElementById(id).style.display="block"
    document.body.classList.add('my-body-noscroll-class');
}


//form
const scriptURL2 = 'https://script.google.com/macros/s/AKfycbxiguP6Qc4CBy9MGoTEzMap11R3bIOjwwp53tv_r9k9gGobkBEI/exec';
const form = document.forms['submit-to-google-sheet'];
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL2, { method: 'POST', body: new FormData(form)})
        .then(response =>
            // console.log('Success!', response)
        popUpSend('pop-up-send-success') )
        //)
        .catch(error => popUpSend('pop-up-send-fail')
            // console.error('Error!', error.message)
        )
});

function popUpSend(id) {
    document.getElementById(id).style.display='block';
    document.getElementById("pop-up-send-bg").style.display='block';
    document.body.classList.add('my-body-noscroll-class');
}
function submitB() {
    document.getElementById('send').click();
}

