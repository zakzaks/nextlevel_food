import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
	// for loading simulation, we can add a delay here. Normally we would not do this in production code.
	await new Promise((resolve) => setTimeout(resolve, 5000));

	// throw new Error("Simulated error for testing error handling");
	return db.prepare("SELECT * FROM meals").all();
}
