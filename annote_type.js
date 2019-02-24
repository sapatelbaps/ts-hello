// If we specify variable type using annotation then typescript can give us compilation error.
var a;
a = 1;
a = 100.1;
// a = true; // Uncommenting will give compilation error evnthough js will be generated.
// a = 'a'; // Uncommenting will give compilation error evnthough js will be generated.
var b;
var c;
var d;
var e_arr = [1, 2, 3];
var f_arr = [1, true, 'a', false];
var Color_Red = 0;
var Color_Green = 1;
var Color_Blue = 2;
// First value will start with 0 and increamental, so always specify the value.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var Guru;
(function (Guru) {
    Guru[Guru["Swami"] = 1] = "Swami";
    Guru[Guru["Pramukh"] = 5] = "Pramukh";
    Guru[Guru["Mahantam"] = 6] = "Mahantam";
})(Guru || (Guru = {}));
;
var backGroundColour = Color.Blue;
