function addImage (imageUrl, x, y, width, height, idName, className) { 
  // create a new div element 
  // and give it some content 
  var newDiv = document.createElement("div"); 
  var newImg = document.createElement("img");
  newDiv.style.width = width;
  newDiv.style.height = height;
  newDiv.id = idName;
  newDiv.class = className; //image from css
  newDiv.appendChild(newImg); //add the text node to the newly created div. 
  newDiv.css({left:x, top:y});

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("kenshiro_end"); //this div is the reference point in the HTML for new images.
  document.body.insertBefore(newDiv, currentDiv); 
}
