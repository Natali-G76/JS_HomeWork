// ДЗ!
// Есть какие-то товары. У каждого из них есть название и вес (weight). 
//И для того, чтобы товары отправить, мы должны их упаковать в коробки. 
//Коробки есть стандартных размеров: small, medium, large. В эти коробки
// мы пакуем товары по весу. В коробку small мы можем паковать товар до 3-х кг. 
//В коробку medium товары до 7 кг. В коробки large товары до 20кг.. 
//Задача такая. Спрашивать у пользователя, какие товары он хочет купить 
//(у товара есть название, как писалось выше). Спрашивать до тех пор, 
//пока он не нажмет отмена. И в итоге выдавать количество и размеры коробок. 
//К примеру, я выбираю 3 товара общим весом: 41кг. 
//Нам понадобятся коробки large (2 штуки) и одна medium.
// Товары придумывает сами. Коробки я дал. Итоговый вывод будет примерно таким: 
//x2 - medium. x1 - small. ПРИМЕРНО. Можете придумать интереснее.

// как вы поняли, ДА, ТОВАР МОЖНО ДРОБИТЬ
// представьте что это песок... (edited)

//********************************** */

//List producks
var produkts = [{
          name: 'candy',
          weigth: 50
        },
      {
          name: 'cookie',
          weigth: 40
      },
      {
          name: 'marmalade',
          weigth: 30
      },
      {
        name: 'bubble gum',
        weigth: 14
    }, 
    {
      name: 'marshmallow',
        weigth: 18,
    }
  ];

//Choose products
var weigth=0;
goods: while (true){
  for (var i=0; i< produkts.length; i++){
  var product = confirm ('Would you like to buy ' + produkts[i].name + ' ?');
  
  if (product === false) {
      alert('Order completed');
      break ;
    }
     weigth=weigth+produkts[i].weigth;  
  }
   
  break goods;
}
console.log('weigth = ' + weigth)

//Pack up on boxes. Version 1
// var largeBox = 0;
// var mediumBox = 0;
// var smallBox = 0;
// var exess20 = 0;
// var exess7 = 0;

// if (weigth%20 === 0){
//  largeBox = weigth/20;
// }else{
//   largeBox = Math.floor(weigth/20);
//   var exess20 = weigth%20;
//   console.log(exess20);
// } 

// if (exess20%7===0){
//   mediumBox = exess20/7;
// }else{
//   mediumBox = Math.floor(exess20/7);
//   var exess7 = exess20%7;
//   console.log(exess7);
//   }
 
// if(exess7%3 === 0){
//   smallBox = exess7/3;
// }else{
//   smallBox = Math.floor(exess7/3)+1;
// }
  
//Pack up on boxes. Improved version 2

var largeBox = 0;
var mediumBox = 0;
var smallBox = 0;


while (weigth >= 20) {
   largeBox++;
   weigth -=20;
}

while (weigth >= 7) {
  mediumBox++;
  weigth -=7;
}
while (weigth >= 3) {
  smallBox++;
  weigth -=3;
  if (weigth < 3) {
    smallBox +=1
  }
}

// Console. Version 1  

// if (largeBox === 0 && mediumBox === 0 && smallBox === 0){
//   console.log('Boxies are empty');
// } else if  (largeBox > 0 && mediumBox === 0 && smallBox === 0){
//   console.log("Large box(-es) = " + largeBox);
// } else if  (largeBox === 0 && mediumBox > 0 && smallBox === 0){
//   console.log("Medium box(-es) = " + mediumBox);
// } else if  (largeBox === 0 && mediumBox === 0 && smallBox > 0){
//   console.log("Small box(-es) = " + smallBox);

// } else if  (largeBox > 0 && mediumBox > 0 && smallBox === 0){
//   console.log("Large box(-es) = " + largeBox + " medium box(-es) = " + mediumBox);
// } else if  (largeBox > 0 && mediumBox === 0 && smallBox > 0){
//   console.log("Large box(-es) = " + largeBox + " small box(-es) = " + smallBox);


// } else if  (largeBox === 0 && mediumBox > 0 && smallBox > 0){
//   console.log("Medium box(-es) = " + mediumBox + " small box(-es) = " + smallBox);

// } else if  (largeBox > 0 && mediumBox > 0 && smallBox > 0){
//   console.log("Small box(-es) = " + smallBox + " medium box(-es) = " + mediumBox + "small box(-es) = " + smallBox);
// }


// Console. Improved version 2
var arrayBox_Name = [{
  name: 'LargeBox(-es) = ',
  qual: largeBox
},
{
  name: 'MediumBox(-es) = ',
  qual: mediumBox,
},
{
  name: 'SmallBox(-es) = ',
  qual: smallBox
}];

//var arrayBox = [largeBox, mediumBox, smallBox];
for (var i = 0; i < arrayBox_Name.length; i++) {
  if (arrayBox_Name[i].qual > 0){
    console.log(arrayBox_Name[i].name + arrayBox_Name[i].qual);
}
}