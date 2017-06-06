var bio = {
  "name" : "Mohammed Beg " ,
  "role"  : "Murex developer",
  "Contact" : {
  "mobile": "+6590879735",
  "linkedin": "Mohammed Beg",
  "email" : "mbeg@palo-it.com",
  "location": "Living in Singapore"
},
"welcomeMessage": "learning is power",

"skills" : [
  "Unix, " , "SQL, " , "Python "
],
"picture": "images/me.jpg"
};

var work = {
	"jobs": [
		{
			"employer": "DBS Bank Singapore",
			"title": "Senior Murex Specialist",
			"location": "MBFC Tower1, Singapore",
			"datesWorked": "March 2016 - Present"
		},
    {
			"employer": "Standard Bank South Africa",
			"title": "Senior Murex Specialist",
			"location": "Johannesburg, South Africa",
			"datesWorked": "Feb 2011 - Feb 2016"
		},
    {
     "employer": "Standard Bank, South Africa",
     "title": "Operation Shift Leader",
     "location": "Johannesburg, Constantia, South Africa",
     "datesWorked": "Feb 2007 - Jan 2011"
    }

  ]

};

var education = {
	"schools": [{
		"name": "Johannesburg Secondary School",
		"datesAttended": "1996 - 2000",
		"location": "Homestead Park, South Africa",
		"High School": "Matric",
		"major": "Computer Science"
	}],

	"onlineCourses": [{
			"school": "Verhoef Training",
			"title": "Unix System Administration",
			"completed": "November 2010",
			"url": "https://www.verhoeftraing.co.za"
		},
		{
			"school": "Udacity",
			"title": "Intro-to-Programming",
			"completed": "Feb 2017",
			"url": "https://www.udacity.com/course/"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Murex Equity Migration 2.11 to 3.1",
			"datesWorked": "March 2011 - January 2013",
			"description": "Migration of the Equity instance from 2.11 to 3.1 ",
      "Company"    : "Standard Bank, South Africa"
		},
		{
			"title": "Murex Equity Migration 2.11 to 3.1",
			"datesWorked": "Current 2016",
			"description": "Migration of the One enitre Murex instance from 2.11 to 3.1 ",
			"Company"    : "Standard Bank, South Africa"
		},
    {
      "title": "Online Portfolio",
      "datesWorked": "Feb 2017",
      "description": "created a web page as part of Udacity Intro-to-Programming Nano-Dregree "
    }
]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLmobile.replace("%data%", bio.Contact.mobile);
var formattedemail = HTMLemail.replace("%data%", bio.Contact.email);
var formattedlocation = HTMLlocation.replace("%data%", bio.Contact.location);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedContact);
$("#header").append(formattedemail);
$("#header").append(formattedlocation);


function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);



		for(var i in work.jobs) {

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();

     var projects;
projects.display = function() {
	if(projects.projects.length > 0) {
		for(var i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(var img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
};

projects.display();

     var education;

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(var i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);


			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);

    }
  }
};

education.display();
