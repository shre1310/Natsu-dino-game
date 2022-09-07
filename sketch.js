function setup(){
    createCanvas(600, 450);
    natsu = new natsu;
}
function keyPressed() {
    if (key == ' '){
        natsu.jump();
    }
}

function draw() {
    background(220);
    natsu.show();
    natsu.move();
}
