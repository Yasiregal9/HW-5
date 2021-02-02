// JavaScript Document

/* this function was created for testing purposes. Most of it will go in main

function formSubmitEvent() {
    let title = document.getElementById("title").value;
    let rating = document.getElementById("rating").value;
	
	let mov = new movie(title,rating);
	mov.Validate();
	document.getElementById("display1").innerHTML = mov.ToString();
	
	
}
*/
var movie = function (title, rating) {
	
    this.title = title;
    this.rating = rating;
    this.ToString = function () { return title + "  " + rating }
    this.Validate = function(){
        if(title.length > 2 && rating > 0 && rating <6){
            return true;
        }else{  return false;}
    }
    
   
    
};

