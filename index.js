import cowsay from "cowsay";
import dotenv from "dotenv";
dotenv.config();

const name = process.env.NAME;
const campus = process.env.CAMPUS;

console.log(
	cowsay.say({
		text: `I am ${name}, and I study on the campus ${campus}.`,
	}),
);
