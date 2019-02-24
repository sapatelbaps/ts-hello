var Point = /** @class */ (function () {
    // By default all members are public.
    // We cannot have multiple constructors like C# to have one extra constructor wout parameters. So, we can set these parameters as optional. Using '?' sign they become optional.
    // TS will generate fields for us and initialize with calling params.
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // We have to make sure we are sending class's member because here we will have access of outside variables also. So, used this.x
    Point.prototype.getX = function () { return this.x; };
    Point.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.');
        }
        this.x = value;
    };
    Object.defineProperty(Point.prototype, "Y", {
        // To avoind calling method - we can directly access the variable. No need to call methods always.
        get: function () { return this.y; },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');
            this.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.draw = function () {
        console.log('X : ' + this.x + ', Y:' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
// Constructor with parameters
var point1 = new Point(1, 2);
var x = point1.getX();
point1.setX(10);
// To avoind calling method - we can directly access the variable. No need to call methods always.
var yParam = point1.Y;
point1.Y = 99;
point1.draw();
