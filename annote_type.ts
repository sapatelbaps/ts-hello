// If we specify variable type using annotation then typescript can give us compilation error.
let a: number;
a = 1;
a = 100.1;
// a = true; // Uncommenting will give compilation error evnthough js will be generated.
// a = 'a'; // Uncommenting will give compilation error evnthough js will be generated.

let b:boolean;
let c: string;
let d:any;

let e_arr: number[] = [1,2,3];
let f_arr: any[] = [1, true, 'a' , false];

const Color_Red = 0;
const Color_Green = 1;
const Color_Blue = 2;

// First value will start with 0 and increamental, so always specify the value.
enum Color { Red, Green, Blue};
enum Guru {Swami = 1, Pramukh = 5, Mahantam = 6};

let backGroundColour = Color.Blue;