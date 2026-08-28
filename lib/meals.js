import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "fs";

const db = sql("meals.db");

export async function getMeals() {
	// for loading simulation, we can add a delay here. Normally we would not do this in production code.
	await new Promise((resolve) => setTimeout(resolve, 2000));

	// throw new Error("Simulated error for testing error handling");
	return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug) {
	// for loading simulation, we can add a delay here. Normally we would not do this in production code.
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
	meal.instructions = xss(meal.instructions);
	meal.slug = slugify(meal.title, { lower: true });

	const extension = meal.image.name.split(".").pop();
	const fileName = `${meal.slug}.${extension}`;

	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await meal.image.arrayBuffer();

	stream.write(
		Buffer.from(bufferedImage, (err) => {
			if (err) {
				throw new Error("Saving image failed!");
			}
		}),
	);

	meal.image = `/images/${fileName}`;

	db.prepare(
		`
		INSERT INTO meals 
			(title, summary, instructions, creator, creator_email, image, slug)
		VALUES (
		@title,
		@summary,
		@instructions,
		@creator,
		@creator_email,
		@image,
		@slug
		)
		`,
	).run(meal);
}
