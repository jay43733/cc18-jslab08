//----------------------CLASS---------------------------//
//Lab01
// class Calculator{
//   constructor(_value = 0){
//     this.value = _value
//   }
//   add(a){
//     this.value += a
//     return this.value
//   }
//   subtract(a){
//     this.value -= a
//     return this.value
//   }
//   multiply(a){
//     this.value * a
//     return this.value
//   }
//   divide(a){
//     this.value /= a
//     return this.value
//   }
//   show(){
//     return `Value: ${this.value}`
//   }
// }

// let calculator = new Calculator()
// console.log(calculator.add(10))
// console.log(calculator.divide(2))
// console.log(calculator.subtract(2))
// console.log(calculator.show())

//Lab02
// class Sale {
//   constructor(_name,_amount,_price){
//     this.name = _name
//     this.amount = _amount
//     this.price = _price
//   }
//   calcPrice(){
//     return `${this.name}: ${this.amount*this.price} From the ${this.amount} of ${this.name} `
//   }
// }

// class Beverage extends Sale {
//   //ไม่ต้องใส่ constructor อะไรก็ได้ เพราะถึง function และ property จาก Parent Class แล้ว//

//   //หรือจะใส่ก็ได้
//   // constructor(_name,_amount,_price){
//   //   super(_name,_amount,_price)
//   // }
// }

// let beverage = new Beverage('Pepsi',3,19)
// console.log(beverage.calcPrice())


//------------------------ISARRAY-----------------------//
//Lab01
// let isArray = (input) => {
//   return Array.isArray(input)
// }
// let arr = [1,2,3]
// let obj = {
//   1: 1,
//   2: 2,
//   3: 3
// }
// console.log(isArray(obj))


//-----------OBJECT.KEY / VALUE / ENTRIES---------------//
//Lab01
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let keys = Object.keys(salaries)
// console.log(keys)

// let sum = Object.values(salaries).reduce((prev, curr) => {
//   return prev += curr
// })
// console.log(sum)


//Lab02
// let checkEmptyObj = (obj) =>{
//   if(Object.entries(obj).length != 0){
//     return false
//   } else{
//     return true
//   }
// }
// let obj = 1;
// console.log(checkEmptyObj(obj))

//------------------------REST-----------------------//
//Lab01
// let multiplyNum = (...rest) => {
//   let result =1;
//   for(let key of rest){
//     result*=key
//   }
//   return result
// }
// console.log(multiplyNum(1,2,3))


//Lab02
// let filterOutOdds =(...rest)=>{
//   let result = [];
//   for(let key of rest){
//     if(key%2==0){
//       result.push(key)
//     }
//   }
//   return result
// }
// console.log(filterOutOdds(1,2,3,4,5,6,7))


//Lab03
// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน

// let mergeObjects = (...rest) => {
//   return {...rest}
// }

// let obj = {
//   name:1,
//   name1:2,
// }
// let obj2 = {
//   name:1,
//   name1:2,
// }
// let obj3 = {
//   name:1,
//   name1:2,
// }
// let obj4 = {
//   name:1,
//   name1:2,
// }
// console.log(mergeObjects(obj,obj2,obj3,obj4))

//------------------------SPREAD-----------------------//

//Lab04
// const nums1 = [1,-2,3,4]
// const nums2 = [8,3,-8,1]
// let arr = [5,...nums1,-6,-1,...nums2]
// let sum = arr.reduce((prev, curr) => {
//   return prev += curr
// }, 0)
// console.log(arr)
// console.log(sum)

//Lab05
// จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง

// let squareArray=(array)=>{
//   let newarr = [...array]
//   newarr[3] = array[3]**2
//   return newarr
// }
// let arr = [1,2,3,4,5,6,7,8]
// console.log(squareArray(arr))


//Lab06
// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter
// let myProfile =(name, surname,...hobby) => {
//   let result = [name, surname,...hobby,hobby.length]
//   return result
// }

// console.log(myProfile('Tanakit','Suttayuttakul', 'Swimming', 'Listening to music', 'Cycling'))


//Lab07
// จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้ และ return ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง
// let doubleAndReturnArgs = (array,...rest) =>{
//   let newarr = rest.map((item)=>{
//       return item*2
//   })
//   let result = [...arr,...newarr]
//   return result
// }
// let arr = [1,2,3]
// console.log(doubleAndReturnArgs(arr,99,99,99))


//Lab09
// จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

// let cloneArray =(...array) => {
//   let newarr =[]
//   let result = newarr.concat(...array)
//   return result
// }

// let arr= [1,2,3,4,5]
// let arr1= [10,6,7,8,9]
// let arr2= [11,12,13,14,15]

// console.log(cloneArray(arr,arr1,arr2))


//Lab10
// จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key - value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

// let cloneObject =(obj)=>{
//   return obj
// }
// let obj1 = {name: 'Tanakit', surname: 'Suttayuttakul', age: 24}
// console.log(cloneObject(obj1))


//---------------------DESTRUCTURING--------------------//
//Lab11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // *
// console.log(second); // **
// console.log(third); // ***
//ANS
//* Maya
//** Marisa
//*** Chi


//Lab12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // *
// console.log(whiskers); // **
// console.log(aFewOfMyFavoriteThings); // ***
//ANS
//* Raindrops on roses เพราะ variable ถูกกำหนดไว้ตำแหน่งที่ 0
//** whiskers on kittens เพราะ variable ถูกกำหนดไว้ตำแหน่งที่ 1
//*** ['Bright copper kettles','warm woolen mittens'] เพราะ เป็น variable ถูกกำหนดไว้ด้วย rest ของตำแหน่งที่เหลือ


//Lab13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // *
//ANS
//* [10,30,20] เพราะว่ามีการสลับตำแหน่งของ number ใน array โดยอ้างอิงจากตำแหน่งที่ 2 และที่ 1 ตามลำดับ


//Lab14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // *
// console.log(yearNeptuneDiscovered); // **

//ANS
//* 8 เพราะอ้างอิงจาก object facts ที่มีการกำหนดค่าเรียบร้อยแล้ว
//** 1846 พราะอ้างอิงจาก object facts ที่มีการกำหนดค่าเรียบร้อยแล้ว


//Lab15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // *
//ANS
//* yearNeptuneDiscovered: 1846, yearMarsDiscovered:1659 เพราะว่าใส่ ...discoveryYears ไว้ตั้งแต่ตำแหน่งที่ 2 ของ object และอ้างอิงค่าจาก planetFacts ที่มีการกำหนดค่า object ไว้ 3 elements ดังนั้น ...discoveryYears จึงดึงข้อมูลที่เหลือ


//Lab16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
// getUserData({ firstName: 'Melissa' }); // **
// getUserData({}); // ***
//ANS
//* Your name is Alejandro and you like purple เพราะ Alejandro เป็นค่าที่มาจาก parameter เช่นเดียวกับ purple
//** Your name is Melissa and you like green เพราะ Melissa เป็นค่าที่มาจาก parameter แต่ไม่มีการกำหนดค่า parameter ที่ favoriteColor จึงดึงค่า default ที่ function มาแทน
//*** Your name is undefined and you like green เพราะไม่มีการกำหนดค่าที่มาจาก parameter ที่ firstName แต่มีการดึงค่า default ของ favoriteColor


//Lab17
// ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin
// let guest = 'Jane';
// let admin = 'Pete';
// [guest,admin] = [admin,guest]
// console.log(guest)
// console.log(admin)


//Lab18
// จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age โดยถ้า user มีอายุมากกว่า 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ - นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน(ใช้ destructuring)

// let checkUser = ({firstName, lastName, age}) => {
//   if(age > 18){
//     alert(`Hello ${firstName} ${lastName}`)
//   } else{
//     alert('You have no right to access.')
//   }
// }

// let obj = {
//   firstName: 'Tanakit',
//   lastName: 'Suttayuttakul',
//   age: 24,
// }

// checkUser(obj)


//Lab19
// จงเขียน Object destructuring โดยกำหนดให้
// ตัวแปร name เก็บค่า name property
// ตัวแปร age เก็บค่า years property
// ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false
//ANS
// let user = {
//   name: 'John',
//   years: 27,
// };
// let {name, years:age, isAdmin = 'false'} = user
// console.log(age)


//Lab21
// ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// [a, [b, [[[c, d], e], f]]] = [1, [2, [[[3, 4], 5], 6]]]
// console.log(e)


//Lab22
// ให้ใช้ Object destructuring โดยให้ a เท่ากับ 5 และ b เท่ากับ 10

// const obj = { prop: 5, prop2: 10 };
// let {a=5, b=10} = obj
// console.log(a)
// console.log(b)


//Lab23
// let a, b;
// { a, b } = { a: 1, b: 2 };
//ANS
//Error


//Lab24
// const [, , , a, b] = [1, 2, 3];
//ANS
//undefined


//Lab25
// ให้ใช้ destructuring โดยให้ x เท่ากับ 5 และ y เท่ากับ 100

// const q = { prop: 5, 
// prop2: [10, 100] };

// let {prop: x,
// prop2:[,y]}= q

// console.log(x,y)

//Lab26
// ให้ใช้ destructuring โดยให้ x เท่ากับ Hello และ y เท่ากับ b

// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// let {prop: x,
// prop2: {
//   prop2:{
//     nested:[ ,y, ]
//   }
// }} = q

// console.log(x,y)


//Lab27
// ให้ใช้ for … of กับ names(ให้ destructuring object ในแต่ละ iteration) ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา

// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];
//ANS
// for(let item of names){
//   let {firstName, lastName} = item
//   let fullname = firstName +' '+lastName
//   console.log(fullname)
// }

//Lab28
// ให้ใช้ for … of กับ users(ให้ destructuring object ในแต่ละ iteration) ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];
// //ANS
// for(let item of users){
//   let{user, age = 'unknown'} = item
//   console.log(user, age)
// }