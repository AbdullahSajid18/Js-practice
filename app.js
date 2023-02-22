const theDetailsFromTheDatabase = {
    firstName: "Syed",
    lastName: "Hamza",
    mobileNumber: "03190374204",
    password: 626985,
    dateOfBirth: 06,
    monthOfBirth: 02,
    yearOfBirth: 2004 ,
    gender: "male"
}

const mobileNumberOfUser = prompt("Type Your Mobile Number")
const passwordOfUser = prompt("Type Your password")

const detailsOfUser  = {
    mobileNumber : mobileNumberOfUser,
    password: passwordOfUser
}

if(theDetailsFromTheDatabase.mobileNumber==detailsOfUser.mobileNumber)  {
    if (theDetailsFromTheDatabase.password == detailsOfUser.password) {
        console.log("Congratulations! You have Successfully Login. Taking You To Home Page")
    }else {
        console.log("Sorry! The password is incorrect.")
    }
}else {
    console.log("Oops! No User Found")
}


