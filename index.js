const cowsay = require("cowsay");
const dotenv = require("dotenv").config();

const name = process.env.NAME;
const campus = process.env.CAMPUS;

console.log(
	cowsay.say({
		text: "I'm a moooodule",
		e: "oO",
		T: "U ",
	}),
);
