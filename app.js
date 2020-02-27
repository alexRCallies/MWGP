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

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      
      // TODO: get person's info
      displayPerson(person[0]);
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
person = filteredPeople[0];
 mainMenu(person, searchByName);

}

function searchByTraits(people){
  var selectedTraits;
  var searchTraits = promptFor("Choose a trait to search for: Gender \n Date of Birth (mm/dd/year) \n Height (inches) \n Weight (lbs) \n Eye Color \n Occupation", char).toLocaleLowerCase();
  switch(searchTraits){
    case "gender":
      var gender = promptFor("What is the person's gender", chars);
      selectedTraits += chars;
      var moreTraits = promptFor("Would you like to enter more traits?", yesNo).toLocaleLowerCase();
      switch(moreTraits){
        case "yes":
          searchByTraits();
        case "no":
    case "date of birth":
      var dob = promptFor("What is the person's date of birth(mm/dd/year)?", chars);
      selectedTraits += chars;
      var moreTraits = promptFor("Would you like to enter more traits?", yesNo).toLocaleLowerCase();
      switch(moreTraits){
        case "yes":
          searchByTraits();
        case "no":
          ;
    case "height":
      var height = promptFor("What is the person's height(inches)?", chars);
      selectedTraits += chars;
      var moreTraits = promptFor("Would you like to enter more traits?", yesNo).toLocaleLowerCase();
      switch(moreTraits){
        case "yes":
          searchByTraits();
        case "no":
    case "weight":
      var weight = promptFor("What is the person's weight(lbs)?", chars);
      selectedTraits += chars;
      var moreTraits = promptFor("Would you like to enter more traits?", yesNo).toLocaleLowerCase();
      switch(moreTraits){
        case "yes":
          searchByTraits();
        case "no":
    case "eye color":
      var eyeColor = promptFor("What is the person's eye color?", chars);
      selectedTraits += chars;
      var moreTraits = promptFor("Would you like to enter more traits?", yesNo).toLocaleLowerCase();
      switch(moreTraits){
        case "yes":
          searchByTraits();
        case "no":
    case "occupation":
      var occupation = promptFor("What is the person's occupation?", chars);
      selectedTraits += chars;
      var moreTraits = promptFor("Would you like to enter more traits?", yesNo).toLocaleLowerCase();
      switch(moreTraits){
        case "yes":
          searchByTraits();
        case "no":
  }

  let filteredPeople = people.filter(function(el) {
    if(el.gender === gender && el.dob === dob && el.height === height && el.weight === weight && el.eyeColor === eyeColor && el.occupation === occupation){
      return el;
    }
  });

}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
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
