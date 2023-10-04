const btnEl = document.getElementById("btn");
const dateEl = document.getElementById("date");
const errorEl = document.getElementById("error");
const ageEl = document.getElementById("age");


function calculate () {
    const userBirthdayValue = dateEl.value;
    if (userBirthdayValue === "") {
        errorEl.innerText = "PLease Enter Your Date of Birth";
    }else {
        const age = getAge(userBirthdayValue);
        errorEl.innerText = "";
        ageEl.innerText = age;
    }
}

function getAge(userBirthdayValue) {
    const currentDate = new Date() 
    const userBirthday = new Date(userBirthdayValue);
   let age = currentDate.getFullYear() - userBirthday.getFullYear();
   return age;
    
}



btnEl.addEventListener("click", calculate)