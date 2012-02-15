var displayASL = function(textToConvert, index, elementid, descriptionElement) {
  var charToConvert = textToConvert.charAt(index);
  var badCharacters = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
  
  document.getElementById(descriptionElement).innerHTML="<h1>" + charToConvert + "</h1>";
  
  if (badCharacters.indexOf(charToConvert) == -1) {
    if(charToConvert == " ")
    {
      document.getElementById(elementid).src="../images/empty.png";   
    } else {
      document.getElementById(elementid).src="../images/" + charToConvert + ".png";
    }
  } else {
      document.getElementById(elementid).src="../images/empty.png";   
  }
}

var textToASL = function(textToConvert, index, elementid, descriptionElement) {
  if(index < textToConvert.length) {
    displayASL(textToConvert, index, elementid, descriptionElement);
    index++;
    setTimeout(function(){textToASL(textToConvert, index, elementid, descriptionElement)}, 1000);
  }
} 
