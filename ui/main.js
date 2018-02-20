console.log('Loaded!');

var element= document.getElementById('main_text');
element.innerHTML = 'New Value';

// move the image
var img= document.getElementByID('img');
img.onclick = function() {
    img.style.marginLeft = '100px';
}