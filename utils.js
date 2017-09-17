function addImage (imageUrl, idName, className, x, y, width, height, beforeElementId) { 
  // create a new div element 
  // and give it some content 
  var newDiv = document.createElement("div"); 
  var newImg = document.createElement("img");
  newDiv.style.width = width;
  newDiv.style.height = height;
  newDiv.id = idName;
  newDiv.classList.add(className); //image from css
  // newDiv.appendChild(newImg); //add the text node to the newly created div. 
  newDiv.style.left = x;
  newDiv.style.top = y;
  // newDiv.style.background = "red";
  newDiv.style.position = "absolute";
  newDiv.style.backgroundImage = imageUrl;
  newDiv.style.backgroundRepeat = "no-repeat";

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById(beforeElementId); //this div is the reference point in the HTML for new images.
  document.body.insertBefore(newDiv, currentDiv); 
  return newDiv;
}
