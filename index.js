function shout(string) {
 return string.toUpperCase();
}

function whisper(string){
 return string.toLowerCase();
}

// function checkString(string) {
//  return string === "Let's have dinner together!"
// }

function logShout(string){
 console.log(string.toUpperCase());
}
function logWhisper(string){
 console.log(string.toLowerCase());
}
function isLowerCase(input) {
 // "HELLO" === String("HELLO").toLowerCase();
 // "HELLO" === "hello"
 // "hello" === String("hello").toLowerCase();
 // "hello" === "hello"
 return input === whisper(input);
}

function isUpperCase(input) {
 return input === shout(input);
}

// console.log(isLowerCase("hello"));
// console.log(isLowerCase("HELLO"));
// console.log(isUpperCase("hello"));
// console.log(isUpperCase("HELLO"));

function sayHiToHeadphonedRoommate(string){
 // "HjiohugJJIVFD"
 if(isLowerCase(string)){
  return "I can\'t hear you!";
 } else if(isUpperCase(string)) {
  return "YES INDEED!";
 } else if (string === "Let's have dinner together!") {
  return "I would love to!";
 }
}

// console.log('====================================');
console.log(sayHiToHeadphonedRoommate("hello"));
// console.log('====================================');
console.log(sayHiToHeadphonedRoommate("HELLO"));
// console.log('====================================');
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));
// console.log('====================================');
console.log(sayHiToHeadphonedRoommate("HjiohugJJIVFD"));
// let string = "ALI";
// console.log(string.toLowerCase());