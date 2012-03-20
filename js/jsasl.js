var insertImpressDiv = function(photoSrc, index, charToConvert,totalLength) {
	// space out each slide by 2k 	
	var yValue = index * 2000;

	// build a div entry for each slide with basic impressJS
	var divEntry = "<div id=\"asl";
	divEntry += index + "\" ";
	divEntry += "class=\"step slide\" data-x=\"0\" data-y=\"";
	divEntry += yValue + "\" ";
	divEntry += "data-scale=\"1\">";
	divEntry += "<h1 align=\"center\">" + charToConvert + "</h1>";
	divEntry += "<p class=\"centeredImage\"><image id=\"aslout\" src=\"";
	divEntry += photoSrc + "\" ";
	divEntry += "align=\"center\"></image></p>"
	divEntry += "<div id=\"hint\">";
	divEntry += "<h5 align=\"center\">";
	divEntry += "Use a spacebar or arrow keys to navigate (";
	divEntry += "Slide " + (index + 1) + "/" + totalLength + ")</h5></div></div>";

	// insert the div into the document body under impress
	document.getElementById("impress").innerHTML += divEntry;
}

var displayASL = function(textToConvert, index,totalLength) {
  var charToConvert = textToConvert.charAt(index).toLowerCase();
  var badCharacters = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
  var photoSrc = "";
   
  if (badCharacters.indexOf(charToConvert) == -1) {
    if(charToConvert == " ")
    {
      photoSrc ="./images/empty.png";   
    } else {
      photoSrc ="./images/" + charToConvert + ".png";
    }
  } else {
      photoSrc ="./images/empty.png";   
  }

  insertImpressDiv(photoSrc, index, charToConvert,totalLength);
}

var textToASL = function(textToConvert) {
	var totalLength = textToConvert.length;
	for(var i = 0; i < totalLength; i++) {
		displayASL(textToConvert, i,totalLength);
	}

	var impressLoad = document.createElement('script');
	impressLoad.type = 'text/javascript'; 
	impressLoad.async = true;
	impressLoad.src = './js/impressjs/js/impress.js';

	impressLoad.onload = function () {
	 impress();
	}

 	var html_doc = document.getElementsByTagName('head')[0];
	html_doc.appendChild(impressLoad);

	// now remove our old input box
	document.getElementById("submitbox").innerHTML = "";
} 










