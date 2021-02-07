// JavaScript Document

let arr = [];
function formSubmitEvent() {
    let title = document.getElementById("title").value;
    let rating = document.getElementById("rating").value;
	
	let mov = new movie(title,rating);
	let good = mov.Validate();
	

	let concated = title + " " + rating + "\n";
	if(good){
      arr.push(concated);
      document.getElementById("display1").innerHTML = mov.ToString();
	}else{
		alert("Please fill in all fields. Rating must be between 1 and 5.");
	}
	// Why is this here? CustomerInfo();	
	
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