import express from "express";
import cors from "cors";
import connectionToDB from "./connection-to-db";
import dotenv from "dotenv";
import router from './Router/router'


dotenv.config()

const startServer = () => {
	const app = express();

	app.use(express.json());

	app.use(cors());

	connectionToDB()
		.then((res) => {
			console.log("Connected to database");

			// app.on("error", (err: any) => {
			// 	console.log(`Error Connecting to http://localhost:${process.env.PORT}`);
			// 	console.log(err.message);
			// });
			// console.log(res);

			app.listen(process.env.PORT, () => {
				console.log(`Server Running at http://localhost:${process.env.PORT}`);
			});
		})
		.catch((err: any) => {
			console.log(err.message);
		});
	   app.use('/',router)
};

startServer();
