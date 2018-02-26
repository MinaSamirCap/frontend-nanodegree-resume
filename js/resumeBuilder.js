	/*
	This is empty on purpose! Your code to build the resume will go here.
	 */

	  $("#main").append(["MinaSamir"]);
	  console.log(299792458*1000/1000000000);

	  var awesomeThoughts = "Iam MinaSamir and Iam AWESOME";
	  console.log(awesomeThoughts);

	  var email = "minaSmair@gmail.com";
	  var newMail = email.replace("gmail", "mmd");
	  console.log(email);
	  console.log(newMail);
	  $("#main").append(email);

	  
	  var formattedName = HTMLheaderName.replace("%data%", "MinaSamir")

	  var formattedRole = "Android Developer"
	  formattedRole = HTMLheaderRole.replace("%data%", formattedRole)

	  $("#header").prepend(formattedRole);
	  $("#header").prepend(formattedName);

	  var target = "audacity";
	  target = target.slice(1, target.length);
	  console.log(target);

	  var bio = {
	  	"name": "Youstina",
	  	"age": 21
	  };

	  var bio2 = {
	  	"name": "Youstina",
	  	"age": 21
	  };

	  bio.address = "Elkarnak street ..";
	  bio2["address"] = "Elkarnak street .. next to eltamween office ..";

	  $("#main").append(bio["address"]);
	  $("#main").append(bio2.address);

