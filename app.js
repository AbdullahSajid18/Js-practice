//Arrays
/**var students=["javed","hassan","mujtuba","Ashad maha"]

//For Adding in Start
var checkingTheChange=students.unshift("Khurram")
console.log(students)
console.log(checkingTheChange)

//Removing from start
var checkingChange=students.shift()
console.log(students)
console.log(checkingChange)

//Adding in End
var checkingPush=students.push("tayyab")
console.log(students)
console.log(checkingPush)

//Removing From End

var checkingTheResult=students.pop()
console.log(students)
console.log(checkingTheResult)

var splice=students.splice(0,2,"Reyan")
console.log(students)
console.log(splice)

var diffrenciatingName= students.slice(0,1)
console.log(students)
console.log(diffrenciatingName)**/

// WINDUP ARRAY CHAP

var students = ["hassan", "moiz","rafay", "tayyab", "muneeb", "ameem"]

var askWhichStudent = prompt("Which Student u want to know is present or not")
if (students.indexOf(askWhichStudent) >=0){
    console.log(`yes ${askWhichStudent} is available at seat.no ${students.indexOf(askWhichStudent)}`)
    document.write(students[students.indexOf(askWhichStudent)])
}else {
    console.log (`No! ${askWhichStudent} is not available in class`)

}

//includes

var bakery = ["cakes", "pastery", "egg", "bread", "rusk", "cake rusk"]

var askWhichProduct = prompt("Which poduct u want to buy")

if(bakery.includes(askWhichProduct)){
    console.log(`Yes! ${askWhichProduct} is available`)
} else {
    console.log(`No! ${askWhichProduct} is not available`)
}