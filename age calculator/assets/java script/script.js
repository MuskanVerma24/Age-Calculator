document.querySelector("#calculate").addEventListener("click", function () {
  var input_date = document.getElementById("birth-date");
  input_date.max = new Date().toISOString().split("T")[0];

  var birth_date = new Date(input_date.value);
  var dobYear = birth_date.getFullYear();
  var dobMonth = birth_date.getMonth() + 1;
  var dobDate = birth_date.getDate();

  var user_input = document.getElementById("current_date");
  var current_date = new Date(user_input.value);
  var currentYear = current_date.getFullYear();
  var currentMonth = current_date.getMonth() + 1;
  var currentDate = current_date.getDate();

  if (input_date.value == "") {
    document.querySelectorAll(".date")[0].children[2].style.display = "block";
  }

  if (input_date.value != "") {
    document.querySelectorAll(".date")[0].children[2].style.display = "none";
  }

  if (user_input.value == "") {
    document.querySelectorAll(".date")[1].children[2].style.display = "block";
  }

  if (user_input.value != "") {
    document.querySelectorAll(".date")[1].children[2].style.display = "none";
  }
  if (input_date.value != "" && user_input.value != "") {
    document.querySelector(".resultant-age").style.display = "block";
  }
   if(input_date.value > user_input.value){
    document.querySelectorAll(".date")[0].children[2].style.display = "block";
    document.querySelector(".resultant-age").style.display = "none";
  }


  var year, month, days, hours, minutes;

  year = currentYear - dobYear;

  // month differnece
  if (currentMonth >= dobMonth) {
    month = currentMonth - dobMonth;
  } 
  else {
    year--;
    month = 12 + currentMonth - dobMonth;
  }
  // days difference
  if (currentDate >= dobDate) {
    days = currentDate - dobDate;
  } 
  else {
    month--;
    var no_of_days_in_dob = daysInMonth(dobMonth, dobYear);
    days = no_of_days_in_dob + currentDate - dobDate;

    // case when month differece goes negative
    if (month < 0) {
      month = 11;
      year--;
    }
  }

  var final_age = document.querySelector("#total-age1").children[1];
  var element = document.createElement("h4");
  element.textContent =
    year + " Years " + month + " Months " + days + "  Days ";
  final_age.replaceWith(element);

  //   years
  var final_years = document.querySelector("#total-age2").children[1];
  var element = document.createElement("h4");
  element.textContent = year;
  final_years.replaceWith(element);

  //   calculating total number of months
  if (year != 0) {
    month = 12 * year;
  }
  var final_month = document.querySelector("#total-age3").children[1];
  var element = document.createElement("h4");
  element.textContent = month;
  final_month.replaceWith(element);

  // calculating total number of days
  if (month != 0) {
    var no_of_days_in_dob = daysInMonth(dobMonth, dobYear);

    if (dobMonth <= currentMonth) {
      for (var a = dobMonth; a <= currentMonth; a++) {
        days = month * no_of_days_in_dob;
      }
    } else {
      for (var a = currentMonth; a <= dobMonth; a++) {
        days = month * no_of_days_in_dob;
      }
    }
  }
  var final_day = document.querySelector("#total-age4").children[1];
  var element = document.createElement("h4");
  element.textContent = days;
  final_day.replaceWith(element);

  // total hours
  hours = days * 24;
  var final_day = document.querySelector("#total-age5").children[1];
  var element = document.createElement("h4");
  element.textContent = hours;
  final_day.replaceWith(element);

  // total minutes
  minutes = hours * 60;
  var final_day = document.querySelector("#total-age6").children[1];
  var element = document.createElement("h4");
  element.textContent = minutes;
  final_day.replaceWith(element);
});

// function that returns number of days in a month
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
