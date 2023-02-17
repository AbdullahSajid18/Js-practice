//Arrays
var students=["javed","hassan","mujtuba","Ashad maha"]

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
console.log(diffrenciatingName)