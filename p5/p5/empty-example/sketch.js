let bunnyX, bunnyY;
let score = 0;

function setup() {
    createCanvas(600, 400);
    bunnyX = random(width);
    bunnyY = random(height);
    textSize(20);
    fill(0);
}

function draw() {
    background(220);

   
    fill(255, 200, 200);
    ellipse(bunnyX, bunnyY, 40, 40); 

   

    
    
}

function mousePressed() {
    let d = dist(mouseX, mouseY, bunnyX, bunnyY);
    if (d < 20) { // Bunny is clicked
        bunnyX = random(width);
        bunnyY = random(height);
        score++;
    }
}  