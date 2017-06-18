var bio = {
  "name" : "Mohammed Beg " ,
  "role"  : "Murex developer",
  "contacts" : {
  "mobile": "+6590879735",
  "linkedin": "Mohammed Beg",
  "email" : "mbeg@palo-it.com",
  "github" : "mohammed",
  "location": "Living in Singapore"
},
"welcomeMessage": "''Learning is power, do not allow anyone to bring you down! ANYTHING and EVERYTHING in life is possible'' ",

"skills" : [
  "Unix, " , "SQL, " , "Python " , "Control-M " , "GIT-Release Automation ", "Release and Configuration Managment "
],
"biopic": "images/me.jpg"
};

var work = {
	"jobs": [
		{
			"employer": "DBS Bank Singapore",
			"title": "Senior Murex Specialist",
			"location": "MBFC Tower1, Singapore",
      "description" : "Configuration Managment, managing and doing the production releases for DBS",
			"dates": "March 2016 - Present"
		},
    {
			"employer": "Standard Bank South Africa",
			"title": "Senior Murex Specialist",
			"location": "Johannesburg, South Africa",
      "description": "Enviroment Mnagament within the Murex technical space, on the Equity desk",
			"dates": "Feb 2011 - Feb 2016"
		},
    {
     "employer": "Standard Bank, South Africa",
     "title": "Operation Shift Leader",
     "location": "Johannesburg, Constantia, South Africa",
     "description" : "Shift Leader within the Global Markets space for SBSA SA 24 hour operation Hub",
     "dates": "Feb 2007 - Jan 2011"
    }

  ]

};

var education = {
	"schools": [{
		"name": "Johannesburg Secondary School",
		"dates": "1996 - 2000",
		"location": "Homestead Park, South Africa",
		"High School": "Matric",
		"majors": ["Certification"],
    "degree": "Matric"
  }
],

	"onlineCourses": [{
			"school": "Verhoef Training",
			"title": "Unix System Administration",
			"dates": "November 2010",
			"url": "https://www.verhoeftraining.co.za"
		},
		{
			"school": "Udacity",
			"title": "Intro-to-Programming",
			"dates": "Feb 2017",
			"url": "https://www.udacity.com/course/"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Murex Equity Migration 2.11 to 3.1",
			"dates": "March 2011 - January 2013",
			"description": "Migration of the Equity instance from 2.11 to 3.1 ",
      "images": ["images/unix.jpg"],
      "Company"    : "Standard Bank, South Africa"
		},
		{
			"title": "Murex Equity Migration 2.11 to 3.1",
			"dates": "Current 2016",
			"description": "Migration of the One enitre Murex instance from 2.11 to 3.1 ",
      "images": ["images/reg.jpg"],
			"Company"    : "Standard Bank, South Africa"
		},
    {
      "title": "Online Portfolio",
      "dates": "Feb 2017",
      "images": ["images/pic.jpg"],
      "description": "created a web page as part of Udacity Intro-to-Programming Nano-Dregree "
    }
]
};


bio.display = function() {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedContact = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedWLmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts, #footerContacts").append(formattedContact);
  $("#topContacts, #footerContacts").append(formattedemail);
  $("#topContacts, #footerContacts").append(formattedlocation);
  $("#topContacts, #footerContacts").append(formattedgithub);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWLmsg);

  
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(skill, i){
  console.log(skill, i);
    $("#skills").append(HTMLskills.replace("%data%", skill));
  });

};

bio.display();


work.display = function() {
  if (work.jobs.length > 0) {
    work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);
      var employertitle = HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);
      $(".work-entry:last").append(employertitle);
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
    });
  }
};

work.display();

 projects.display = function() {
 	if(projects.projects.length > 0) {
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
      if (project.images.length > 0) {
        project.images.forEach(function(image) {
          $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
        });
      }
    });
  }
};

projects.display();

education.display = function() {
  if (education.schools.length > 0) {
    education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);
      var namedegree = HTMLschoolName.replace("%data%", school.name).replace("#", school.url) + HTMLschoolDegree.replace("%data%", school.degree);
      $(".education-entry:last").append(namedegree);
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
      if (school.majors.length > 0) {
        school.majors.forEach(function(major) {
          $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
        });
      }
    });
  }

  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
      var formattedschool = HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school);
      $(".online-entry:last").append(formattedschool);
      $(".online-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
      $(".online-entry:last").append(HTMLonlineURL.replace("%data%", course.url).replace("#", course.url));
    });
  }
};

 education.display();

function inName(name) {
  var namelist = name.trim().split(" ");
  var newname = namelist[0][0].toUpperCase() + namelist[0].slice(1).toLowerCase() + " " + namelist[1].toUpperCase();
  return newname;
}

// append map

$("#mapDiv").append(googleMap);
