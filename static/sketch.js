const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width  = window.innerWidth * 0.9;
ctx.canvas.height = window.innerHeight * 0.9;
let pencil;
var up = false;
var down = false;
var left = false;
var right = false; 
const speed = 1;
var colourWell = document.querySelector("#colourWell");
defaultValue = "#000000";
window.addEventListener("load", setup, false);
function setup() {
    colourWell = document.querySelector("#colourWell");
    colourWell.value = defaultValue;
    colourWell.addEventListener("input", updateFirst, false);
    colourWell.addEventListener("change", updateAll, false);
    colourWell.select();
    pencil = new Pencil(canvas.width/2, canvas.height/2, 1, 1, defaultValue);
    pencil.show();

}
function updateFirst(event) {
    pencil.colour = event.target.value;
    pencil.show();
}
function updateAll(event) {
    pencil.colour = event.target.value;
    pencil.show();
}
class Pencil {
    constructor(x, y, width, height, colour) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.colour = colour;
    }
    update() {
        if (up == true) {
            this.y += speed;
        } else if (down == true) {
            this.y -= speed;
        } else if (right == true) {
            this.x += speed;
        } else if (left == true) {
            this.x -= speed;
        }
        this.show();
    }
    show() {
        ctx.beginPath();
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    }
}
document.addEventListener('keydown', function(event) {
    if (event.keyCode  == 83) {
        up = true;
        down = false;
        left = false;
        right = false;
    } else if (event.keyCode == 87) {
        down = true;
        up = false;
        left = false;
        right = false;
    } else if (event.keyCode == 65) {
        left = true;
        right = false;
        up = false;
        down = false;
    } else if (event.keyCode == 68) {
        right = true;
        left = false;
        up = false;
        down = false;
    }
    if (event.keyCode == 82) {
        if (confirm("Are you sure you want to clear?")) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pencil.x = canvas.width/2;
            pencil.y = canvas.height/2;
        }
    }
    pencil.update();
});
