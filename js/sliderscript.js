/**
 * Created by Sibtanu on 12/13/2015.
 */
var myImage = document.getElementById("myPhoto");
var imageArray=["WebContent/images/b1.jpg","WebContent/images/b2.jpg","WebContent/images/b3.jpg","WebContent/images/b4.jpg","WebContent/images/b5.jpg","WebContent/images/b6.jpg"];
var imageIndex=0;
function changeImage(){
    myPhoto.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if(imageIndex>=imageArray.length){
        imageIndex=0;
    }
}
var intervalHandle=setInterval(changeImage,3000);