class Point{
    // By default all members are public.
    
    // We cannot have multiple constructors like C# to have one extra constructor wout parameters. So, we can set these parameters as optional. Using '?' sign they become optional.

    // TS will generate fields for us and initialize with calling params.
    constructor(private x?:number,private y?:number){
        
    }

    // We have to make sure we are sending class's member because here we will have access of outside variables also. So, used this.x
    getX() {return this.x;} 
    setX(value) {
        if(value<0){
            throw new Error('value cannot be less than 0.');
        }
        this.x = value;
    }

    // To avoind calling method - we can directly access the variable. No need to call methods always.
    get Y() {return this.y;}
    set Y(value) {
        if(value<0) throw new Error('value cannot be less than 0.');
        this.y = value;
    }

    draw(){
        console.log('X : ' + this.x+ ', Y:' + this.y);
    }

    getDistance (another:Point){

    }
}

// Constructor with parameters
let point1 = new Point(1,2); 
let x = point1.getX();
point1.setX(10);

// To avoind calling method - we can directly access the variable. No need to call methods always.
let yParam = point1.Y;
point1.Y = 99;
point1.draw();

