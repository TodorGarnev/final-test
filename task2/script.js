"use strict"

// задача 1 (4т.)
// Сортирайте следния списък от числа във възходящ ред:
var arr = [2, 5, 8, 4, 1, 12];

const sortList = list => list.sort((a, b) => a - b)
console.log(sortList(arr))

//...

// задача 2 (4т.)
// Напишете функция, която да изважда всички думи, с дължина над 4 символа от следния текст:
var text = "The quick brown fox jumps over the lazy dog";

const wordLength = str => str.split(" ").filter(el => el.length > 4)
console.log(wordLength(text))

// ...

// задача 3 (5т.)
// Напишете код, който на всяка секунда закача към `#container` елемента следния html елемент: `<p>repetition is fun</p>`

const attach = () => {
    setInterval(() => {
        const par = document.createElement("P");
        const textNode = document.createTextNode("repetition is fun");
        par.appendChild(textNode);
        document.getElementById("container").appendChild(par);
    }, 1000)
}

attach()

// ...

// задача 4 (6т.)
// Направете така, че 2 секунди след зареждането на дадена страница, всички картинки в нея да се завъртят по вертикалната си ос (по Y)





// ...

// задача 5 (6т.)
// Напишете функция, която да сортира следния списък от обекти по полето `price`:
var items = [
    {
        id: 1,
        title: "Item 1",
        price: 4.3
  },
    {
        id: 2,
        title: "Item 2",
        price: 2.0
  },
    {
        id: 3,
        title: "Item 3",
        price: 6.5
  },
    {
        id: 4,
        title: "Item 4",
        price: 1.5
  }
];

// ...

const sortByPrice = list => list.sort((a, b) => a.price - b.price)
console.log(sortByPrice(items))
