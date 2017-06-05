// var firstName = "Mo";

//var age = 34;

//var awesomeThoughts = "My Resume";

//console.log(awesomeThoughts);

//adding and replacing name to you resume

var name = "Mohammed Beg"
var formattedName = HTMLheaderName.replace(
  "%data%", name);

  var role = "Murex Specialist";
  var formattedRole = HTMLheaderRole.replace(
    "%data%", role)

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  // adding your skills to you resume

  var skills =
  ["Unix, " , "SQL, " , "Python "]

    //  $("#main").append(skills);

  // adding my biograpthy to list instead

  var bio = {
    "name" : "Mohammed Beg " ,
    "role"  : "Murex developer",
    "Contact" : {
    "Mobile": "90879735",
    "linkedin": "Mohammed Beg",
    "email" : "mbeg@palo-it.com",
    "location": "Singapore"
  },
  "welcomeMessage": "learning is power",
  "skills" : [
    "Unix, " , "SQL, " , "Python "
  ],
  "bioPic": "images/me.jpg"
  };

  $("#main").append(bio.name);
  $("#main").append(bio.age);
  $("#main").prepend(bio.skills);
