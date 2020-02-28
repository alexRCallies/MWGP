/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){

  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
     searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
      searchByTraits(people);
      break;
    default:
      alert("Invalid input. Please try again!");
      app(people); // restart app
    break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      
      // TODO: get person's info
      displayPerson(person);
      break;
    case "family":
      // TODO: get person's family
      break;
    case "descendants":
      // TODO: get person's descendants
      break;
    case "restart":
      app(people); // restart
      break;
    case "quit":
      return; // stop execution
    default:
      return mainMenu(person, people); // ask again
  }
}

var searchByName = function(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  let filteredPeople = people.filter(function(el) {
    if(el.firstName === firstName && el.lastName === lastName) {
      return el;
    }
  });

 mainMenu(filteredPeople, searchByName);

}

function searchByTraits(people){
  var filteredPeople;
  var searchTraits = promptFor("Choose a trait to search for:\nGender\nDate of Birth (mm/dd/year)\nHeight (inches)\nWeight (lbs)\nEye Color\nOccupation", chars).toLowerCase();
  switch(searchTraits){
    case "gender":
      var gender = promptFor("Enter the person's gender", chars);
      people = people.filter(function(el) {
        if(el.gender === gender) {
          return el;
        }
      });
      displayPeople(people);
      break;
    case "date of birth":
      var dob = promptFor("Enter the person's Date of Birth", chars);
      people = people.filter(function(el) {
        if(el.dob === dob) {
          return el;
        }
      });
      displayPeople(people);
      break;
    case "height":
      var height = promptFor("Enter the person's Height", chars);
      people = people.filter(function(el) {
        if(el.height === height) {
          return el;
        }
      });
      displayPeople(people);
      break;
    case "weight":
      var weight = promptFor("Enter the person's Weight", chars);
      people = people.filter(function(el) {
        if(el.weight === weight) {
          return el;
        }
      });
      displayPeople(people);
      break;
    case "eye color":
      var eyeColor = promptFor("Enter the person's Eye Color", chars);
      people = people.filter(function(el) {
        if(el.eyeColor === eyeColor) {
          return el;
        }
      });
      displayPeople(people);
      break;
    case "occupation":
      var occupation = promptFor("Enter the person's Occupation", chars);
      people = people.filter(function(el) {
        if(el.occupation === occupation) {
          return el;
        }
      });
      displayPeople(people);
      break;
  }
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
  var refineSearch = promptFor("Do you want to refine your search?", chars);
  switch(refineSearch){
    case "yes":
      searchByTraits(people);
      break;
    case "no":
      app(people);
      break;
  }
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Date of Birth: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, callback){
  do{
    var response = prompt(question).trim();
  } while(!response || !callback(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}