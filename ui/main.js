console.log('Loaded!');

// changing value
var element= document.getElementById('main_text');
element.innerHTML = 'New Value';

// move the image
var img= document.getElementById('madi');
img.onclick = function() {
    img.style.marginLeft = '100px';
}