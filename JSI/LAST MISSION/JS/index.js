function toggleSystem(popupID,divID){
    function toggleOnOff(){
        var pop1 = document.getElementById(popupID);
        pop1.classList.toggle("show");
    }
    document.querySelector(divID).addEventListener("click", toggleOnOff)
}
toggleSystem("popup3","#div_1")
toggleSystem("popup4","#div_2")
toggleSystem("popup63","#div_3")
toggleSystem("popup64","#div_4")