"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "@/lib/meals";

function isInvalidText(text) {
	return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
	const mealData = {
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
	};

	console.log("Meal Data:", mealData);
	if (
		isInvalidText(mealData.title) ||
		isInvalidText(mealData.summary) ||
		isInvalidText(mealData.instructions) ||
		isInvalidText(mealData.creator) ||
		isInvalidText(mealData.creator_email) ||
		!mealData.creator_email.includes("@") ||
		!mealData.image ||
		mealData.image.size === 0
	) {
		return {
			message: "Please fill in all fields and provide a valid image.",
		};
	}

	await saveMeal(mealData);
	redirect("/meals");
}
