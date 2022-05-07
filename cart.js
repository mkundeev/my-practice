// console.log('Hello world');
// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
        
//         for (const item of this.items) {
            
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//             }
//         }
//         const newProduct = {
//             ...product,
//             quantity: 1,
//         }
//         this.items.push(newProduct);
//     },
//     remove(productName) {
        
//         for (let i = 0; i < this.items.length; i += 1) {
            
//             const item = this.items[i];
//             if (item.name === productName) {
//                 this.items.splice(i, 1);
//             }
//         }
//     },
//     clear() {
//         this.items = [];
        
//     },
//     countTotalPrice() {
//         let total = 0;
        
//         for (const { price, quantity} of this.items) {
            
//                  total += price * quantity;
            
//         }
//         return total;
//      },
//     increaseQuantity(productName) {
        
//         for (let i = 0; i < this.items.length; i += 1) {
            
//             const item = this.items[i];
//             if (item.name === productName) {
//                 item.quantity += 1;
//             }
//         }

//     },
//     decreaseQuantity(productName) {

//            for (let i = 0; i < this.items.length; i += 1) {
            
//             const item = this.items[i];
//             if (item.name === productName) {
//                 item.quantity -= 1;
//             }
//         }
//     },
// }


// cart.add({ name: 'lemon', price: 50 });
// cart.add({ name: 'lemon', price: 50 });
// cart.add({ name: 'lemon', price: 50 });
// cart.add({ name: 'apple', price: 60 });
// cart.add({ name: 'plum', price: 70 });
// cart.add({ name: 'plum', price: 70 });
// cart.add({ name: 'melon', price: 50 });
// cart.add({ name: 'melon', price: 50 });
// console.table(cart.getItems());

// cart.remove('plum');
// console.table(cart.getItems());

// // cart.remove('apple');
// // cart.clear();


// // cart.increaseQuantity('lemon');
// // console.table(cart.getItems());
// console.log(cart.countTotalPrice());

// cart.decreaseQuantity("lemon");
// console.table(cart.getItems());

// // const products = [
// //   { name: "Radar", price: 1300, quantity: 4 },
// //   { name: "Scanner", price: 2700, quantity: 3 },
// //   { name: "Droid", price: 400, quantity: 7 },
// //   { name: "Grip", price: 1200, quantity: 9 },
// // ];

// // function getAllPropValues(propName) {
// //   // Change code below this line
// //   let array = [];
// //   for (const product of products){
// //     array.push(product[propName]);
// //   }
// //   const keys = Object.keys(products[0]);
// //     const hasInclid = keys.includes(propName)
// //     if (!hasInclid){
// //     array = []; }
// //    return array;


// //   // Change code above this line
// // }
// // function makeTask(data) {
  
// //   const completed = false;
// //   const category = "General";
// //   const priority = "Normal";
// //   // Change code below this line
// // return {category, priority, ...data };
// //   // Change code above this line
// // }
// // console.log(makeTask({}));
// // const atTheOldToad = {
// //   potions: [
// //     { name: "Speed potion", price: 460 },
// //     { name: "Dragon breath", price: 780 },
// //     { name: "Stone skin", price: 520 },
// //   ],
// //   // Change code below this line
// //   getPotions() {
// //     return this.potions;
// //   },
// //   addPotion(newPotion) {
// //     for (const potion of this.potions){
// //       if (potion.name === newPotion.name) {
// //       return `Error! Potion ${newPotion} is already in your inventory!`;
// //     }
// //     }
// //     this.potions.push(newPotion);
// //   },
// //   removePotion(potionName) {

// //     for (let i = 0; i < this.potions.length; i += 1){
      
// //       if (this.potions[i].name === potionName.name){
// //           this.potions.splice(i, 1);
// //           return this.potions;
// //       }
      
// //     }
// //     return `Potion ${potionName} is not in inventory!`;
// //   },
// //   updatePotionName(oldName, newName) {
    

// //     for (let i = 0; i < this.potions.length; i += 1){
      
// //       if (this.potions[i].name === oldName){
// //           this.potions[i].name = newName;
// //           return this.potions;
// //       }
      
// //       }
// //       return `Potion ${oldName} is not in inventory!`;
// //   },
// //   // Change code above this line
// // };
// // console.table(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));

// // const numbers = [5, 10, 15, 20, 25];

// // // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// // }

// // // Перебирающий forEach
// // numbers.forEach(function (number, index) {
// //   console.log(`Индекс ${index}, значение ${number}`);
// // });
// // const numbers = [1, 2, 3, 4, 5, 6];
// // const filteredNumbers = numbers.filter(value => value > 2);
// // console.log(filteredNumbers);

// // const tweets = [
// //   { id: "000", likes: 5, tags: ["js", "nodejs"] },
// //   { id: "001", likes: 2, tags: ["html", "css"] },
// //   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
// //   { id: "003", likes: 8, tags: ["css", "react"] },
// //   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// // ];
// // const tweets = {js:0, html:1, css:1, html:1, }

// // console.table(tweets);
// // console.log(tweets["js"]);
// // tweets["js"] = 2;
// // console.table(tweets);


// // const getTags = tweets =>
// //   tweets.reduce((allTags, tweet) => {
// //     allTags.push(...tweet.tags);

// //     return allTags;
// //   }, []);

// // const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// // const getTagStats = (acc, tag) => {
// //   if (!acc.hasOwnProperty(tag)) {
// //     acc[tag] = 0;
      
// //   }

// //   acc[tag] += 1;
  
// //   return acc;
// // };

// // // Начальное значение аккумулятора это пустой объект {}
// // const countTags = tags => tags.reduce(getTagStats, {});

// // const tagCount = countTags(tags);
// // console.log(tagCount);
// // function changeEven(numbers, value) {
// //   // Change code below this line
// //   const pureChangeEven = [];

// //     numbers.forEach(number => {
// //         if (number % 2 === 0) {
      
// //             pureChangeEven.push(number + value);
     
// //         } else {
// //             pureChangeEven.push(number);
// //             console.log(pureChangeEven);
// //         }
    
// //     })
// //   return pureChangeEven;
// //   // Change code above this line
// // };
// // console.log(changeEven([1, 2, 3, 4, 5], 10));
// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male"
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female"
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male"
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female"
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male"
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male"
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female"
// //   }
// // ]
// // const getTotalBalanceByGender = (users, gender) => {
// //    return [...users].filter(user => user.gender === gender).map(user => user.balance).reduce((acc, balance) => acc + balance)
// // };
// // console.log(getTotalBalanceByGender(users, "male"))
// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Вызываем в глобальном контексте
// showThis(); // this in showThis: Window

// const user = {
//   username: "Mango",
// };

// // Записываем ссылку на функцию в свойство объекта
// // Обратите внимание, что это не вызов - нет ()
// user.showContext = showThis;

// // Вызываем функцию в контексте объекта
// // this будет указывать на текущий объект, в контексте
// // которого осуществляется вызов, а не на глобальный объект.
// user.showContext();

class Storage  {

    constructor(items){
    this.items = items
    }   
    getItems(){
        return this.items;
    }
    addItem(newItem){
        this.items.push(newItem);
    }
    removeItem(itemToRemove){
      this.items = this.items.filter(item => item === itemToRemove);
    }
}


// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



function removeItem (array, itemToRemove){
     return   [...array].filter(item => item !== itemToRemove);
}
console.log(removeItem( ["Nanitoids", "Prolonger", "Antigravitator"], "Prolonger"));