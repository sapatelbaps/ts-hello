var Point = /** @class */ (function () {
    // We cannot have multiple constructors like C# to have one extra constructor wout parameters. So, we can set these parameters as optional. Using '?' sign they become optional.
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X : ' + this.x + ', Y:' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
// Constructor with parameters
var point1 = new Point(1, 2);
point1.draw();
// Constructor without parameters
var point2 = new Point();
point2.draw();
