
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    // Here is the link of the created database.
    databaseURL: "https://user-database-first-task-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app) 
const userDataInDB = ref(database, "UserData")

const UserName = document.getElementById("Name")
const UserAddress = document.getElementById("address")
const UserEmail = document.getElementById("Email")
const UserPhone = document.getElementById("phoneNo")
const LeftPage = document.querySelector(".pageLeft")
const RightPage = document.querySelector(".pageRight")
const Message = document.querySelector(".SubmitMsg")

// Creating an eventlistner on the Submit button which first validate the form and the shows the message after completion of storing data in database.
document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the normal way

    // Get all checkbox inputs with the name "carOption"
    const checkboxes = document.querySelectorAll('input[name="carOption"]:checked');
    
    // Create an array to store the selected values
    let selectedValues = [];
    
    // Loop through the selected checkboxes and add their values to the array
    checkboxes.forEach(function(checkbox) {
        selectedValues.push(checkbox.value);
    });
    
    let Name = UserName.value
     let Address = UserAddress.value
     let Email = UserEmail.value
     let Phone = UserPhone.value
     let UserDataForm = {
         "name": Name,
         "address": Address,
         "email": Email,
         "phone": Phone,
          "CarOption": selectedValues
     }
     // Now push the entered data to the Firebase Data Base.
     push(userDataInDB, UserDataForm)
     // Now display the "Form Submitted Successfully" message.
     LeftPage.style.display = "none"
     RightPage.style.display = "none"
     Message.style.display = "block"
     

});

