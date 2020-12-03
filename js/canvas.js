var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
// canvas.height = (window.innerHeight/10)*8;
// canvas.height = window.innerHeight;
//grabbing an element as context to draw in canvas

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}
var maxRadius = 30;
var minRadius = 3;

var colorArray = [
    '#4caf60',
    '#6a1b9a',
    '#ff5722',
    '#00b3ff',
    '#e91e63'
];

// onmousemove event for interaction
window.addEventListener('mousemove', 
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
});


window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    // canvas.height = (window.innerHeight/10)*8;
    init();
});




//creating a fuction to create circles
function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)];

    this.draw = function(){

        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle = this.color;
        c.fill();

    };

    this.update = function(){

        //to decrease the velocity of the context { dx } if the context goes behind left or right viewport

        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }

        //to decrease the velocity of the context { dy } if the context goes behind top or bottom viewport

        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }

        /* 
            *********  updating the values of  *************
                **  x : x-coordinate in cartesian plane  **
                        *********  and  *********
                **  y : y-coordinate in cartesian plane  **
                *********  with respect to velocities *********
            *********   of the particles i.e. dx and dy    ********
        */

        this.x += this.dx;
        this.y += this.dy;

        // interactions with mousemove

        // incrementing the radius
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 
            && mouse.y - this.y < 50 && mouse.y -this.y > -50){

                
                // this.dx += 1;
                // this.dy += 1;
                // if(this.radius < maxRadius){
                //     this.radius += 1;
                // }

        }

        //decrementing the radius
        else if(this.radius > minRadius){
            this.radius -= 1;
        }

        // calling the function draw() to draw a new circle each time the update function
        // is being called to update the coordinates of the drawn circle

        this.draw();

    };
}

    /* instantiating a circleArray to store all the circles being created */
    var circleArray = [];

    function init(){
        circleArray = [];
        for(var i=0; i<50; i++){
            var radius = Math.random() * 5 + 2;
            var x = Math.random() * (innerWidth - radius * 2) + radius;
            var y = Math.random() * (innerHeight - radius * 2) + radius;
            var dx = (Math.random() - 0.3)*2;
            var dy = (Math.random() - 0.3)*2;
            circleArray.push(new Circle(x, y, dx, dy, radius));
        }

    }

    

    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);

        for(var i=0; i<circleArray.length; i++){

            circleArray[i].update();

        }
    }

    init();
    animate();
    