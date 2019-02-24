class Point{
    // By default all members are public.
    x: number;
    y: number;
    private test:number;
    // We cannot have multiple constructors like C# to have one extra constructor wout parameters. So, we can set these parameters as optional. Using '?' sign they become optional.
    constructor(x?:number, y?:number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log('X : ' + this.x+ ', Y:' + this.y);
    }

    getDistance (another:Point){

    }
}

// Constructor with parameters
let point1 = new Point(1,2); 
point1.draw();

// Constructor without parameters
let point2 = new Point(); 
point2.draw();
