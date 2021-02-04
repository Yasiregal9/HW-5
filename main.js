// JavaScript Document

let arr = [];
function formSubmitEvent() {
    let title = document.getElementById("title").value;
    let rating = document.getElementById("rating").value;
	
	let mov = new movie(title,rating);
	mov.Validate();
	document.getElementById("display1").innerHTML = mov.ToString();

	let concated = title + " " + rating + "\n";
	arr.push(concated);
	CustomerInfo();	
	
}

function formSubmitEvent2() 
{
	let displayMovies = document.getElementById("display");
	displayMovies.innerHTML = "";
	
    for(let i=0;i<arr.length;i++)
    {  		
		let display = document.createElement("display1");
        display.appendChild(document.createTextNode(arr[i]));
		displayMovies.appendChild(display);
    }

}