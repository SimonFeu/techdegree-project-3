# Interactive Form
## Techdegree Project 3

Live Version:  https://simonfeu.github.io/techdegree-project-3/

![image](https://user-images.githubusercontent.com/63255333/115662416-3dcc5300-a33f-11eb-94aa-54e45680c131.png)

![image](https://user-images.githubusercontent.com/63255333/115662360-2ab98300-a33f-11eb-9b2f-ffc4580563df.png)

![image](https://user-images.githubusercontent.com/63255333/115662284-0f4e7800-a33f-11eb-8736-4c57a9d4df7d.png)

![image](https://user-images.githubusercontent.com/63255333/115662316-170e1c80-a33f-11eb-8291-6ab60b5cac33.png)


## About the Project
In this project I created I form to collect data for a confernce. Form validation is handled on the client side (via Javascript and regular expressions).
Costumized error messages for each field are shown to the user if the input does not match the requirements. 

## Techniques used

* Regular Expressions - For form validation
* Progressive Enhancement - JavaScript added without making the page dependent upon JavaScript.

## Code Example


### "Payment Info" section
 * Credit Card payment option is shown by default.
 * Thats why paypal and bitcoin Payment information is set to display "none"
 * The option "Select Payment Method" should not be displayed
 * The option "Credit Card" is displayed by default

```javascript
paypal.style.display = "none";
bitcoin.style.display = "none";
payment.options[0].style.display = "none";
payment.options[1].setAttribute("selected", "selected");

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

});
```

### Function to show Message
 *  This function takes the parameter event, validation, massageId, element
 *  If the validation has the value "true", the message in the index.html isn't displayed
    and the borders of the textfilds stay normal
 *  If the validation has the value "false", the message in the index.html is displayed
    and if its a textfield the border color switches to red.
 *  There are no colorchanges for the checkbox elements. Thats why the value of the parameter
    "element" can be null.
 *  The parameter "event" is needed for the addEventListener. If the validation has the value "false"
    "preventDefault" is used to prevent the action triggered by the event.

```javascript
function showMessage(event, validation, messageId, element) {
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
    return event.preventDefault();
  }
```

### validateEmail function
Email has to be formated like: name@address.com
With the regular expression stored in the constant regex, this can be checked.

```javascript
function validateEmail() {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regex.test(email.value)) {
    return false;
  } else {
    return true;
  }
}
```

