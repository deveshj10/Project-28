class Mango{
    constructor(x,y,r){
        var options = {
            isStatic: true ,
            restitution : 0,
            friction : 1,
        }
        this.body = Bodies.circle(x,y,r/2,options);
        

    }

    
}