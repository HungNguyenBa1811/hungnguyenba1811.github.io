function displayOtherIDInArray(numID){ // Filter Other ID
    let array = ["1","2","3","4"]
    let newArray = array.filter(x => x != numID)
    return newArray
}
function toggleSystem(ID){
   document.getElementById(`div_${ID}`).addEventListener("click", () => {
        // Display Element Chosen
        let popUp = document.getElementById(`popup${ID}`);
        popUp.classList.toggle("show");
    
        // Remove class "show" if necessary
        let newArr = displayOtherIDInArray(ID)
        for(let x of newArr){
            if(document.getElementById(`popup${x}`).classList.contains("show")){
                document.getElementById(`popup${x}`).classList.remove("show")
            }
        }
    })
}
toggleSystem("1")
toggleSystem("2")
toggleSystem("3")
toggleSystem("4")