//open close wheel container
var menu = document.getElementById("wheel_div");
function closemenu() {
    menu.style.left = "-110%";
}
function openmenu() {
    menu.style.left = "0%";
}



	
    function spinWheel(){
    
    
        var x = 1024; //min value
        var y = 9999; // max value
    
        var deg = Math.floor(Math.random() * (x - y)) + y;
    
        document.getElementById('box').style.transform = "rotate("+deg+"deg)";
    
        var element = document.getElementById('mainbox');
        element.classList.remove('animate');
        setTimeout(function(){
            element.classList.add('animate');
        }, 5000); //5000 = 5 second
    }
    