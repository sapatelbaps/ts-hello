var message = 'swamishriji';
var endsWithI = message.endsWith('i');
// If we initialize the variable later then it will be treated as any. Hover on the variable names and it will also not give intellisense for endsWith funciton in the last line.
var message1;
message1 = 'swamishriji';
var endsWithI1 = message1.endsWith('i');
// So explicitly tell the compiler by providing assertion that variable is of this type.
var messageX;
messageX = "SwamiShriji";
var endsWithIx = messageX.endsWith('i');
// alternative way :
var alternativeEndsWithIx = messageX.endsWith('i');
