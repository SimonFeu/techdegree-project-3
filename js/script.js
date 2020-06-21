//setting the focus on the text input field when loading the page
document.getElementById("name").focus();

//getting the selection-menu with the id 'title' and the 'job role' textfield
const otherTitile = document.getElementById("other-title");
const title = document.getElementById("title");

// Hiding function for the 'job role' textfild
function showOtherTitle() {
  if (title.options.selectedIndex === 5) {
    otherTitile.style.display = "";
  } else {
    otherTitile.style.display = "none";
  }
}

//the 'job role' textfield should not be visible the first time the web page is loaded
showOtherTitle();

/**
 * On selecting the 'job role' value 'other' the 'job role' textfield should be displayed.
 * So every change to the 'Job role' selection needs to be checked.
 * If the value is 'other' the function will display the 'job role' textfield.
 */
title.addEventListener("change", function() {
  showOtherTitle();
});

//Selecting the "Design" menu
const design = document.getElementById("design");
//Selecting the "Color" menu
const color = document.getElementById("color");

//When the web pages loads the "Color" menu shows "Pleas select a  T-shirt theme", because no Option in the "Design" menu is selected.
color.innerHTML =
  '<option value="noselection">Please select a T-shirt theme</option>';

//If the value in the "Design" menu is changed, the "Color" menu displays the appropriate content
design.addEventListener("change", () => {
  if (design.options.selectedIndex === 1) {
    items = `
        <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
        <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
        <option value="gold">Gold (JS Puns shirt only)</option>
        `;
  } else if (design.options.selectedIndex === 2) {
    items = `
    <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
    <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>
    <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>
    `;
  } else {
    items = `
    <option value="noselection">Please select a T-shirt theme</option>
    `;
  }
  color.innerHTML = items;
});

// display Total (p-Tag integrated into HTML document) ?????
const activities = document.querySelector(".activities");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const displayTotal = document.querySelector("#total");
let total = 0;

activities.addEventListener("change", event => {
  const clickedCheckbox = event.target;
  const checkboxTime = clickedCheckbox.getAttribute("data-day-and-time");
  const checkboxName = clickedCheckbox.getAttribute("name");
  const checkboxCheck = clickedCheckbox.checked;

  if (checkboxCheck == true) {
    total += parseInt(clickedCheckbox.getAttribute("data-cost"));
  } else {
    total -= parseInt(clickedCheckbox.getAttribute("data-cost"));
  }

  for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    if (
      checkbox.getAttribute("data-day-and-time") === checkboxTime &&
      checkbox.getAttribute("name") !== checkboxName
    ) {
      if (checkboxCheck == true) {
        checkbox.disabled = true;
      } else {
        checkbox.disabled = false;
      }
    }
  }

  displayTotal.innerHTML = `Total: $${total}`;
});

//Payment Info

const creditCard = document.querySelector("#credit-card");
const paypal = document.querySelector("#paypal");
const bitcoin = document.querySelector("#bitcoin");
const payment = document.querySelector("#payment");
const selectMethod = payment.querySelector([(value = "select method")]);

/**
 * "Payment Info" section
 * Credit Card payment option is shown by default.
 * Thats why paypal and bitcoin Payment information is set to display "none"
 * */
paypal.style.display = "none";
bitcoin.style.display = "none";

payment.addEventListener("change", () => {
  //"Select Payment Method" is set to display "none"
  payment.options[0].style.display = "none";
  if (payment.options.selectedIndex === 1) {
    creditCard.style.display = "";
    paypal.style.display = "none";
    bitcoin.style.display = "none";
  } else if (payment.options.selectedIndex === 2) {
    creditCard.style.display = "none";
    paypal.style.display = "";
    bitcoin.style.display = "none";
  } else if (payment.options.selectedIndex === 3) {
    creditCard.style.display = "none";
    paypal.style.display = "none";
    bitcoin.style.display = "";
  }
});

/**********************
 * FORM validation
 **********************/
const form = document.querySelector("form");
const name = document.querySelector("#name");
const validationMessageName = document.querySelector("#valName");
const email = document.querySelector("#mail");
const validationMessageMail = document.querySelector("#valMail");
const validationMessageActivities = document.querySelector("#valActivities");
const validationMessageCc = document.querySelector("#valCc");
const validationMessageZip = document.querySelector("#valZip");
const validationMessageCvv = document.querySelector("#valCvv");
const ccNum = document.querySelector("#cc-num");
const zip = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");

//Display none Validation Message
const validationMassage = document.querySelectorAll(".validationMassage");
for (let i = 0; i < validationMassage.length; i++) {
  validationMassage[i].style.display = "none";
}

/****************************
  Function to show Message
 ***************************
 *  This function takes the parameter validation, massageId, element
 *  If the validation has the value "true", the message in the index.html isn't displayed
    and the Borders of the textfilds stay normal
 *  If the validation has the value "false", the message in the index.html is displayed
    and if its a textfield the border color switches to red.
 *  There are no colorchanges for the checkbox elements. Thats why the value of the parameter
    "element" can be null.
 */

function showMessage(validation, messageId, element) {
  if (validation) {
    messageId.style.display = "none";
    if (element != null) {
      element.style.borderColor = "rgb(111, 157, 220)";
      element.style.borderWidth = "2px";
    }
  } else {
    messageId.style.display = "";
    if (element != null) {
      element.style.borderColor = "#e72222";
      element.style.borderWidth = "2px";
    }
  }
}

/****************************
  Validation Functions
 ***************************/
//Name: This textfield can't be blank
function validateName() {
  if (name.value == "") {
    return false;
  } else {
    return true;
  }
}

//Email: Email has to be formated like: name@adress.com
function validateEmail() {
  const regex = /^[^@]+@[^@.]+\.[a-z]+$/i;
  if (!regex.test(email.value)) {
    return false;
  } else {
    return true;
  }
}
// Activies:  one or more checkboxes need to be checked
function validateActivities() {
  let checked = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes[i];
    if (checkbox.checked) {
      checked += 1;
    }
  }
  if (checked == 0) {
    return false;
  } else {
    return true;
  }
}

// CreditCardNumber:   Has to be a number and between 13 and 16 digits long
function validateCardNumber() {
  return (
    !isNaN(ccNum.value) && ccNum.value.length >= 13 && ccNum.value.length <= 16
  );
}

// Zip:   Has to be a number and 5 digits long
function validateZip() {
  return !isNaN(zip.value) && zip.value.length == 5;
}

// CVV:   Has to be a number 3 digits long
function validateCVV() {
  return !isNaN(cvv.value) && cvv.value.length == 3;
}

//Validating Data on submiting the form
form.addEventListener("submit", e => {
  e.preventDefault();
  showMessage(validateName(), validationMessageName, name);
  showMessage(validateEmail(), validationMessageMail, email);
  showMessage(validateActivities(), validationMessageActivities, null);
  //Validation message only appears if Credit Card is selected
  if (payment.options.selectedIndex === 1) {
    showMessage(validateCardNumber(), validationMessageCc, ccNum);
    showMessage(validateZip(), validationMessageZip, zip);
    showMessage(validateCVV(), validationMessageCvv, cvv);
  }
});
