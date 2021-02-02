// JavaScript Document

function formSubmitEvent() {
    let title = document.getElementById("title").value;
    let rating = document.getElementById("rating").value;
	
	let mov = new movie(title,rating);
	//mov.Validate();
	//document.getElementById("display1").innerHTML = mov.ToString();
	
	
}