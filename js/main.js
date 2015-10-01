//Q#1
//Show me how to calculate the average price of all items.
//The average price is $23.63


(function(){

console.log(items.length);

// items.forEach(function(item){
//   console.log(item, price);
// });

//create an array of just the prices
var prices=items.map(function(item){
  return item.price;
});
  console.log(prices);

//add all prices together
var sum =prices.reduce(function(prev, next){
  return prev + next;
});
  console.log(sum);

//divide by the total number of items
var avg =sum/items.length;
console.log(avg);

//Convert it to 2 decimal places
var converted =avg.toFixed(2);
console.log(converted);

//Make it a string
var str ='The average price is $' + converted + '.';
console.log(str);

//Make it show up on the page
var answer1=document.querySelector('#Answer1');
console.dir(answer1);
var textNode=document.createTextNode(str);

answer1.appendChild(textNode);


}());


//Q#2
//Show me how to get an array of items that cost between $14.00 and $18.00 USD
//1970s Coors Banquet Glass Beer Pitcher
//The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug
//Hand Painted Colorful Feather Glass


// (function (){
  // console.log(items.title);


 var titles=items.map(function(item){
  return item.title;
});
  // console.log(titles);
var prices=items.map(function(item){
  return item.price;
  });

// var array=prices.filter(function(items){
//   return items <18;
// });
//   console.log(array);
//  var arrayTwo=prices.filter(function(items){
//   return items>14;
// });
//   console.log(arrayTwo);

  
// });

//step1: filter b/w $14 and $18

// var prices=items.map(function(item){
//   return item.price;
// });
//   console.log(prices);

// var array=prices.filter(function(items){
//   return items.price + items.title >=14
// });
//   console.log(title);
// })();




//Q#3
//Which item has a "GBP" currency code? Display it's name and price.
//1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

// (function (){

// })();




//Q#4
//Display a list of all items who are made of wood.
//SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
//Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
//Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
//Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
//Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

// (function (){

// })();




//Q#5
//Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
//Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
//wall mount bottle opener
//wedding
//man cave
//christmas gift
//guy gift
//fathers day
//home bar
//beer
//bar
// The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
// glass
// sandblast cabinet
// vinyl
// beer glass
// pint glass
// etched pint glass
// etched glass
// etched beer glass
// 16 oz pint
// beer gift
// etched harry potter glass
// the three broomsticks glass
// personalized harry potter glass

// (function (){

// })();





//Q#6
//How many items were made by their sellers?
//18 were made by their sellers

// (function (){

// })();








