player = new Player();
platform = new Platform();



const platforms= [new Platform(100,200), new Platform(200,300)]

let distance = 0;


let isOnGround = true;

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    player.update();
  
    platforms.forEach((platform) =>{
      platform.draw()
    })
   /*  console.log('crjhjcnm',player.velocity.y) */
   
    if(keys.right.pressed && player.position.x <400){
    
      player.velocity.x = player_speed;
    }
    else if(keys.left.pressed && player.position.x > 100){
      
      player.velocity.x = -player_speed;
    }
    /* else if(keys.up.pressed){
      if(isOnGround){
      
      player.velocity.y -=10;
      isOnGround = false;  
      console.log('crjhjcnm',player.velocity.y)
      }
      else if(player.velocity.y == 0){
        isOnGround = true;
      }
    } */
    else{
      player.velocity.x = 0;

      if(keys.right.pressed){
        distance +=5;
        platforms.forEach((platform) =>{
          platform.position.x -= player_speed
        })
        
      }else if(keys.left.pressed){
        distance -=5;
        platforms.forEach((platform) =>{
          platform.position.x +=player_speed;
        })
        
      }
    }
    console.log(distance)
   //persech s obj
   platforms.forEach((platform) =>{
    if (player.position.y+player.height <= 
      platform.position.y 
      &&
      player.position.y +
       player.height +player.velocity.y>=
      platform.position.y
      &&
      player.position.x + player.width >= platform.position.x
      &&
      player.position.x <= platform.position.x + platform.width){
        player.velocity.y = 0;
      } 
    })
    

    if (distance >= 1488){
      console.log('nextLevel')
    }
}
animate();



