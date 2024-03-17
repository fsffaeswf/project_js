const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
  
const keys ={
    right:{
        pressed:false
    },
    left:{
        pressed:false
    },
    up:{
        pressed:false
    }
};

const player_speed = 5;
const gravity = 0.3;

const img = new Image();
img.src = "assets/Tiles/tile_0006.png";