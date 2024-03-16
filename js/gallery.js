/*Name this external file gallery.js*/

window.onload = function(){
    console.log=("Page is loaded");
    addTabIndex();
}

function addTabIndex(){
    var previewImages = document.getElementsByClassName('preview');
    for (var i=0; i< previewImages.length; i++){
        previewImages[i].setAttribute("tabindex","0");
    }
}
function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
    x=document.getElementById('image');
    x.innerHTML=previewPic.alt;
    x.style.backgroundImage="url("+previewPic.src+")";
    }
   
function unDo(){
    /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" back to the orginal-image.  You can use the css code to see what that original URL was
       
    2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
    */
    x=document.getElementById('image');
    x.innerHTML="Hover over an image below to display here.";
    x.style.backgroundImage="url()";
    x.style.backgroundColor="#8e68ff";
}

// function foCus(previewPic){   
//    var x=document.getElementById('image');
//    x.innerHTML=previewPic.alt;
//    x.style.backgroundImage="url("+previewPic.src+")";
// }

// var previewImages = document.getElementsByClassName('preview');
// for (var i = 0; i < previewImages.length; i++){
//    previewImages[i].addEventListener("focus", function(){
//       foCus(this);
//    });
// }

