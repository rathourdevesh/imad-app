console.log('Loaded!');

// changing value
var element= document.getElementById('main_text');
element.innerHTML = 'New Value';

// move the image
var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft+10;
    img.style.marginLeft = '100px';
}


var img= document.getElementById('madi');
img.onclick = function() {
    var interval= setInterval(moveRight,100);
    
}