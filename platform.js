

class Platform {
    constructor(x , y, image){
        this.position ={
            x,
            y
        }
        this.width = 200
        this.height = 20
        this.image = image
    }
    draw(){
        const pattern = ctx.createPattern(img, "repeat");
        ctx.fillStyle = pattern
        ctx.fillRect(
        this.position.x, this.position.y,
        this.width, this.height)
       /*  ctx.drawImage(this.image, this.position.x,
        this.position.y)
         */
    }
}



