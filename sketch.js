// It creates a space in the memory under the name x
// x is a varuable of data type numeric
var x = 3;

//Incrementing the variable by 1 in three different ways
x = x + 1;
x++;
x += 1;

console.log(x);

// string concatenation
// + is the operator to combine two strings or two numbers

var name = "Akshar";
var surName = "Patel";

var fullName = name + surName;
console.log(fullName);

var flag = true;
console.log(!flag);

//creating an javascript pbject (JSON)
var obj1 = {
  akshar: { id: 2, phone: "123-234" },
  krina: { id: 3, phone: "123-678" },
};

console.log(obj1["akshar"]);
var contacts = []

// writing a for loop on an object
for (var t in obj1) {
  // fetching the phone numbers from each object of ur json 
  console.log(obj1[t].phone);
  var y = obj1[t].phone

  //pushing the phone number and creating a separate array of numbers
  contacts.push(y)
}

// displaying the list of phones
console.log(contacts)


///initialising an array
var arr1 = [];
// for loop
// syntax : for(initialisation;condition;incrementation)
for (var i = 1; i <= 100; i++) {
  arr1.push(i);
}
console.log(arr1);
// fetching the first ten numbers from the array
for (var i = 0; i <= 10; i++) {
  //console.log(arr1[i])
}
function preload() {
  img = loadImage("green_trex1.png");
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("skyblue");
  // to draw a rectangle on canvas
  // inputs--x,y,width,height
  rect(10, 10, 50, 80);

  // circle
  // inputs- x,y,xradius,yradius
  ellipse(200, 100, 20, 40);

  //line
  //inputs -- x1,y1,x2,y2
  line(200, 100, 300, 100);

  //image
  //inputs -- loadedImage,x,y,width,height

  image(img, 200, 200, 60, 80);

  //displaying text on screen
  hr = hour();
  min = minute();

  text("Akshar", width - 100, 20);
  if (hr > 6 && hr <= 12) {
    ref = "AM";
  } else {
    ref = "PM";
  }

  switch (hr) {
    case 13:
      hr = 1;
      break;
    case 22:
      hr = 10;
      break;
    default:
      break;
  }
  // calling a user-defined function
  displayText();
}

// definition of displayText function
function displayText() {
  textSize(17);
  fill("yellow");
  stroke("red");
  strokeWeight(2);
  text(hr + ref, width - 100, 40);
}
