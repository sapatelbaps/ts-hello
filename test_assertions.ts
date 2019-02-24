
let message = 'swamishriji';
let endsWithI = message.endsWith('i');

// If we initialize the variable later then it will be treated as any. Hover on the variable names and it will also not give intellisense for endsWith funciton in the last line.

let message1;
message1 = 'swamishriji';
let endsWithI1 = message1.endsWith('i');

// So explicitly tell the compiler by providing assertion that variable is of this type.

let messageX;
messageX = "SwamiShriji";
let endsWithIx = (<string>messageX).endsWith('i');

// alternative way :
let alternativeEndsWithIx = (messageX as string).endsWith('i');