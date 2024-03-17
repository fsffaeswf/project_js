
addEventListener('keydown', ({keyCode})=>{
  /* console.log(keyCode) */
  switch(keyCode){
    case 65:
      keys.left.pressed = true
      break
    case 68:
     keys.right.pressed = true
      break
    case 32:
      if(isOnGround){
        
        player.velocity.y -=10;
        isOnGround = false;  
        }
        if(player.velocity.y == 0 || player.velocity.y == gravity ){
          isOnGround = true;
          console.log('onground')
          player.velocity.y -=10;
         
        }
       
      break
    
  }
})
addEventListener('keyup', ({keyCode})=>{
  switch(keyCode){
    case 65:
      keys.left.pressed = false
      break
    case 68:
     keys.right.pressed = false
      break
    case 32:
      if(player.velocity.y == 0 || player.velocity.y == gravity ){
        isOnGround = true;
        console.log('onground')
      }
    break
     
    
  }
})
