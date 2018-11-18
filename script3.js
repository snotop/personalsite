var golIndex=Math.floor(Math.random() * (4 - 1) ) + 1;
window.onload=function(){
    var imagelist=document.getElementsByClassName("aimg");
    var x=document.getElementsByClassName("golimg");
    var u=document.getElementsByClassName("underimg");
    
    var a=false;
    for(let i=0;i<3;i++)
    {
        

        if(golIndex-1==i)
        {
            x[golIndex-1].src="img/pokeball.svg";
        }
        else
        {
            x[i].src="img/fist.svg";  
        }
        
            imagelist[i].addEventListener("click",function(event){
                
                switch(i){
                    case 0:
                    u[0].style.display="block";
                    // u[0].classList.add("show");
                    break;
                    case 1:
                    u[1].style.display="block";
                    // u[1].classList.add("show");
                    break;
                    case 2:
                    u[2].style.display="block";
                    // u[2].classList.add("show");
                 }
            imagelist[0].classList.add("hide");
            imagelist[1].classList.add("hide");
            imagelist[2].classList.add("hide");
            imagelist[i].disabled = true;
            
             
        })
        
     
        
    }
}
$=function(input){
  var dom=document.querySelectorAll(input);
    return dom;
}
NodeList.prototype.addClass=function(className){
    debugger;
    for(var i=0;i<this.length;i++)
    {
        this[i].classList.add(className);
    }
}