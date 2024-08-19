//วิธี Export
//1. ใส่หน้า function, ตัวแปร, array
export let sayHi = () =>{
    console.log('Hello Modules')
}
sayHi()
//

//วิธี import
//1. import + { ชื่อ function }
// import { g } from "./module1.js"
// g()

// import { name } from "./module1.js"
// name()

//2. import * as  ชื่อ ... คือ import ทั้งหมดด้วยชื่อ ... ตามด้วย .ชื่อ function
import * as say from "./module1.js"
say.g()
say.name()

//3. import จาก export default
import func from "./module2.js"
func()
