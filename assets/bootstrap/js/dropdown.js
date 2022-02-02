/*jshint esversion: 6 */

$(document).on("click", ".action-buttons .dropdown-menu", function(event){
	e.stopPropagation();
});

document.getElementById("not").addEventListener('click', function (event) {
	alert("click outside");
	event.stopPropagation();
});

