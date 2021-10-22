/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hello = function() {
        console.log("hello " + firstName + "" + lastName + " !");
        }
}
document.getElementById("run").onclick

var mybuddy = new Person("Bill", "Gates");
mybuddy.hello();
