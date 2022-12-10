
// It creates a space in the memory under the name x
// x is a varuable of data type numeric
var x = 3

//Incrementing the variable by 1 in three different ways
x= x+ 1
x++
x+=1

console.log(x)

// string concatenation 
// + is the operator to combine two strings or two numbers

var name = "Akshar"
var surName = "Patel"

var fullName = name + surName
console.log(fullName)

var flag = true
console.log(!flag)


///initialising an array
var arr1 = []
// for loop 
// syntax : for(initialisation;condition;incrementation)
for(var i = 1;i<=100;i++){
  arr1.push(i)
}
// fetching the first ten numbers from the array
for(var i = 0;i<=10;i++){
  console.log(arr1[i])
}
function preload(){
  img = loadImage("green_trex1.png")
}
function setup(){
  createCanvas(400,400)
}

function draw(){
  background("skyblue")
  // to draw a rectangle on canvas
  // inputs--x,y,width,height
  rect (10,10,50,80)

  // circle 
  // inputs- x,y,xradius,yradius
  ellipse(200,100,20,40)

  //line
  //inputs -- x1,y1,x2,y2
  line (200,100,300,100)

  //image
  //image -- loadedImage,x,y,width,height

  image (img,200,200,60,80)
}

