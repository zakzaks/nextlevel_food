"use server";

export async function shareMeal(formData) {
	const mealData = {
		name: formData.get("name"),
		email: formData.get("email"),
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
	};

	console.log(mealData);
}
