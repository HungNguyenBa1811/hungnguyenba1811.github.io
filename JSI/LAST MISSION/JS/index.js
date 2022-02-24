// Toggle Menus
function displayOtherIDInArray(numID){ // Filter Other ID
    let array = ["1","2","3"]
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

// Toggle Items
var ul = document.getElementsByTagName("UL");

for(let i=0, j = ul.length; i<j; i++) {
    if ( /\btab_1\b/.test(ul[i].className) ) { // Regex to choose tab_1
        ul[i].onclick = segmentedController(ul[i]);
    }
}

function segmentedController(target) {
    return function(event) {
        let li = target.getElementsByTagName("LI");
        for (let i=0, j=li.length; i<j; i++) {
            let _ = li[i];
            _.className = _.className.replace(/\bactive\b/, " ") // Remove all "active" class from tab
            if (_ === event.target) _.className += "active";  // Add "active" class to target
        }
    }
}

document.querySelector(".showcart").addEventListener("click", () => {
    document.querySelector(".ui-widget.ui-widget-content").classList.toggle("show")
})
// Scroll to top
let scrollButton = document.querySelector("#back_top")
let scroll_1 = document.querySelector('.header-container')
scrollButton.addEventListener('click', function () {
    scroll_1.scrollIntoView()
})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
}

{/* <script type="text/javascript">
require([
  "jquery",
  "owlcarousel/minjs"
 ], function($,owlCarousel){

	$(".tab_content_2342323").hide();
	$(".tab_content_2342323:first").show(); 

	$("ul.tabs-2342323 li").click(function() {
		$("ul.tabs-2342323 li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content_2342323").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn(); 
	});
	
	 $(".category_tab_slider_2342323").owlCarousel({
	    		
		autoPlay : false,
		slideSpeed : 1000,
		navigation : true,
		stopOnHover : true,
		pagination : false,
		items : 2,
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [992,2],
		itemsTablet: [767,2],
		itemsMobile : [479,1]
	});
	
});
 

</script> */}