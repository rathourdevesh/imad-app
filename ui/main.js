var button = document.getElementById('button');
var counter=0;
button.onclick =function() {
    
    //create a request
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status=== 200){
                var counter= request.responseText();
             var span  = document.getElementById('count');
             span.innerHTML = counter.toString();   
            }
        }
        
    };
    
    //render the variable in correct span
  request.open('GET','http://rathourdevesh97.imad.hasura-app.io/counter',true);
  request.send(null);
};