var school = {
	name: "Knights Academy",
	"average class size": 25,
	mascot: "Knight"
};

document.getElementById('result').innerHTML = `${school.name} has an average class size of ${school['average class size']} and their mascot is a ${school.mascot}`;
