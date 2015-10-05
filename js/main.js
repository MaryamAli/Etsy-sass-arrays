//Q#1
//Show me how to calculate the average price of all items.
//The average price is $23.63


// (function(){

// console.log(items.length);

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

// }());


//Q#2
//Show me how to get an array of items that cost between $14.00 and $18.00 USD
//1970s Coors Banquet Glass Beer Pitcher
//The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug
//Hand Painted Colorful Feather Glass

// (function (){

// console.log(items.length);



var Q2=[];

var greaterLessThan =items.forEach(function(item){
  if (item.price >14 && item.price < 18) {
    Q2.push(item.title);
  };
}) ;

var firstTitle = Q2 [0];
var secondTitle= Q2[1];
var thirdTitle = Q2 [2];

//Make it show up on the page Q2


//first item

var answer2=document.querySelector('#Answer2');
console.dir(answer2);
var textNode=document.createTextNode(firstTitle);

answer2.appendChild(textNode);

//second item

var answer2b=document.querySelector('#Answer2b');
console.dir(answer2b);
var textNode1=document.createTextNode(secondTitle);

answer2b.appendChild(textNode1);

//third answer

var answer2c=document.querySelector('#Answer2c');
console.dir(answer2c);
var textNode2=document.createTextNode(thirdTitle);

answer2c.appendChild(textNode2);


// }());

//Q#3
//Which item has a "GBP" currency code? Display it's name and price.
//1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

// (function(){

// console.log(items.length);


// var currency_code=items.map(function(item){
//   return item.currency_code;

//   console.log(currency_code);
// });
//pop out only GBP
// (function(){

var Q3=[];

var GBP=items.forEach(function(G){
  if (G.currency_code === 'GBP'){
    Q3.push(G.title + ' costs ' + '£' + G.price + '.');
  };
});

// place on page

var answer3=document.querySelector('#Answer3');
console.dir(answer3);
var textNode=document.createTextNode(Q3);

answer3.appendChild(textNode);

// }());
//Q#4
//Display a list of all items who are made of wood.
//SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
//Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
//Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
//Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
//Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.


//USE BELOW

// filter out 'wood'
// (function(){

var Q4=[];

var filterWood=items.filter(function(w){
  var tree=w.materials;
  if (tree.indexOf('wood')>=0){
    return Q4.push(w.title + ' is made of wood.');
  };
  return Q4;
});

// console.log (Q4);

var tree1= Q4[0];
var tree2= Q4[1];
var tree3= Q4[2];
var tree4= Q4[3];
var tree5= Q4[4];

//make it show on the page
var answer4=document.querySelector('#Answer4');
console.dir(answer4);
var textNode=document.createTextNode(tree1);

answer4.appendChild(textNode);

//tree2
var answer4a=document.querySelector('#Answer4a');
console.dir(answer4a);
var textNode=document.createTextNode(tree2);

answer4a.appendChild(textNode);


//tree3
var answer4b=document.querySelector('#Answer4b');
console.dir(answer4b);
var textNode=document.createTextNode(tree3);

answer4b.appendChild(textNode);


//tree4
var answer4c=document.querySelector('#Answer4c');
console.dir(answer4c);
var textNode=document.createTextNode(tree4);

answer4c.appendChild(textNode);


//tree5
var answer4d=document.querySelector('#Answer4d');
console.dir(answer4d);
var textNode=document.createTextNode(tree5);

answer4d.appendChild(textNode);

// }());
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

//below if from class on Oct 5
// (function(){



var eightOrMore=items.filter(function(item){
  return item.materials.length>=8;

});

var answer5=document.querySelector('#Answer5');

eightOrMore.forEach(function(item){
  // var textNode=document.createTextNode(item.title);
  var para=document.createElement('p');
  para.textContent=item.title +'has ' + item.materials.length + ' materials';
  answer5.appendChild(para);
  // answer5.appendChild(lineBreak);

  item.materials.forEach(function(itemMaterial){
    var para =document.createElement('p');
    para.textContent =itemMaterial;
    answer5.appendChild(para);
    // var textNode=document.createTextNode(itemMaterials)
  });
});



// }());


// var Q5 = [];
// var eightMat = items.filter(function(eight){
//   var strain=eight.materials;
//   if (strain.length >=8) {
//     return Q5.push(eight);
//     // return Q5.push(eight.title + 'have eight or more materials');

 
//   };
//   return Q5;
// });
// // console.log (Q5);

// // show on page

// Q5.forEach(function(m){
//   var answer5=document.querySelector('#Answer5');
// console.dir(answer5);
// var textNode=document.createTextNode(m.title + 'has' +m.materials.length + 'materials:');
// answer5.appendChild(textNode);
// var linebreak=document.createElement('br');
// answer5.appendChild(textNode);
// answer5.appendChild(linebreak);
// answer5.appendChild(linebreak);

// m.materials.forEach(function(mat){
//   var answer5a= document.querySelector('#Answer5');
//   var textNode =document.createTextNode(mat);
  
//   answer5.appendChild(textNode);
//   answer5.appendChild(linebreak);
// })
// });

// console.log (Q5);

//Q#6
//How many items were made by their sellers?
//18 were made by their sellers
// (function(){


var bySeller =[];

var whoMade=items.filter(function(creator){
  var maker=creator.who_made;
  if (maker.indexOf('i_did') >=0);{
    return bySeller.push(creator.who_made); 
  };
  
});

var answer6=document.querySelector('#Answer6');
console.dir(answer6);

var statement6= bySeller.length + ' were made by their sellers.';
var textNode=document.createTextNode(statement6);
answer6.appendChild(textNode);

// }());

// var prices=items.map(function(item){
//   return item.price;
// });
//   console.log(prices);

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










// })();

// USE ABOVE

//Q#4
//Display a list of all items who are made of wood.
//SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
//Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
//Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
//Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
//Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.


//USE BELOW

// filter out 'wood'



// (function (){

// var tree=items.map(function(item){
//   return item.materials;
// });
//   console.log(tree);
// var materials=items.map(function(items){
//   return items.materials;
// });
//   console.log(materials);

// var isItWood=[];
// var array=[materials];
// var element='wood';
// var idx=array.indexOf(element);
// while (idx != -1){
//   isItWood.push(idx);
//   idx=array.indexOf(element, idx +1);

// }
//   console.log(isItWood.length);


//   USE ABOVE
// }());


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


// USE BELOW
// (function (){


// var whoMade=items.map(function(item){
//   return item.who_made;
// });
//   console.log(whoMade);
// var iDid=whoMade.filter(function(who_made){
//     return who_made='i_did';
// });
  // console.log(iDid.length);

  ///USE ABOVE


// var indices=[];
// var array=[who_made];
// var element="i_did";
// var idx=array.indexOf(element);
// while (idx !=-1){
//   indices.push(idx);
//   idx=array.indexOf(element, idx +1);

// }  
// console.log(indices.length);
  

// })();

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














































