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

(function (){

console.log(items.length);

var prices=items.map(function(item){
  return item.price;
});
  console.log(prices);

var Q2=[];

var greaterLessThan =items.forEach(function(item){
  if (item.price >14 && item.price < 18) {
    Q2.push(item.price);
  };
}) ;

var coorsBanquet = Q2 [0];
var threeBroomsticks= Q2[1];
var handPainted = Q2 [2];

//Make it show up on the page Q2

var answer2=document.querySelector('#Answer2');
console.dir(answer2);
var textNode=document.createTextNode(coorsBanquet);

answer2.appendChild(textNode);

var answer2Second=document.querySelector('#Answer2Second');
console.dir(answer2Second);
var textNode=document.createTextNode(threeBroomsticks);

answer2Second.appendChild(textNode1);

var answer2Third=document.querySelector('#Answer2Third');
console.dir(answer2Third);
var textNode=document.createTextNode(handPainted);

answer2Thrid.appendChild(textNode2);





}());


// var greaterThan= prices.filter(function(prices){
//   return prices.greaterThan (18 || 14);

// console.log(greaterThan);

// var lessThan=prices.filter(function(prices){
//   return prices <=18;
// });
//   console.log(lessThan);


// })();
  



//grades.filter(function(grade){
          //return grade >=70;
          // });


//prices between $14 and $18

// console.log(prices);


// var between= prices.map(function(prices){
//   return prices.>=14;
// }) 
//   console.log(between);

// students.map(function(students){
// return students.name;
// });

// (function (){
  // console.log(items.title);


//  var titles=items.map(function(item){
//   return item.title;
// });
//   // console.log(titles);
// var prices=items.map(function(item){
//   return item.price;
//   });

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

(function (){



var currency_code=items.map(function(item){
  return item.currency_code;
});
  console.log(currency_code);
//pop out only GBP
var GBP=currency_code.filter(function(currency_code){
return currency_code=GBP;
});



})();
// USE ABOVE

//Q#4
//Display a list of all items who are made of wood.
//SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
//Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
//Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
//Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
//Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

(function (){

var tree=items.map(function(item){
  return item.materials;
});
  console.log(tree);
var materials=items.map(function(items){
  return items.materials;
});
  console.log(materials);

var isItWood=[];
var array=[materials];
var element='wood';
var idx=array.indexOf(element);
while (idx != -1){
  isItWood.push(idx);
  idx=array.indexOf(element, idx +1);

}
  console.log(isItWood.length);
}());


//   var wooden = materials.filter(function (el) {
//     return (el.materials === "wooden");
// });
//   console.log(wooden);


//   var wood = materials.filter(function (el) {
//     return (el.materials === "wood");
// });
//   console.log(wood);

// var woodArray=[];
//   woodArray.push(wood, wooden);
  // Array.prototype.push.apply(wood, wooden);
  // console.log(wood);
// })();


// USE BELOW
// var materials=items.map(function(items){
//   return items.materials;
// });
//   console.log(materials);
// use wood and wooden

// var = wood;
// var = wooden;

// function checkIfWood(wood, )
// var product=materials.filter('wood' || 'wooden');


// (function(el){
//   return el.wood
// });



// console.log (product);
// var array=[];
// array.push(product);


// var product= 'wood';
// function include (materials, product){
//   for(var i=0; i<materials.length; i++){
//     if (materials[i] == product) return true;
//   }
// };





// var wood=materials.map(function(materials){
//   return materials.wood;  
// });
  // console.log(wood);


// function searchwood(wood){
//   return value='wood';
// }
// var filtered=[materials].filter(searchwood);
// console.log(filtered);

// var array=[materials];
// array.indexOf('wood');  
// console.log(array);
// var wood= array.filter(function(array){
//   return array.wood;
// });
// console.log(wood);

 // var element='wood';
 // var idx=materials.indexOf(element);
 // console.log(idx); 


// var element='wood';
// var wood=materials.indexOf(element);
// USE ABOVE


// console.log(wood);
// var question4= 
// [items."materials"];
// console.log(materials);
// var term="wood";
// var wood =items.materials.indexOf('wood');
// console.log(wood);

// students.filter(function(student){
// return student.name.length <4;
// });


// var materials= items.filter(function(objects){
//   return items.materials;
// });
//   console.log(materials);
//  var wood=materials.filter(function(materials){
//   return materials.wood;
//  });
//  console.log(wood);

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

// USE BELOW
(function (){



var whoMade=items.map(function(item){
  return item.who_made;
});
  console.log(whoMade);
var iDid=whoMade.filter(function(who_made){
    return who_made='i_did';
});
  console.log(iDid.length);
// var indices=[];
// var array=[who_made];
// var element="i_did";
// var idx=array.indexOf(element);
// while (idx !=-1){
//   indices.push(idx);
//   idx=array.indexOf(element, idx +1);

// }  
// console.log(indices.length);
  

})();

// var maker =[];
// var array=[who_made];
// var element='i_did';

// var creator=array.indexOf(element);
// while (creator != -1){
//   creator=array.indexOf(element, creator +1);
//   return maker.element;
// } ;
// console.log(maker); 
// USE ABOVE




//














































