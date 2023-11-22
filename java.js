document.getElementById('myHeader').innerHTML = "AREA OF A TRIANGLE CALCULATOR";
document.getElementById('myInfo').innerHTML = "I am the boss of programming";
document.getElementById('area').innerHTML = "Finding area of a triangle";

//Function to find area of a traingle
function findAreaOfTriangle(){
  let height = document.getElementById('height').value;
  let base = document.getElementById('base').value;
 
  let areaOfTriangle = 1/2*(base * height);
  document.getElementById('result').innerHTML = areaOfTriangle;
}