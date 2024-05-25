function calculateAge() {
  document.getElementById("day-error").textContent = "";
  document.getElementById("month-error").textContent = "";
  document.getElementById("year-error").textContent = "";

  let birthDay = parseInt(document.getElementById("input-day").value);
  let birthMonth = parseInt(document.getElementById("input-month").value);
  let birthYear = parseInt(document.getElementById("input-year").value);
  //   console.log(birthDay + " " + birthMonth + " " + birthYear);
  let isValid = validateInputs(birthDay, birthMonth, birthYear);
  // console.log("ss", isValid);
  if (!isValid) {
    return;
  }
  //current date
  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  let ageYears = currentYear - birthYear; //2024 - 2000
  // console.log(ageYears + "year");
  let ageMonths = currentMonth - birthMonth; // 5 - 7 = -2
  // console.log(ageMonths + "months");
  let ageDays = currentDay - birthDay; //18-26 = -8
  // console.log(ageDays + "days");

  if (ageDays < 0) {
    // -8 < 0
    ageMonths--;
    let prevMonth = currentMonth - 1;
    if (prevMonth < 1) {
      prevMonth = 12;
      currentYear -= 1;
    }
    let daysInPrevMonth = new Date(currentYear, prevMonth, 0).getDate();
    ageDays += daysInPrevMonth; //2024 , 4  -8 + 31
  }
  if (ageMonths < 0) {
    // -2
    ageYears--; //23
    ageMonths += 12; // -2+12 = 10
  }

  document.getElementById("years").textContent = ageYears;
  document.getElementById("months").textContent = ageMonths;
  document.getElementById("days").textContent = ageDays;
}

function validateInputs(day, month, year) {
  let isValid = true;
  document.getElementById("day-error").textContent = "";
  document.getElementById("month-error").textContent = "";
  document.getElementById("year-error").textContent = "";

  if (!day) {
    document.getElementById("day-error").textContent = "Day is required";
    document.getElementById("day-error").style.color = "red";
    document.getElementById("day-head").style.color = "red";
    isValid = false;
  }
  if (!month) {
    document.getElementById("month-error").textContent = "Month is required";
    document.getElementById("month-error").style.color = "red";
    document.getElementById("month-head").style.color = "red";
    isValid = false;
  }
  if (!year) {
    document.getElementById("year-error").textContent = "Year is required";
    document.getElementById("year-error").style.color = "red";
    document.getElementById("year-head").style.color = "red";
    isValid = false;
  }
  // console.log("ee", isValid);
  if (day < 1 || day > 31) {
    document.getElementById("day-error").textContent = "Day is invalid";
    document.getElementById("day-error").style.color = "red";
    document.getElementById("day-head").style.color = "red";
    isValid = false;
  }
  if (month < 1 || month > 12) {
    document.getElementById("month-error").textContent = "Month is invalid";
    document.getElementById("month-error").style.color = "red";
    document.getElementById("month-head").style.color = "red";
    isValid = false;
  }
  let currentDate = new Date();
  let inputDate = new Date(year, month - 1, day);
  if (inputDate > currentDate) {
    document.getElementById("year-error").textContent =
      "Date cannot be in future";
    document.getElementById("year-error").style.color = "red";

    document.getElementById("year-head").style.color = "red";
    isValid = false;
  }
  if (isValid && day > 0 && month > 0 && year > 0) {
    let daysinMonth = new Date(year, month, 0).getDate();
    if (day > daysinMonth) {
      document.getElementById("day-error").textContent =
        "Day is invalid for the month";
      document.getElementById("day-error").style.color = "red";
      isValid = false;
    }
  }
  return isValid;
}
