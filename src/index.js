// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "再宣言";

// const val3 = "const変数";
// console.log(val3);

// val3 = "上書き";
// const val3;

// const val4 = {
//   name: "名前",
//   age: 20
// };

// val4.name = "なまえ";
// val4.address = "広島";
// console.log(val4)

// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "名前";
// const age = 28;

// const message1 = "私の名前は"　+ name + "です。年齢は" + age + "です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1,num2) => num1 + num2;

// console.log(func3(10,20));

// const myProfile = {
//   name: "田中",
//   age: 28
// };

// const { name, age } = myProfile;
// const message1 = `名前は${name}です。年齢は${age}です`;
// console.log(message1);

// const sayHello = (name="山田")=> console.log(`こんにちは　${name}さん`);
// sayHello();

// newFunction();

// const arr2 = [1,2,3,4,5,6];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// arr8.push(50);
// console.log(arr4);

// function newFunction() {
//   const arr1 = [1, 2];
//   console.log(arr1);
//   console.log(...arr1);

//   const sumFunc = (num1, num2) => console.log(num1 + num2);
//   sumFunc(22, 2);
//   sumFunc(...arr1);
// }

const nameArr = ["田中", "山田", "佐藤"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });

// nameArr.map((name,i)=>console.log(`${i+1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num%2 === 0;
// })

// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "佐藤") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
