var u, x, imagelist;
var isFirstTime=true;
var golIndex = Math.floor(Math.random() * (4 - 1)) + 1;
window.onload = function () {
    initMatch();
}
function initMatch() {
    imagelist = document.getElementsByClassName("aimg");
    x = document.getElementsByClassName("golimg");
    u = document.getElementsByClassName("underimg");
    initResult();


}
function initResult() {
    for (let i = 0; i < 3; i++) {
        if (golIndex - 1 == i) {
            x[golIndex - 1].src = "img/pokeball.svg";
        }
        else {
            x[i].src = "img/fist.svg";
        }
        imagelist[i].addEventListener("click", function (event) {

            if(isFirstTime){
                showResult(i);
            isFirstTime=false;
            }


        })
    }
}

function showResult(clickedItemIndex) {

        switch (clickedItemIndex) {
            case 0:
                u[0].style.display = "block";
                // u[0].classList.add("show");
                break;
            case 1:
                u[1].style.display = "block";
                // u[1].classList.add("show");
                break;
            case 2:
                u[2].style.display = "block";
            // u[2].classList.add("show");
        }
        document.getElementById("aimg1").classList.add("--upper");
        document.getElementById("aimg2").classList.add("--upper");
        document.getElementById("aimg3").classList.add("--upper");




    }
function gameStart(){
        document.getElementById("aimg1").classList.remove("--upper");
        document.getElementById("aimg2").classList.remove("--upper");
        document.getElementById("aimg3").classList.remove("--upper");
        
}




