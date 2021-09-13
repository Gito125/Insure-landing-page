var menubtn = document.getElementById("menu-btn");
var modal = document.getElementById("myModal");
menubtn.onclick = function(){
    var img = document.getElementById("img");
    if(img.classList.contains('open')){
        img.classList.remove('open');
        img.classList.add('close');
    } else {
        img.classList.remove('close');
        img.classList.add('open');
    }

    if(modal.style.height == "100%"){
        modal.style.height = "0%";
    } else {
        modal.style.height = "100%";
    }
}
window.addEventListener("scroll",function(){
    var section = document.getElementById("mySection");
    var backTop = document.getElementById("bTop");
    var pos = section.offsetHeight;
    if(window.pageYOffset == pos || window.pageYOffset > pos){
        backTop.style.display = 'block';
    } else {
        backTop.style.display = 'none';
    }
},false);