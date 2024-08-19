//วิธี Export
//1. ใส่หน้า function, ตัวแปร, array
// export let sayGB = () => {
//     console.log('Goodbye')
// }

let sayGB = () => {
    console.log('Goodbye')
}

let sayMyName = () => {
    console.log('Jay Tanakit')
}


//2. ใส่ export { ชื่อ function ทั้งหมดด้านล่าง}
// export { sayMyName }

//3. ใส่ as ถ้าอยากเปลี่ยนชื่อใหม่
export { sayGB as g , sayMyName as name}

//4. export แบบ default จะสามารถ export ได้แค่ 1 สิ่งต่อ 1 module
