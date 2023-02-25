// Get the modal
let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById('myImg');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}









let modal2 = document.getElementById('myModal2');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img2 = document.getElementById('myImg2');
let modalImg2 = document.getElementById("img02");
let captionText2 = document.getElementById("caption2");
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() { 
    modal2.style.display = "none";
}





let modal3 = document.getElementById('myModal3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img3 = document.getElementById('myImg3');
let modalImg3 = document.getElementById("img03");
let captionText3 = document.getElementById("caption3");
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span3.onclick = function() { 
    modal3.style.display = "none";
}

let modal4 = document.getElementById('myModal4');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img4 = document.getElementById('myImg4');
let modalImg4 = document.getElementById("img04");
let captionText4 = document.getElementById("caption4");
img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText4.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on <span> (x), close the modal
span4.onclick = function() { 
    modal4.style.display = "none";
}